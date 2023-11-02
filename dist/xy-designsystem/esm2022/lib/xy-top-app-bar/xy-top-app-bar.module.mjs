import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyTopAppBarComponent } from "./xy-top-app-bar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { XyButtonModule } from "../xy-button/xy-button.module";
import { MatIconModule } from "@angular/material/icon";
import { XySearchboxModule } from '../xy-searchbox/xy-searchbox.module';
import * as i0 from "@angular/core";
export class XyTopAppBarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTopAppBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyTopAppBarModule, declarations: [XyTopAppBarComponent], imports: [CommonModule,
            MatToolbarModule,
            MatDividerModule,
            XyButtonModule,
            MatIconModule,
            XySearchboxModule], exports: [XyTopAppBarComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTopAppBarModule, imports: [CommonModule,
            MatToolbarModule,
            MatDividerModule,
            XyButtonModule,
            MatIconModule,
            XySearchboxModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTopAppBarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XyTopAppBarComponent,
                    ],
                    imports: [
                        CommonModule,
                        MatToolbarModule,
                        MatDividerModule,
                        XyButtonModule,
                        MatIconModule,
                        XySearchboxModule
                    ],
                    exports: [
                        XyTopAppBarComponent
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktdG9wLWFwcC1iYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktdG9wLWFwcC1iYXIveHktdG9wLWFwcC1iYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBbUJ4RSxNQUFNLE9BQU8saUJBQWlCOzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFkMUIsb0JBQW9CLGFBR3BCLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxhQUFhO1lBQ2IsaUJBQWlCLGFBR2pCLG9CQUFvQjsrR0FHWCxpQkFBaUIsWUFYMUIsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGFBQWE7WUFDYixpQkFBaUI7OzJGQU1SLGlCQUFpQjtrQkFoQjdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7cUJBQ3JCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1h5VG9wQXBwQmFyQ29tcG9uZW50fSBmcm9tIFwiLi94eS10b3AtYXBwLWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhclwiO1xyXG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyXCI7XHJcbmltcG9ydCB7WHlCdXR0b25Nb2R1bGV9IGZyb20gXCIuLi94eS1idXR0b24veHktYnV0dG9uLm1vZHVsZVwiO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XHJcbmltcG9ydCB7IFh5U2VhcmNoYm94TW9kdWxlIH0gZnJvbSAnLi4veHktc2VhcmNoYm94L3h5LXNlYXJjaGJveC5tb2R1bGUnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBYeVRvcEFwcEJhckNvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXHJcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxyXG4gICAgWHlCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgWHlTZWFyY2hib3hNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFh5VG9wQXBwQmFyQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFh5VG9wQXBwQmFyTW9kdWxlIHsgfVxyXG4iXX0=