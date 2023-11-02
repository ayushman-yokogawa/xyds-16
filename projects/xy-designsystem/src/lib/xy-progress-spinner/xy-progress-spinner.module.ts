import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyProgressSpinnerComponent } from './xy-progress-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [XyProgressSpinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    XyProgressSpinnerComponent
  ]
})

export class XyProgressSpinnerModule { }
