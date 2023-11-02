import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyCardActionsComponent } from '../xy-card-actions/xy-card-actions.component';
import { XyCardHeaderActionComponent } from './xy-card-header-action.component';



@NgModule({
  declarations: [XyCardHeaderActionComponent],
  imports: [
    CommonModule
  ],
  exports:[
    XyCardHeaderActionComponent
  ]
})
export class XyCardHeaderActionModule { }
