import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XySidenavComponent } from "./xy-sidenav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";
import { RouterModule } from "@angular/router";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { XySidenavContainerComponent } from "./xy-sidenav-container.component";
import { XySidenavContentComponent } from "./xy-sidenav-content.component";
import { XySidenavItemComponent } from "./xy-sidenav-item.component";
import { CustomSidenavComponent } from './custom-sidenav/custom-sidenav.component';
import { XyButtonModule } from '../xy-button/xy-button.module';
import { MatExpansionModule } from '@angular/material/expansion';
import * as i0 from "@angular/core";
export class XySidenavModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySidenavModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XySidenavModule, declarations: [XySidenavComponent,
            XySidenavContainerComponent,
            XySidenavContentComponent,
            XySidenavItemComponent,
            CustomSidenavComponent], imports: [CommonModule,
            MatListModule,
            MatIconModule,
            MatRippleModule,
            DragDropModule,
            RouterModule,
            MatSidenavModule,
            XyButtonModule,
            MatExpansionModule], exports: [XySidenavComponent,
            XySidenavContainerComponent,
            XySidenavContentComponent,
            XySidenavItemComponent,
            CustomSidenavComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySidenavModule, imports: [CommonModule,
            MatListModule,
            MatIconModule,
            MatRippleModule,
            DragDropModule,
            RouterModule,
            MatSidenavModule,
            XyButtonModule,
            MatExpansionModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySidenavModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XySidenavComponent,
                        XySidenavContainerComponent,
                        XySidenavContentComponent,
                        XySidenavItemComponent,
                        CustomSidenavComponent
                    ],
                    imports: [
                        CommonModule,
                        MatListModule,
                        MatIconModule,
                        MatRippleModule,
                        DragDropModule,
                        RouterModule,
                        MatSidenavModule,
                        XyButtonModule,
                        MatExpansionModule
                    ],
                    exports: [
                        XySidenavComponent,
                        XySidenavContainerComponent,
                        XySidenavContentComponent,
                        XySidenavItemComponent,
                        CustomSidenavComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktc2lkZW5hdi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS1zaWRlbmF2L3h5LXNpZGVuYXYubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDN0UsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDekUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDOztBQTZCL0QsTUFBTSxPQUFPLGVBQWU7OEdBQWYsZUFBZTsrR0FBZixlQUFlLGlCQXpCeEIsa0JBQWtCO1lBQ2xCLDJCQUEyQjtZQUMzQix5QkFBeUI7WUFDekIsc0JBQXNCO1lBQ3RCLHNCQUFzQixhQUd0QixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYixlQUFlO1lBQ2YsY0FBYztZQUNkLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGtCQUFrQixhQUdsQixrQkFBa0I7WUFDbEIsMkJBQTJCO1lBQzNCLHlCQUF5QjtZQUN6QixzQkFBc0I7WUFDdEIsc0JBQXNCOytHQUdiLGVBQWUsWUFsQnhCLFlBQVk7WUFDWixhQUFhO1lBQ2IsYUFBYTtZQUNiLGVBQWU7WUFDZixjQUFjO1lBQ2QsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2Qsa0JBQWtCOzsyRkFVVCxlQUFlO2tCQTNCM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQiwyQkFBMkI7d0JBQzNCLHlCQUF5Qjt3QkFDekIsc0JBQXNCO3dCQUN0QixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2Qsa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQiwyQkFBMkI7d0JBQzNCLHlCQUF5Qjt3QkFDekIsc0JBQXNCO3dCQUN0QixzQkFBc0I7cUJBQ3ZCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1h5U2lkZW5hdkNvbXBvbmVudH0gZnJvbSBcIi4veHktc2lkZW5hdi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYXRTaWRlbmF2TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdlwiO1xyXG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9saXN0XCI7XHJcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcclxuaW1wb3J0IHtNYXRSaXBwbGVNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7RHJhZ0Ryb3BNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7WHlTaWRlbmF2Q29udGFpbmVyQ29tcG9uZW50fSBmcm9tIFwiLi94eS1zaWRlbmF2LWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtYeVNpZGVuYXZDb250ZW50Q29tcG9uZW50fSBmcm9tIFwiLi94eS1zaWRlbmF2LWNvbnRlbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7WHlTaWRlbmF2SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4veHktc2lkZW5hdi1pdGVtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDdXN0b21TaWRlbmF2Q29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20tc2lkZW5hdi9jdXN0b20tc2lkZW5hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBYeUJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL3h5LWJ1dHRvbi94eS1idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHtNYXRFeHBhbnNpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgWHlTaWRlbmF2Q29tcG9uZW50LFxyXG4gICAgWHlTaWRlbmF2Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgWHlTaWRlbmF2Q29udGVudENvbXBvbmVudCxcclxuICAgIFh5U2lkZW5hdkl0ZW1Db21wb25lbnQsXHJcbiAgICBDdXN0b21TaWRlbmF2Q29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRMaXN0TW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdFJpcHBsZU1vZHVsZSxcclxuICAgIERyYWdEcm9wTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcclxuICAgIFh5QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBYeVNpZGVuYXZDb21wb25lbnQsXHJcbiAgICBYeVNpZGVuYXZDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBYeVNpZGVuYXZDb250ZW50Q29tcG9uZW50LFxyXG4gICAgWHlTaWRlbmF2SXRlbUNvbXBvbmVudCxcclxuICAgIEN1c3RvbVNpZGVuYXZDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYeVNpZGVuYXZNb2R1bGUgeyB9XHJcbiJdfQ==