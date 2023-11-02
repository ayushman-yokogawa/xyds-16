import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { XyButtonComponent } from "./xy-button.component";
import * as i0 from "@angular/core";
export class XyButtonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyButtonModule, declarations: [XyButtonComponent], imports: [CommonModule,
            MatButtonModule,
            MatRippleModule,
            MatIconModule], exports: [XyButtonComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyButtonModule, imports: [CommonModule,
            MatButtonModule,
            MatRippleModule,
            MatIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XyButtonComponent,
                    ],
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatRippleModule,
                        MatIconModule
                    ],
                    exports: [
                        XyButtonComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LWJ1dHRvbi94eS1idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDOztBQWlCeEQsTUFBTSxPQUFPLGNBQWM7OEdBQWQsY0FBYzsrR0FBZCxjQUFjLGlCQVp2QixpQkFBaUIsYUFHYixZQUFZO1lBQ1osZUFBZTtZQUNmLGVBQWU7WUFDZixhQUFhLGFBR2pCLGlCQUFpQjsrR0FHUixjQUFjLFlBVG5CLFlBQVk7WUFDWixlQUFlO1lBQ2YsZUFBZTtZQUNmLGFBQWE7OzJGQU1SLGNBQWM7a0JBZDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjtxQkFDbEI7b0JBQ0MsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7cUJBQ2hCO29CQUNILE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7cUJBQ2xCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xyXG5pbXBvcnQge01hdFJpcHBsZU1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcclxuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xyXG5pbXBvcnQge1h5QnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi94eS1idXR0b24uY29tcG9uZW50XCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFh5QnV0dG9uQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRSaXBwbGVNb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZVxyXG4gICAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBYeUJ1dHRvbkNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFh5QnV0dG9uTW9kdWxlIHsgfVxyXG4iXX0=