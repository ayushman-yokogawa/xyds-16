import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyBreadcrumbComponent } from './xy-breadcrumb.component';
import { RouterModule, Router } from '@angular/router';
import { XyBreadcrumbService } from './breadcrumb.service';
import * as i0 from "@angular/core";
export function breadcrumbServiceFactory(router) {
    return new XyBreadcrumbService(router);
}
export class XyBreadcrumbModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyBreadcrumbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyBreadcrumbModule, declarations: [XyBreadcrumbComponent], imports: [CommonModule,
            RouterModule], exports: [XyBreadcrumbComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyBreadcrumbModule, providers: [
            { provide: XyBreadcrumbService, useFactory: breadcrumbServiceFactory, deps: [Router] }
        ], imports: [CommonModule,
            RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyBreadcrumbModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XyBreadcrumbComponent
                    ],
                    imports: [
                        CommonModule,
                        RouterModule
                    ],
                    exports: [
                        XyBreadcrumbComponent
                    ],
                    providers: [
                        { provide: XyBreadcrumbService, useFactory: breadcrumbServiceFactory, deps: [Router] }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS1icmVhZGNydW1iL3h5LWJyZWFkY3J1bWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSxFQUFHLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNELE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxNQUFjO0lBQ3JELE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBZ0JELE1BQU0sT0FBTyxrQkFBa0I7OEdBQWxCLGtCQUFrQjsrR0FBbEIsa0JBQWtCLGlCQWIzQixxQkFBcUIsYUFHckIsWUFBWTtZQUNaLFlBQVksYUFHWixxQkFBcUI7K0dBTVosa0JBQWtCLGFBSmxCO1lBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ3pGLFlBUkcsWUFBWTtZQUNaLFlBQVk7OzJGQVNILGtCQUFrQjtrQkFmOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBQzt3QkFDTixxQkFBcUI7cUJBQ3RCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7cUJBQ3pGO2lCQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgWHlCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi94eS1icmVhZGNydW1iLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLFJvdXRlciAgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgWHlCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vYnJlYWRjcnVtYi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBicmVhZGNydW1iU2VydmljZUZhY3Rvcnkocm91dGVyOiBSb3V0ZXIpIHtcclxuICByZXR1cm4gbmV3IFh5QnJlYWRjcnVtYlNlcnZpY2Uocm91dGVyKTtcclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgWHlCcmVhZGNydW1iQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6W1xyXG4gICAgWHlCcmVhZGNydW1iQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogWHlCcmVhZGNydW1iU2VydmljZSwgdXNlRmFjdG9yeTogYnJlYWRjcnVtYlNlcnZpY2VGYWN0b3J5LCBkZXBzOiBbUm91dGVyXSB9XHJcbl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFh5QnJlYWRjcnVtYk1vZHVsZSB7IH1cclxuIl19