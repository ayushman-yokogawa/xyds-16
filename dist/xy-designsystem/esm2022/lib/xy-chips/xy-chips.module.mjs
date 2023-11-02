import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { XyChipsComponent } from './xy-chips.component';
import { XyChipsListComponent } from './xy-chips-list/xy-chips-list.component';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class XyChipsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyChipsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyChipsModule, declarations: [XyChipsComponent, XyChipsListComponent], imports: [CommonModule,
            MatChipsModule,
            MatIconModule], exports: [XyChipsComponent,
            XyChipsListComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyChipsModule, imports: [CommonModule,
            MatChipsModule,
            MatIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyChipsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [XyChipsComponent, XyChipsListComponent],
                    imports: [
                        CommonModule,
                        MatChipsModule,
                        MatIconModule
                    ],
                    exports: [
                        XyChipsComponent,
                        XyChipsListComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktY2hpcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktY2hpcHMveHktY2hpcHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBZ0J2RCxNQUFNLE9BQU8sYUFBYTs4R0FBYixhQUFhOytHQUFiLGFBQWEsaUJBWFQsZ0JBQWdCLEVBQUUsb0JBQW9CLGFBRW5ELFlBQVk7WUFDWixjQUFjO1lBQ2QsYUFBYSxhQUdiLGdCQUFnQjtZQUNoQixvQkFBb0I7K0dBR1gsYUFBYSxZQVR0QixZQUFZO1lBQ1osY0FBYztZQUNkLGFBQWE7OzJGQU9KLGFBQWE7a0JBWnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUM7b0JBQ3RELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUM7d0JBQ04sZ0JBQWdCO3dCQUNoQixvQkFBb0I7cUJBQ3JCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtNYXRDaGlwc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xyXG5pbXBvcnQgeyBYeUNoaXBzQ29tcG9uZW50IH0gZnJvbSAnLi94eS1jaGlwcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBYeUNoaXBzTGlzdENvbXBvbmVudCB9IGZyb20gJy4veHktY2hpcHMtbGlzdC94eS1jaGlwcy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtYeUNoaXBzQ29tcG9uZW50LCBYeUNoaXBzTGlzdENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0Q2hpcHNNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgIFh5Q2hpcHNDb21wb25lbnQsXHJcbiAgICBYeUNoaXBzTGlzdENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFh5Q2hpcHNNb2R1bGUgeyB9XHJcbiJdfQ==