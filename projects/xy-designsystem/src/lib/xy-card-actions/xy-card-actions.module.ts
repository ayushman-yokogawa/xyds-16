import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyCardActionsComponent} from "./xy-card-actions.component";

@NgModule({
  declarations: [
    XyCardActionsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    XyCardActionsComponent,
  ]
})
export class XyCardActionsModule { }
