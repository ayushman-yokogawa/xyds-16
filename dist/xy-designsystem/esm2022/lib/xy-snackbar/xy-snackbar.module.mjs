import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XySnackbarComponent } from './xy-snackbar.component';
import { XyButtonModule } from '../xy-button/xy-button.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import * as i0 from "@angular/core";
export class XySnackbarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySnackbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XySnackbarModule, declarations: [XySnackbarComponent], imports: [CommonModule,
            MatDialogModule,
            MatIconModule,
            MatButtonModule,
            MatDividerModule,
            XyButtonModule], exports: [XySnackbarComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySnackbarModule, imports: [CommonModule,
            MatDialogModule,
            MatIconModule,
            MatButtonModule,
            MatDividerModule,
            XyButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySnackbarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [XySnackbarComponent],
                    imports: [
                        CommonModule,
                        MatDialogModule,
                        MatIconModule,
                        MatButtonModule,
                        MatDividerModule,
                        XyButtonModule,
                    ],
                    exports: [
                        XySnackbarComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktc25hY2tiYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktc25hY2tiYXIveHktc25hY2tiYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFtQjdELE1BQU0sT0FBTyxnQkFBZ0I7OEdBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQWRaLG1CQUFtQixhQUVoQyxZQUFZO1lBQ1osZUFBZTtZQUNmLGFBQWE7WUFDYixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGNBQWMsYUFJZCxtQkFBbUI7K0dBR1YsZ0JBQWdCLFlBWnpCLFlBQVk7WUFDWixlQUFlO1lBQ2YsYUFBYTtZQUNiLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsY0FBYzs7MkZBT0wsZ0JBQWdCO2tCQWY1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGNBQWM7cUJBRWY7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjtxQkFDcEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBYeVNuYWNrYmFyQ29tcG9uZW50IH0gZnJvbSAnLi94eS1zbmFja2Jhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge01hdFNuYWNrQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBYeUJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL3h5LWJ1dHRvbi94eS1idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgWHlJbnB1dE1vZHVsZSB9IGZyb20gJy4uL3h5LWlucHV0L3h5LWlucHV0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xyXG5pbXBvcnQgeyBYeURpYWxvZ01vZHVsZSB9IGZyb20gJy4uL3h5LWRpYWxvZy94eS1kaWFsb2cubW9kdWxlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1h5U25hY2tiYXJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxyXG4gICAgWHlCdXR0b25Nb2R1bGUsXHJcbiAgICBcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFh5U25hY2tiYXJDb21wb25lbnQsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWHlTbmFja2Jhck1vZHVsZSB7IH1cclxuIl19