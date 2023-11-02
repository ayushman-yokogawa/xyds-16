import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyTabComponent } from "./xy-tab.component";
import { MatTabsModule } from "@angular/material/tabs";
import { XyTabGroupComponent } from "./xy-tab-group.component";
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class XyTabModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyTabModule, declarations: [XyTabComponent,
            XyTabGroupComponent], imports: [CommonModule,
            MatTabsModule,
            MatIconModule], exports: [XyTabComponent,
            XyTabGroupComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTabModule, imports: [CommonModule,
            MatTabsModule,
            MatIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTabModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XyTabComponent,
                        XyTabGroupComponent
                    ],
                    imports: [
                        CommonModule,
                        MatTabsModule,
                        MatIconModule
                    ],
                    exports: [
                        XyTabComponent,
                        XyTabGroupComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktdGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LXRhYi94eS10YWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFXLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQWtCaEUsTUFBTSxPQUFPLFdBQVc7OEdBQVgsV0FBVzsrR0FBWCxXQUFXLGlCQWJwQixjQUFjO1lBQ2QsbUJBQW1CLGFBR25CLFlBQVk7WUFDWixhQUFhO1lBQ2IsYUFBYSxhQUdiLGNBQWM7WUFDZCxtQkFBbUI7K0dBR1YsV0FBVyxZQVRwQixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7OzJGQU9KLFdBQVc7a0JBZnZCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGNBQWM7d0JBQ2QsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsbUJBQW1CO3FCQUNwQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtYeVRhYkNvbXBvbmVudH0gZnJvbSBcIi4veHktdGFiLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJzXCI7XHJcbmltcG9ydCB7WHlUYWJHcm91cENvbXBvbmVudH0gZnJvbSBcIi4veHktdGFiLWdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYXRJY29uLCBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFh5VGFiQ29tcG9uZW50LFxyXG4gICAgWHlUYWJHcm91cENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0VGFic01vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFh5VGFiQ29tcG9uZW50LFxyXG4gICAgWHlUYWJHcm91cENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFh5VGFiTW9kdWxlIHsgfVxyXG4iXX0=