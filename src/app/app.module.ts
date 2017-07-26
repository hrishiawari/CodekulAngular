import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SizerDirective } from './Directives/sizer.directive';
import { MagicalMathDirective } from './Directives/magical-math.directive';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { MainComponent } from './home/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
        SizerDirective,
        MagicalMathDirective,
        HomeComponent,
        SidebarComponent,
        MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
