import { Directive, HostListener, Input } from '@angular/core';
import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';

@Directive({
  selector: '[tooltip]',
  providers: [MatTooltip]
})
export class TooltipDirective {
  tooltip: MatTooltip;
  @Input('tooltip') myDir!: string;
  @Input() placement: TooltipPosition = 'above';
  @Input() tooltipClass!: string;

  constructor(tooltip: MatTooltip) {
    this.tooltip = tooltip;
  }

  @HostListener('mouseover')
  mouseover() {
    this.tooltip.message = this.myDir;
    this.tooltip.position = this.placement;
    this.tooltip.show();
    if (this.tooltipClass) {
      this.tooltip.tooltipClass = this.tooltipClass;
    }
  }

  @HostListener('mouseout')
  mouseout() {
    this.tooltip.hide();
  }

}
