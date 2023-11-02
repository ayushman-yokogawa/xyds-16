import { NgModule } from '@angular/core';
import { XyAutocompleteComponent } from './xy-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XyInputModule } from '../xy-input/xy-input.module';
import { MatIconModule } from '@angular/material/icon';
import { XySearchboxModule } from '../xy-searchbox/xy-searchbox.module';
import * as i0 from "@angular/core";
export class XyAutocompleteModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyAutocompleteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyAutocompleteModule, declarations: [XyAutocompleteComponent], imports: [CommonModule,
            MatAutocompleteModule,
            MatInputModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            FormsModule,
            XyInputModule,
            MatIconModule,
            XySearchboxModule], exports: [XyAutocompleteComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyAutocompleteModule, imports: [CommonModule,
            MatAutocompleteModule,
            MatInputModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            FormsModule,
            XyInputModule,
            MatIconModule,
            XySearchboxModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyAutocompleteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [XyAutocompleteComponent],
                    imports: [
                        CommonModule,
                        MatAutocompleteModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        FormsModule,
                        XyInputModule,
                        MatIconModule,
                        XySearchboxModule
                    ],
                    exports: [
                        XyAutocompleteComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktYXV0b2NvbXBsZXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LWF1dG9jb21wbGV0ZS94eS1hdXRvY29tcGxldGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFvQnhFLE1BQU0sT0FBTyxvQkFBb0I7OEdBQXBCLG9CQUFvQjsrR0FBcEIsb0JBQW9CLGlCQWhCaEIsdUJBQXVCLGFBRXBDLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsV0FBVztZQUNYLGFBQWE7WUFDYixhQUFhO1lBQ2IsaUJBQWlCLGFBR2pCLHVCQUF1QjsrR0FHZCxvQkFBb0IsWUFkN0IsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsYUFBYTtZQUNiLGFBQWE7WUFDYixpQkFBaUI7OzJGQU1SLG9CQUFvQjtrQkFqQmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUM7d0JBQ04sdUJBQXVCO3FCQUN4QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFh5QXV0b2NvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi94eS1hdXRvY29tcGxldGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgWHlJbnB1dE1vZHVsZSB9IGZyb20gJy4uL3h5LWlucHV0L3h5LWlucHV0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgWHlTZWFyY2hib3hNb2R1bGUgfSBmcm9tICcuLi94eS1zZWFyY2hib3gveHktc2VhcmNoYm94Lm1vZHVsZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtYeUF1dG9jb21wbGV0ZUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLCBcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgWHlJbnB1dE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBYeVNlYXJjaGJveE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czpbXHJcbiAgICBYeUF1dG9jb21wbGV0ZUNvbXBvbmVudCxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYeUF1dG9jb21wbGV0ZU1vZHVsZSB7IH1cclxuIl19