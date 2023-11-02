import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyHintComponent} from "./xy-hint.component";

@NgModule({
  declarations: [
    XyHintComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    XyHintComponent,
  ]
})
export class XyHintModule { }
