import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyExpensionPanelComponent } from './xy-expension-panel.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { XyAccordionComponent } from './xy-accordion/xy-accordion.component';



@NgModule({
  declarations: [XyExpensionPanelComponent, XyAccordionComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
  ],
  exports: [
    XyExpensionPanelComponent,
    XyAccordionComponent
  ]
})
export class XyExpensionPanelModule { }
