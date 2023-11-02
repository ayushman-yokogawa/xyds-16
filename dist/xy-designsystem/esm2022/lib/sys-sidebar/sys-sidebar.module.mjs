import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XyInputModule } from '../xy-input/xy-input.module';
import { MatIconModule } from '@angular/material/icon';
import { XySearchboxModule } from '../xy-searchbox/xy-searchbox.module';
import { SysSidebarComponent } from './sys-sidebar.component';
import { SysSidebarItemComponent } from './sys-sidebar-item/sys-sidebar-item.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
export class XySidebarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySidebarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XySidebarModule, declarations: [SysSidebarComponent, SysSidebarItemComponent], imports: [CommonModule,
            MatAutocompleteModule,
            MatInputModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            FormsModule,
            XyInputModule,
            MatIconModule,
            XySearchboxModule,
            RouterModule,
            RouterModule,
            MatSidenavModule,
            MatTooltipModule], exports: [SysSidebarComponent,
            SysSidebarItemComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySidebarModule, imports: [CommonModule,
            MatAutocompleteModule,
            MatInputModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            FormsModule,
            XyInputModule,
            MatIconModule,
            XySearchboxModule,
            RouterModule,
            RouterModule,
            MatSidenavModule,
            MatTooltipModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySidebarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SysSidebarComponent, SysSidebarItemComponent],
                    imports: [
                        CommonModule,
                        MatAutocompleteModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        FormsModule,
                        XyInputModule,
                        MatIconModule,
                        XySearchboxModule,
                        RouterModule,
                        RouterModule,
                        MatSidenavModule,
                        MatTooltipModule
                    ],
                    exports: [
                        SysSidebarComponent,
                        SysSidebarItemComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzLXNpZGViYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIvc3lzLXNpZGViYXIvc3lzLXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBeUI3RCxNQUFNLE9BQU8sZUFBZTs4R0FBZixlQUFlOytHQUFmLGVBQWUsaUJBckJYLG1CQUFtQixFQUFFLHVCQUF1QixhQUV6RCxZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxhQUFhO1lBQ2IsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixnQkFBZ0IsYUFHaEIsbUJBQW1CO1lBQ25CLHVCQUF1QjsrR0FHZCxlQUFlLFlBbkJ4QixZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxhQUFhO1lBQ2IsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixnQkFBZ0I7OzJGQU9QLGVBQWU7a0JBdEIzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDO29CQUM1RCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUM7d0JBQ04sbUJBQW1CO3dCQUNuQix1QkFBdUI7cUJBQ3hCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgWHlJbnB1dE1vZHVsZSB9IGZyb20gJy4uL3h5LWlucHV0L3h5LWlucHV0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgWHlTZWFyY2hib3hNb2R1bGUgfSBmcm9tICcuLi94eS1zZWFyY2hib3gveHktc2VhcmNoYm94Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFN5c1NpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3N5cy1zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN5c1NpZGViYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zeXMtc2lkZWJhci1pdGVtL3N5cy1zaWRlYmFyLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtTeXNTaWRlYmFyQ29tcG9uZW50LCBTeXNTaWRlYmFySXRlbUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLCBcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgWHlJbnB1dE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBYeVNlYXJjaGJveE1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgIFN5c1NpZGViYXJDb21wb25lbnQsXHJcbiAgICBTeXNTaWRlYmFySXRlbUNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFh5U2lkZWJhck1vZHVsZSB7IH1cclxuIl19