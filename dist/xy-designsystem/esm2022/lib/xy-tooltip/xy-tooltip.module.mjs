import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './xy-tooltip.directive';
import { XyTooltipComponent } from './xy-tooltip.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
export class XyTooltipModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyTooltipModule, declarations: [TooltipDirective, XyTooltipComponent], imports: [CommonModule,
            MatTooltipModule], exports: [TooltipDirective,
            XyTooltipComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTooltipModule, imports: [CommonModule,
            MatTooltipModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TooltipDirective, XyTooltipComponent],
                    imports: [
                        CommonModule,
                        MatTooltipModule
                    ],
                    exports: [
                        TooltipDirective,
                        XyTooltipComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktdG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS10b29sdGlwL3h5LXRvb2x0aXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQWdCN0QsTUFBTSxPQUFPLGVBQWU7OEdBQWYsZUFBZTsrR0FBZixlQUFlLGlCQVZYLGdCQUFnQixFQUFFLGtCQUFrQixhQUVqRCxZQUFZO1lBQ1osZ0JBQWdCLGFBR2hCLGdCQUFnQjtZQUNoQixrQkFBa0I7K0dBR1QsZUFBZSxZQVJ4QixZQUFZO1lBQ1osZ0JBQWdCOzsyRkFPUCxlQUFlO2tCQVgzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDO29CQUNwRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGtCQUFrQjtxQkFDbkI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi94eS10b29sdGlwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFh5VG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4veHktdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcblxyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1Rvb2x0aXBEaXJlY3RpdmUsIFh5VG9vbHRpcENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLCBcclxuICAgIE1hdFRvb2x0aXBNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFRvb2x0aXBEaXJlY3RpdmUgLFxyXG4gICAgWHlUb29sdGlwQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWHlUb29sdGlwTW9kdWxlIHt9XHJcbiJdfQ==