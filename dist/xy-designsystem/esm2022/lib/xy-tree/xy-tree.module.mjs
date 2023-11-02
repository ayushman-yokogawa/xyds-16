import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { XyTreeComponent } from "./xy-tree.component";
import { MatTreeModule } from "@angular/material/tree";
import { MatRippleModule } from "@angular/material/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { XyButtonModule } from "../xy-button/xy-button.module";
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
export class XyTreeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyTreeModule, declarations: [XyTreeComponent], imports: [CommonModule,
            MatTreeModule,
            MatIconModule,
            MatRippleModule,
            DragDropModule,
            XyButtonModule,
            MatTooltipModule], exports: [XyTreeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTreeModule, imports: [CommonModule,
            MatTreeModule,
            MatIconModule,
            MatRippleModule,
            DragDropModule,
            XyButtonModule,
            MatTooltipModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTreeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XyTreeComponent
                    ],
                    imports: [
                        CommonModule,
                        MatTreeModule,
                        MatIconModule,
                        MatRippleModule,
                        DragDropModule,
                        XyButtonModule,
                        MatTooltipModule
                    ],
                    exports: [
                        XyTreeComponent
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktdHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS10cmVlL3h5LXRyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQXFCN0QsTUFBTSxPQUFPLFlBQVk7OEdBQVosWUFBWTsrR0FBWixZQUFZLGlCQWZyQixlQUFlLGFBR1gsWUFBWTtZQUNaLGFBQWE7WUFDYixhQUFhO1lBQ2IsZUFBZTtZQUNmLGNBQWM7WUFDZCxjQUFjO1lBQ2QsZ0JBQWdCLGFBR3BCLGVBQWU7K0dBR04sWUFBWSxZQVpqQixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYixlQUFlO1lBQ2YsY0FBYztZQUNkLGNBQWM7WUFDZCxnQkFBZ0I7OzJGQU1YLFlBQVk7a0JBakJ4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3FCQUNoQjtvQkFDQyxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZ0JBQWdCO3FCQUNuQjtvQkFDSCxPQUFPLEVBQUU7d0JBQ1AsZUFBZTtxQkFDaEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcclxuaW1wb3J0IHtYeVRyZWVDb21wb25lbnR9IGZyb20gXCIuL3h5LXRyZWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWF0VHJlZU1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RyZWVcIjtcclxuaW1wb3J0IHtNYXRSaXBwbGVNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XHJcbmltcG9ydCB7RHJhZ0Ryb3BNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7WHlCdXR0b25Nb2R1bGV9IGZyb20gXCIuLi94eS1idXR0b24veHktYnV0dG9uLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IFRyZWVDb250cm9sU2VydmljZSB9IGZyb20gJy4vdHJlZS1jb250cm9sLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBYeVRyZWVDb21wb25lbnRcclxuICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBNYXRUcmVlTW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlLFxyXG4gICAgICAgIERyYWdEcm9wTW9kdWxlLFxyXG4gICAgICAgIFh5QnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGVcclxuICAgIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgWHlUcmVlQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFh5VHJlZU1vZHVsZSB7IH1cclxuIl19