import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyExpensionPanelComponent } from './xy-expension-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { XyAccordionComponent } from './xy-accordion/xy-accordion.component';
import * as i0 from "@angular/core";
export class XyExpensionPanelModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyExpensionPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyExpensionPanelModule, declarations: [XyExpensionPanelComponent, XyAccordionComponent], imports: [CommonModule,
            MatExpansionModule,
            MatIconModule], exports: [XyExpensionPanelComponent,
            XyAccordionComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyExpensionPanelModule, imports: [CommonModule,
            MatExpansionModule,
            MatIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyExpensionPanelModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktZXhwZW5zaW9uLXBhbmVsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LWV4cGVuc2lvbi1wYW5lbC94eS1leHBlbnNpb24tcGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBZ0Isa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBZ0I3RSxNQUFNLE9BQU8sc0JBQXNCOzhHQUF0QixzQkFBc0I7K0dBQXRCLHNCQUFzQixpQkFYbEIseUJBQXlCLEVBQUUsb0JBQW9CLGFBRTVELFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsYUFBYSxhQUdiLHlCQUF5QjtZQUN6QixvQkFBb0I7K0dBR1gsc0JBQXNCLFlBVC9CLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsYUFBYTs7MkZBT0osc0JBQXNCO2tCQVpsQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHlCQUF5QixFQUFFLG9CQUFvQixDQUFDO29CQUMvRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlCQUF5Qjt3QkFDekIsb0JBQW9CO3FCQUNyQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFh5RXhwZW5zaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3h5LWV4cGVuc2lvbi1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRBY2NvcmRpb24sIE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgWHlBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL3h5LWFjY29yZGlvbi94eS1hY2NvcmRpb24uY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtYeUV4cGVuc2lvblBhbmVsQ29tcG9uZW50LCBYeUFjY29yZGlvbkNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFh5RXhwZW5zaW9uUGFuZWxDb21wb25lbnQsXHJcbiAgICBYeUFjY29yZGlvbkNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFh5RXhwZW5zaW9uUGFuZWxNb2R1bGUgeyB9XHJcbiJdfQ==