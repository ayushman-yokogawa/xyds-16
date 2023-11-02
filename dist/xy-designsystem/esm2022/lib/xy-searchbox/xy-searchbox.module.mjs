import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XySearchboxComponent } from "./xy-searchbox.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { XyInputModule } from "../xy-input/xy-input.module";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i0 from "@angular/core";
export class XySearchboxModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySearchboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XySearchboxModule, declarations: [XySearchboxComponent], imports: [CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            MatIconModule,
            XyInputModule,
            MatAutocompleteModule], exports: [XySearchboxComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySearchboxModule, imports: [CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            MatIconModule,
            XyInputModule,
            MatAutocompleteModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySearchboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XySearchboxComponent,
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatIconModule,
                        XyInputModule,
                        MatAutocompleteModule
                    ],
                    exports: [
                        XySearchboxComponent
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktc2VhcmNoYm94Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LXNlYXJjaGJveC94eS1zZWFyY2hib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQW1CdkUsTUFBTSxPQUFPLGlCQUFpQjs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBZDFCLG9CQUFvQixhQUdwQixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxhQUFhO1lBQ2IsYUFBYTtZQUNiLHFCQUFxQixhQUdyQixvQkFBb0I7K0dBR1gsaUJBQWlCLFlBWDFCLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLGFBQWE7WUFDYixhQUFhO1lBQ2IscUJBQXFCOzsyRkFNWixpQkFBaUI7a0JBaEI3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGFBQWE7d0JBQ2IscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3FCQUNyQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtYeVNlYXJjaGJveENvbXBvbmVudH0gZnJvbSBcIi4veHktc2VhcmNoYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXRcIjtcclxuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xyXG5pbXBvcnQge1h5SW5wdXRNb2R1bGV9IGZyb20gXCIuLi94eS1pbnB1dC94eS1pbnB1dC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgWHlTZWFyY2hib3hDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgWHlJbnB1dE1vZHVsZSxcclxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgWHlTZWFyY2hib3hDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgWHlTZWFyY2hib3hNb2R1bGUgeyB9XHJcbiJdfQ==