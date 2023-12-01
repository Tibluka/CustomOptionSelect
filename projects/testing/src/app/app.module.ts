import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomOptionSelectModule } from '@lucasgomesagacode/custom-option-select';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomOptionSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
