import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SizerDirective } from './Directives/sizer.directive';
import { MagicalMathDirective } from './Directives/magical-math.directive';

@NgModule({
  declarations: [
    AppComponent,
        SizerDirective,
        MagicalMathDirective,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
