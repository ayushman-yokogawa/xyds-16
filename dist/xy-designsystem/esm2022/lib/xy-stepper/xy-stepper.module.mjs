import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyStepperComponent } from './xy-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from "@angular/material/toolbar";
import { XyStepComponent } from './xy-step/xy-step.component';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class XyStepperModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyStepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyStepperModule, declarations: [XyStepperComponent, XyStepComponent], imports: [CommonModule,
            MatStepperModule,
            MatToolbarModule,
            MatIconModule], exports: [XyStepperComponent,
            XyStepComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyStepperModule, imports: [CommonModule,
            MatStepperModule,
            MatToolbarModule,
            MatIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyStepperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [XyStepperComponent, XyStepComponent],
                    imports: [
                        CommonModule,
                        MatStepperModule,
                        MatToolbarModule,
                        MatIconModule
                    ],
                    exports: [
                        XyStepperComponent,
                        XyStepComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktc3RlcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS1zdGVwcGVyL3h5LXN0ZXBwZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBZXZELE1BQU0sT0FBTyxlQUFlOzhHQUFmLGVBQWU7K0dBQWYsZUFBZSxpQkFaWCxrQkFBa0IsRUFBRSxlQUFlLGFBRWhELFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGFBQWEsYUFHYixrQkFBa0I7WUFDbEIsZUFBZTsrR0FHTixlQUFlLFlBVnhCLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGFBQWE7OzJGQU9KLGVBQWU7a0JBYjNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDO29CQUNuRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUM7d0JBQ04sa0JBQWtCO3dCQUNsQixlQUFlO3FCQUNoQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFh5U3RlcHBlckNvbXBvbmVudCB9IGZyb20gJy4veHktc3RlcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge01hdFN0ZXBwZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXInO1xyXG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyXCI7XHJcbmltcG9ydCB7IFh5U3RlcENvbXBvbmVudCB9IGZyb20gJy4veHktc3RlcC94eS1zdGVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbWHlTdGVwcGVyQ29tcG9uZW50LCBYeVN0ZXBDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXHJcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czpbXHJcbiAgICBYeVN0ZXBwZXJDb21wb25lbnQsXHJcbiAgICBYeVN0ZXBDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYeVN0ZXBwZXJNb2R1bGUgeyB9XHJcbiJdfQ==