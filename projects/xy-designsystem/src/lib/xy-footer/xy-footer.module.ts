import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyFooterComponent } from './xy-footer.component';



@NgModule({
  declarations: [XyFooterComponent],
  imports: [
    CommonModule
  ],
  exports :[
    XyFooterComponent
  ]
})
export class XyFooterModule { }
