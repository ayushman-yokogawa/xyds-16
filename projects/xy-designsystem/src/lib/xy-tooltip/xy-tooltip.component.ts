import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'xy-tooltip',
  template:   ``,
  styleUrls: ['./xy-tooltip.component.scss'],
 
})
export class XyTooltipComponent {
  tooltip = '';
  placement!: string;
  class: any;
  tooltipClass: any;
  constructor() {
  }

}
