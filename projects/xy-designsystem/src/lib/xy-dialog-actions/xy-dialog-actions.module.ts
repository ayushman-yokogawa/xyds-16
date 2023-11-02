import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyDialogActionsComponent} from "./xy-dialog-actions.component";

@NgModule({
  declarations: [
    XyDialogActionsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    XyDialogActionsComponent,
  ]
})
export class XyDialogActionsModule { }
