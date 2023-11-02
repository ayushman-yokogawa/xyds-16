import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './xy-tooltip.directive';
import { XyTooltipComponent } from './xy-tooltip.component';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  declarations: [TooltipDirective, XyTooltipComponent],
  imports: [
    CommonModule, 
    MatTooltipModule
  ],
  exports: [
    TooltipDirective ,
    XyTooltipComponent
  ]
})
export class XyTooltipModule {}
