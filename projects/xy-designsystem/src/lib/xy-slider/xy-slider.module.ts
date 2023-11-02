import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XySliderComponent } from './xy-slider.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [XySliderComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    XySliderComponent
  ]
})
export class XySliderModule { }
