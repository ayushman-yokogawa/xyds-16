import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyColumnComponent} from "./xy-column.component";

@NgModule({
  declarations: [
    XyColumnComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    XyColumnComponent,
  ]
})
export class XyColumnModule { }
