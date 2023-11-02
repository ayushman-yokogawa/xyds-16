import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyBadgeComponent } from './xy-badge.component';
import { MatBadgeModule } from '@angular/material/badge';
import { XyButtonModule } from "../xy-button/xy-button.module";
import { MatButtonModule } from "@angular/material/button";
import * as i0 from "@angular/core";
export class XyBadgeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyBadgeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyBadgeModule, declarations: [XyBadgeComponent], imports: [CommonModule,
            MatBadgeModule,
            XyButtonModule,
            MatButtonModule], exports: [XyBadgeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyBadgeModule, imports: [CommonModule,
            MatBadgeModule,
            XyButtonModule,
            MatButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyBadgeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XyBadgeComponent
                    ],
                    imports: [
                        CommonModule,
                        MatBadgeModule,
                        XyButtonModule,
                        MatButtonModule
                    ],
                    exports: [
                        XyBadgeComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktYmFkZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktYmFkZ2UveHktYmFkZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOztBQWdCekQsTUFBTSxPQUFPLGFBQWE7OEdBQWIsYUFBYTsrR0FBYixhQUFhLGlCQVp0QixnQkFBZ0IsYUFHaEIsWUFBWTtZQUNaLGNBQWM7WUFDZCxjQUFjO1lBQ2QsZUFBZSxhQUdmLGdCQUFnQjsrR0FHUCxhQUFhLFlBVHRCLFlBQVk7WUFDWixjQUFjO1lBQ2QsY0FBYztZQUNkLGVBQWU7OzJGQU1OLGFBQWE7a0JBZHpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBQzt3QkFDTixnQkFBZ0I7cUJBQ2pCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgWHlCYWRnZUNvbXBvbmVudCB9IGZyb20gJy4veHktYmFkZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXRCYWRnZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2UnO1xyXG5pbXBvcnQge1h5QnV0dG9uTW9kdWxlfSBmcm9tIFwiLi4veHktYnV0dG9uL3h5LWJ1dHRvbi5tb2R1bGVcIjtcclxuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9idXR0b25cIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBYeUJhZGdlQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRCYWRnZU1vZHVsZSxcclxuICAgIFh5QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgIFh5QmFkZ2VDb21wb25lbnQsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWHlCYWRnZU1vZHVsZSB7IH1cclxuIl19