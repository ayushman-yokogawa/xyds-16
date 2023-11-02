import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyMenuComponent, XyMenuNodeComponent } from "./xy-menu.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { XyMenuItemComponent } from "./xy-menu-item.component";
import { MatIconModule } from "@angular/material/icon";
import { XyCheckboxModule } from "../xy-checkbox/xy-checkbox.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import * as i0 from "@angular/core";
export class XyMenuModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyMenuModule, declarations: [XyMenuComponent,
            XyMenuItemComponent,
            XyMenuNodeComponent], imports: [CommonModule,
            MatMenuModule,
            MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            XyCheckboxModule], exports: [XyMenuComponent,
            XyMenuItemComponent,
            XyMenuNodeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyMenuModule, imports: [CommonModule,
            MatMenuModule,
            MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            XyCheckboxModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XyMenuComponent,
                        XyMenuItemComponent,
                        XyMenuNodeComponent
                    ],
                    imports: [
                        CommonModule,
                        MatMenuModule,
                        MatButtonModule,
                        MatIconModule,
                        MatFormFieldModule,
                        XyCheckboxModule,
                    ],
                    exports: [
                        XyMenuComponent,
                        XyMenuItemComponent,
                        XyMenuNodeComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS1tZW51L3h5LW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7QUFzQmhFLE1BQU0sT0FBTyxZQUFZOzhHQUFaLFlBQVk7K0dBQVosWUFBWSxpQkFsQnJCLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsbUJBQW1CLGFBR25CLFlBQVk7WUFDWixhQUFhO1lBQ2IsZUFBZTtZQUNmLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsZ0JBQWdCLGFBR2hCLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsbUJBQW1COytHQUdWLFlBQVksWUFickIsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlO1lBQ2YsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixnQkFBZ0I7OzJGQVFQLFlBQVk7a0JBcEJ4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixtQkFBbUI7cUJBQ3BCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1h5TWVudUNvbXBvbmVudCwgWHlNZW51Tm9kZUNvbXBvbmVudH0gZnJvbSBcIi4veHktbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudVwiO1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xyXG5pbXBvcnQge1h5TWVudUl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3h5LW1lbnUtaXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xyXG5pbXBvcnQge1h5Q2hlY2tib3hNb2R1bGV9IGZyb20gXCIuLi94eS1jaGVja2JveC94eS1jaGVja2JveC5tb2R1bGVcIjtcclxuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgWHlNZW51Q29tcG9uZW50LFxyXG4gICAgWHlNZW51SXRlbUNvbXBvbmVudCxcclxuICAgIFh5TWVudU5vZGVDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgWHlDaGVja2JveE1vZHVsZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFh5TWVudUNvbXBvbmVudCxcclxuICAgIFh5TWVudUl0ZW1Db21wb25lbnQsXHJcbiAgICBYeU1lbnVOb2RlQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWHlNZW51TW9kdWxlIHsgfVxyXG4iXX0=