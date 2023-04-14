import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovingBackgroundComponent } from './components/moving-background/moving-background.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { ParallaxElementDirective } from './directives/parallax-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    MovingBackgroundComponent,
    MusicPlayerComponent,
    ParallaxElementDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
