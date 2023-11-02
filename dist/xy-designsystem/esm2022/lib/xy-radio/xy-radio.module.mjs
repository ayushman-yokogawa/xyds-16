import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from "@angular/material/radio";
import { XyRadioComponent } from "./xy-radio.component";
import { XyRadioGroupComponent } from "./xy-radio-group.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import * as i0 from "@angular/core";
export class XyRadioModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyRadioModule, declarations: [XyRadioComponent,
            XyRadioGroupComponent], imports: [CommonModule,
            MatRadioModule,
            MatFormFieldModule,
            ReactiveFormsModule], exports: [XyRadioComponent,
            XyRadioGroupComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyRadioModule, imports: [CommonModule,
            MatRadioModule,
            MatFormFieldModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XyRadioComponent,
                        XyRadioGroupComponent
                    ],
                    imports: [
                        CommonModule,
                        MatRadioModule,
                        MatFormFieldModule,
                        ReactiveFormsModule
                    ],
                    exports: [
                        XyRadioComponent,
                        XyRadioGroupComponent
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktcmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktcmFkaW8veHktcmFkaW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7QUFtQmhFLE1BQU0sT0FBTyxhQUFhOzhHQUFiLGFBQWE7K0dBQWIsYUFBYSxpQkFkdEIsZ0JBQWdCO1lBQ2hCLHFCQUFxQixhQUdyQixZQUFZO1lBQ1osY0FBYztZQUNkLGtCQUFrQjtZQUNsQixtQkFBbUIsYUFHbkIsZ0JBQWdCO1lBQ2hCLHFCQUFxQjsrR0FHWixhQUFhLFlBVnRCLFlBQVk7WUFDWixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLG1CQUFtQjs7MkZBT1YsYUFBYTtrQkFoQnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjt3QkFDaEIscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixxQkFBcUI7cUJBQ3RCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW9cIjtcclxuaW1wb3J0IHtYeVJhZGlvQ29tcG9uZW50fSBmcm9tIFwiLi94eS1yYWRpby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtYeVJhZGlvR3JvdXBDb21wb25lbnR9IGZyb20gXCIuL3h5LXJhZGlvLWdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGRcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgWHlSYWRpb0NvbXBvbmVudCxcclxuICAgIFh5UmFkaW9Hcm91cENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0UmFkaW9Nb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBYeVJhZGlvQ29tcG9uZW50LFxyXG4gICAgWHlSYWRpb0dyb3VwQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFh5UmFkaW9Nb2R1bGUge1xyXG59XHJcbiJdfQ==