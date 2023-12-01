import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomOptionComponent } from './custom-option/custom-option.component';




@NgModule({
  declarations: [
    CustomOptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomOptionComponent
  ]
})
export class CustomOptionSelectModule { }
