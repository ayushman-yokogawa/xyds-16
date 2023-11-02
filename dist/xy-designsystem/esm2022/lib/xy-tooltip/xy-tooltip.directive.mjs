import { Directive, HostListener, Input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export class TooltipDirective {
    constructor(tooltip) {
        this.placement = 'above';
        this.tooltip = tooltip;
    }
    mouseover() {
        this.tooltip.message = this.myDir;
        this.tooltip.position = this.placement;
        this.tooltip.show();
        if (this.tooltipClass) {
            this.tooltip.tooltipClass = this.tooltipClass;
        }
    }
    mouseout() {
        this.tooltip.hide();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: TooltipDirective, deps: [{ token: i1.MatTooltip }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.1", type: TooltipDirective, selector: "[tooltip]", inputs: { myDir: ["tooltip", "myDir"], placement: "placement", tooltipClass: "tooltipClass" }, host: { listeners: { "mouseover": "mouseover()", "mouseout": "mouseout()" } }, providers: [MatTooltip], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tooltip]',
                    providers: [MatTooltip]
                }]
        }], ctorParameters: function () { return [{ type: i1.MatTooltip }]; }, propDecorators: { myDir: [{
                type: Input,
                args: ['tooltip']
            }], placement: [{
                type: Input
            }], tooltipClass: [{
                type: Input
            }], mouseover: [{
                type: HostListener,
                args: ['mouseover']
            }], mouseout: [{
                type: HostListener,
                args: ['mouseout']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS10b29sdGlwL3h5LXRvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFtQixNQUFNLDJCQUEyQixDQUFDOzs7QUFNeEUsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQixZQUFZLE9BQW1CO1FBSHRCLGNBQVMsR0FBb0IsT0FBTyxDQUFDO1FBSTVDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFHRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs4R0F2QlUsZ0JBQWdCO2tHQUFoQixnQkFBZ0Isa05BRmhCLENBQUMsVUFBVSxDQUFDOzsyRkFFWixnQkFBZ0I7a0JBSjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztpQkFDeEI7aUdBR21CLEtBQUs7c0JBQXRCLEtBQUs7dUJBQUMsU0FBUztnQkFDUCxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBT04sU0FBUztzQkFEUixZQUFZO3VCQUFDLFdBQVc7Z0JBV3pCLFFBQVE7c0JBRFAsWUFBWTt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXAsIFRvb2x0aXBQb3NpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbdG9vbHRpcF0nLFxyXG4gIHByb3ZpZGVyczogW01hdFRvb2x0aXBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIHtcclxuICB0b29sdGlwOiBNYXRUb29sdGlwO1xyXG4gIEBJbnB1dCgndG9vbHRpcCcpIG15RGlyITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogVG9vbHRpcFBvc2l0aW9uID0gJ2Fib3ZlJztcclxuICBASW5wdXQoKSB0b29sdGlwQ2xhc3MhOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRvb2x0aXA6IE1hdFRvb2x0aXApIHtcclxuICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXA7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKVxyXG4gIG1vdXNlb3ZlcigpIHtcclxuICAgIHRoaXMudG9vbHRpcC5tZXNzYWdlID0gdGhpcy5teURpcjtcclxuICAgIHRoaXMudG9vbHRpcC5wb3NpdGlvbiA9IHRoaXMucGxhY2VtZW50O1xyXG4gICAgdGhpcy50b29sdGlwLnNob3coKTtcclxuICAgIGlmICh0aGlzLnRvb2x0aXBDbGFzcykge1xyXG4gICAgICB0aGlzLnRvb2x0aXAudG9vbHRpcENsYXNzID0gdGhpcy50b29sdGlwQ2xhc3M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZW91dCcpXHJcbiAgbW91c2VvdXQoKSB7XHJcbiAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19