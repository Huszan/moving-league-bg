import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, Input, OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicPlayerComponent implements AfterViewInit, OnDestroy {
  @Input() isAutoplay = false;

  @ViewChild('audioEl') audioPlayerRef: ElementRef | undefined;

  private _loadingIntervalRef: any;

  ngAfterViewInit() {
    this._setLoadingInterval(1000);
  }

  constructor(
    private _cdr: ChangeDetectorRef,
  ) {
  }

  get progress() {
    if (!this.audioPlayerRef) return 0;
    let current = this.audioPlayerRef!.nativeElement.currentTime;
    let duration = this.audioPlayerRef!.nativeElement.duration;
    return current / duration;
  }

  private _setLoadingInterval(interval: number) {
    this._loadingIntervalRef = setInterval(
      () => {
        if(!this.audioPlayerRef?.nativeElement.paused) {
          this._cdr.detectChanges();
        }
      }, interval
    )
  }

  ngOnDestroy() {
    clearInterval(this._loadingIntervalRef);
  }

}
