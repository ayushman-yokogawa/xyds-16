import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyContainerComponent} from "./xy-container.component";

@NgModule({
  declarations: [
    XyContainerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    XyContainerComponent,
  ]
})
export class XyContainerModule { }
