import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyInputComponent } from "./xy-input.component";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { XyHintModule } from "../xy-hint/xy-hint.module";
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from "@angular/material/legacy-progress-spinner";
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import * as i0 from "@angular/core";
export class XyInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyInputModule, declarations: [XyInputComponent], imports: [CommonModule,
            MatInputModule,
            ReactiveFormsModule,
            MatIconModule,
            MatButtonModule,
            XyHintModule,
            FormsModule,
            MatProgressSpinnerModule,
            MatAutocompleteModule,
            MatDatepickerModule,
            MatNativeDateModule], exports: [XyInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyInputModule, imports: [CommonModule,
            MatInputModule,
            ReactiveFormsModule,
            MatIconModule,
            MatButtonModule,
            XyHintModule,
            FormsModule,
            MatProgressSpinnerModule,
            MatAutocompleteModule,
            MatDatepickerModule,
            MatNativeDateModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XyInputComponent,
                    ],
                    imports: [
                        CommonModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        MatButtonModule,
                        XyHintModule,
                        FormsModule,
                        MatProgressSpinnerModule,
                        MatAutocompleteModule,
                        MatDatepickerModule,
                        MatNativeDateModule
                    ],
                    exports: [
                        XyInputComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktaW5wdXQveHktaW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxvQkFBb0IsSUFBSSxjQUFjLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxxQkFBcUIsSUFBSSxlQUFlLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLDhCQUE4QixJQUFJLHdCQUF3QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDckgsT0FBTyxFQUFFLDJCQUEyQixJQUFJLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBeUI3RCxNQUFNLE9BQU8sYUFBYTs4R0FBYixhQUFhOytHQUFiLGFBQWEsaUJBbkJ0QixnQkFBZ0IsYUFHWixZQUFZO1lBQ1osY0FBYztZQUNkLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsZUFBZTtZQUNmLFlBQVk7WUFDWixXQUFXO1lBQ1gsd0JBQXdCO1lBQ3hCLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIsbUJBQW1CLGFBR3ZCLGdCQUFnQjsrR0FHUCxhQUFhLFlBaEJsQixZQUFZO1lBQ1osY0FBYztZQUNkLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsZUFBZTtZQUNmLFlBQVk7WUFDWixXQUFXO1lBQ1gsd0JBQXdCO1lBQ3hCLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIsbUJBQW1COzsyRkFNZCxhQUFhO2tCQXJCekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDQyxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCx3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixtQkFBbUI7cUJBQ3RCO29CQUNILE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7cUJBQ2pCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1h5SW5wdXRDb21wb25lbnR9IGZyb20gXCIuL3h5LWlucHV0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01hdExlZ2FjeUlucHV0TW9kdWxlIGFzIE1hdElucHV0TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWlucHV0XCI7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XHJcbmltcG9ydCB7TWF0TGVnYWN5QnV0dG9uTW9kdWxlIGFzIE1hdEJ1dHRvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b25cIjtcclxuaW1wb3J0IHtYeUhpbnRNb2R1bGV9IGZyb20gXCIuLi94eS1oaW50L3h5LWhpbnQubW9kdWxlXCI7XHJcbmltcG9ydCB7TWF0TGVnYWN5UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIGFzIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1wcm9ncmVzcy1zcGlubmVyXCI7XHJcbmltcG9ydCB7IE1hdExlZ2FjeUF1dG9jb21wbGV0ZU1vZHVsZSBhcyBNYXRBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBYeUlucHV0Q29tcG9uZW50LFxyXG4gIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICAgICAgWHlIaW50TW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcclxuICAgICAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXHJcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlXHJcbiAgICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFh5SW5wdXRDb21wb25lbnQsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWHlJbnB1dE1vZHVsZSB7IH1cclxuIl19