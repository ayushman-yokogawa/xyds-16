import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyDividerComponent } from './xy-divider.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [XyDividerComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports:[
    XyDividerComponent
  ]
})
export class XyDividerModule { }
