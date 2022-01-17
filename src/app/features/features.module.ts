import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageComponent } from './pages/main/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: []
})
export class FeaturesModule { }
