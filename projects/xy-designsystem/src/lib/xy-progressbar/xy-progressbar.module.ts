import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyProgressbarComponent } from './xy-progressbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    XyProgressbarComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports:[
    XyProgressbarComponent
  ]
})
export class XyProgressbarModule { }
