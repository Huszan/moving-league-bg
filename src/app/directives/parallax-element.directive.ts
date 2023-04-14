import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appParallaxElement]'
})
export class ParallaxElementDirective implements OnInit {
  @Input() isInverted: boolean = false;
  @Input() movement: number = 0.025;
  @Input() translateX: string = '0%';
  @Input() translateY: string = '0%';
  @Input() rotateY: string = '0deg';
  private _current = {
    x: 0,
    y: 0,
  }
  constructor(private eleRef: ElementRef) {}

  ngOnInit(): void {
    this.eleRef.nativeElement.style.position = 'absolute';
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    this.movement = this.movement ? this.movement : 0.025;

    const cursorX = event.pageX;
    const cursorY = event.pageY;

    if (!this.isInverted) {
      this._current.x = cursorX * this.movement;
      this._current.y = cursorY * this.movement;
    } else {
      this._current.x = -(cursorX * this.movement);
      this._current.y = -(cursorY * this.movement);
    }
    this.eleRef.nativeElement.style.transform =
      `
      translate(
        calc(${ this._current.x }px + ${ this.translateX }),
        calc(${ this._current.y }px + ${this.translateY})
      )
      rotateY(${this.rotateY})
      `;
  }
}
