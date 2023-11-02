import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter, forkJoin, map, of, switchMap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
export class SysBreadcrumbComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.breadcrumbItems = [];
    }
    ngOnInit() {
        // Try to build breadcrumb on component initialization
        this.buildBreadcrumb(this.activatedRoute.root, '', []).subscribe(breadcrumb => {
            this.breadcrumbItems = breadcrumb;
            this.setRouteParams(breadcrumb);
        });
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd), switchMap(() => this.buildBreadcrumb(this.activatedRoute.root, '', [])))
            .subscribe(breadcrumb => {
            this.breadcrumbItems = breadcrumb;
            this.setRouteParams(breadcrumb);
        });
        const storedBreadcrumb = this.getRouteParams();
        if (storedBreadcrumb) {
            this.breadcrumbItems = storedBreadcrumb;
        }
    }
    buildBreadcrumb(route, url = '', breadcrumb = []) {
        const label = route.snapshot.data['breadcrumb'] || '';
        const path = route.routeConfig?.path || '';
        if (label && path && path !== '') { // Exclude parent route from breadcrumb
            const nextUrl = `${url}${path}/`;
            const breadcrumbItem = { label, link: nextUrl };
            breadcrumb.push(breadcrumbItem);
        }
        const childRoutes = route.children;
        if (childRoutes.length > 0) {
            const childBreadcrumbs$ = childRoutes.map(childRoute => this.buildBreadcrumb(childRoute, `${url}${path}/`, [...breadcrumb]));
            return forkJoin(childBreadcrumbs$).pipe(map(childBreadcrumbs => {
                const mergedBreadcrumbs = childBreadcrumbs.reduce((acc, curr) => [...acc, ...curr], []);
                return [...mergedBreadcrumbs];
            }));
        }
        return of(breadcrumb);
    }
    setRouteParams(breadcrumb) {
        const breadcrumbParam = breadcrumb.map(item => ({ label: item.label, link: item.link }));
        this.router.navigate([], {
            queryParams: { breadcrumb: JSON.stringify(breadcrumbParam) },
            replaceUrl: true,
        });
    }
    getRouteParams() {
        const breadcrumbParam = this.activatedRoute.snapshot.queryParamMap.get('breadcrumb');
        if (breadcrumbParam) {
            try {
                const breadcrumb = JSON.parse(breadcrumbParam);
                return breadcrumb;
            }
            catch (error) {
                console.error('Error parsing breadcrumb route parameter:', error);
            }
        }
        return null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: SysBreadcrumbComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: SysBreadcrumbComponent, selector: "xy-breadcrumb-menu", ngImport: i0, template: "<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\" *ngFor=\"let item of breadcrumbItems; let last = last\" [ngClass]=\"{ 'inactive-link': last }\">\r\n    <a [routerLink]=\"item.link\">{{ item.label }}</a>\r\n  </li>\r\n</ol>\r\n", styles: ["@charset \"UTF-8\";.breadcrumb{padding:10px 12px;list-style:none!important;list-style-type:none}.breadcrumb li{display:inline}.breadcrumb li+li:before{padding:8px;color:#000;content:\"\\203a\";font-size:23px}.breadcrumb li a{color:#0275d8;text-decoration:none;font-size:14px!important}ol.breadcrumb li a:hover{color:#01447e;text-decoration:underline}.inactive-link a{color:#000!important;text-decoration:none!important;pointer-events:none}ol{padding-left:0!important}:host-context(.dark-theme) .inactive-link a{color:#fff!important}:host-context(.dark-theme) .breadcrumb li+li:before{padding:8px;color:#fff;content:\"\\203a\"}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: SysBreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'xy-breadcrumb-menu', template: "<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\" *ngFor=\"let item of breadcrumbItems; let last = last\" [ngClass]=\"{ 'inactive-link': last }\">\r\n    <a [routerLink]=\"item.link\">{{ item.label }}</a>\r\n  </li>\r\n</ol>\r\n", styles: ["@charset \"UTF-8\";.breadcrumb{padding:10px 12px;list-style:none!important;list-style-type:none}.breadcrumb li{display:inline}.breadcrumb li+li:before{padding:8px;color:#000;content:\"\\203a\";font-size:23px}.breadcrumb li a{color:#0275d8;text-decoration:none;font-size:14px!important}ol.breadcrumb li a:hover{color:#01447e;text-decoration:underline}.inactive-link a{color:#000!important;text-decoration:none!important;pointer-events:none}ol{padding-left:0!important}:host-context(.dark-theme) .inactive-link a{color:#fff!important}:host-context(.dark-theme) .breadcrumb li+li:before{padding:8px;color:#fff;content:\"\\203a\"}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzLWJyZWFkY3J1bWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIvc3lzLWJyZWFkY3J1bWIvc3lzLWJyZWFkY3J1bWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIvc3lzLWJyZWFkY3J1bWIvc3lzLWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFrQixhQUFhLEVBQTBCLE1BQU0saUJBQWlCLENBQUM7QUFDeEYsT0FBTyxFQUFjLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFZeEUsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxZQUFvQixNQUFjLEVBQVUsY0FBOEI7UUFBdEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUYxRSxvQkFBZSxHQUFxQixFQUFFLENBQUM7SUFFc0MsQ0FBQztJQUU5RSxRQUFRO1FBQ04sc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM1RSxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2YsSUFBSSxDQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsRUFDL0MsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ3hFO2FBQ0EsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFTCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQyxJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBR0QsZUFBZSxDQUNiLEtBQXFCLEVBQ3JCLE1BQWMsRUFBRSxFQUNoQixhQUErQixFQUFFO1FBRWpDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0RCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUM7UUFFM0MsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsRUFBRSx1Q0FBdUM7WUFDekUsTUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7WUFDakMsTUFBTSxjQUFjLEdBQW1CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUNoRSxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE1BQU0saUJBQWlCLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FDcEUsQ0FBQztZQUNGLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDckIsTUFBTSxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3hGLE9BQU8sQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztTQUNIO1FBRUQsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxVQUE0QjtRQUN6QyxNQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUN2QixXQUFXLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUM1RCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckYsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSTtnQkFDRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLFVBQVUsQ0FBQzthQUNuQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkU7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs4R0E5RVUsc0JBQXNCO2tHQUF0QixzQkFBc0IsMERDZG5DLGlQQUtBOzsyRkRTYSxzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0Usb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBQUklNQVJZX09VVExFVCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZmlsdGVyLCBmb3JrSm9pbiwgbWFwLCBvZiwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbnRlcmZhY2UgQnJlYWRjcnVtYkl0ZW0ge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgbGluazogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3h5LWJyZWFkY3J1bWItbWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N5cy1icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zeXMtYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeXNCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBicmVhZGNydW1iSXRlbXM6IEJyZWFkY3J1bWJJdGVtW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gVHJ5IHRvIGJ1aWxkIGJyZWFkY3J1bWIgb24gY29tcG9uZW50IGluaXRpYWxpemF0aW9uXHJcbiAgICB0aGlzLmJ1aWxkQnJlYWRjcnVtYih0aGlzLmFjdGl2YXRlZFJvdXRlLnJvb3QsICcnLCBbXSkuc3Vic2NyaWJlKGJyZWFkY3J1bWIgPT4ge1xyXG4gICAgICB0aGlzLmJyZWFkY3J1bWJJdGVtcyA9IGJyZWFkY3J1bWI7XHJcbiAgICAgIHRoaXMuc2V0Um91dGVQYXJhbXMoYnJlYWRjcnVtYik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXHJcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuYnVpbGRCcmVhZGNydW1iKHRoaXMuYWN0aXZhdGVkUm91dGUucm9vdCwgJycsIFtdKSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKGJyZWFkY3J1bWIgPT4ge1xyXG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYkl0ZW1zID0gYnJlYWRjcnVtYjtcclxuICAgICAgICB0aGlzLnNldFJvdXRlUGFyYW1zKGJyZWFkY3J1bWIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdG9yZWRCcmVhZGNydW1iID0gdGhpcy5nZXRSb3V0ZVBhcmFtcygpO1xyXG4gICAgaWYgKHN0b3JlZEJyZWFkY3J1bWIpIHtcclxuICAgICAgdGhpcy5icmVhZGNydW1iSXRlbXMgPSBzdG9yZWRCcmVhZGNydW1iO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgYnVpbGRCcmVhZGNydW1iKFxyXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgdXJsOiBzdHJpbmcgPSAnJyxcclxuICAgIGJyZWFkY3J1bWI6IEJyZWFkY3J1bWJJdGVtW10gPSBbXVxyXG4gICk6IE9ic2VydmFibGU8QnJlYWRjcnVtYkl0ZW1bXT4ge1xyXG4gICAgY29uc3QgbGFiZWwgPSByb3V0ZS5zbmFwc2hvdC5kYXRhWydicmVhZGNydW1iJ10gfHwgJyc7XHJcbiAgICBjb25zdCBwYXRoID0gcm91dGUucm91dGVDb25maWc/LnBhdGggfHwgJyc7XHJcblxyXG4gICAgaWYgKGxhYmVsICYmIHBhdGggJiYgcGF0aCAhPT0gJycpIHsgLy8gRXhjbHVkZSBwYXJlbnQgcm91dGUgZnJvbSBicmVhZGNydW1iXHJcbiAgICAgIGNvbnN0IG5leHRVcmwgPSBgJHt1cmx9JHtwYXRofS9gO1xyXG4gICAgICBjb25zdCBicmVhZGNydW1iSXRlbTogQnJlYWRjcnVtYkl0ZW0gPSB7IGxhYmVsLCBsaW5rOiBuZXh0VXJsIH07XHJcbiAgICAgIGJyZWFkY3J1bWIucHVzaChicmVhZGNydW1iSXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hpbGRSb3V0ZXMgPSByb3V0ZS5jaGlsZHJlbjtcclxuICAgIGlmIChjaGlsZFJvdXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkQnJlYWRjcnVtYnMkID0gY2hpbGRSb3V0ZXMubWFwKGNoaWxkUm91dGUgPT5cclxuICAgICAgICB0aGlzLmJ1aWxkQnJlYWRjcnVtYihjaGlsZFJvdXRlLCBgJHt1cmx9JHtwYXRofS9gLCBbLi4uYnJlYWRjcnVtYl0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBmb3JrSm9pbihjaGlsZEJyZWFkY3J1bWJzJCkucGlwZShcclxuICAgICAgICBtYXAoY2hpbGRCcmVhZGNydW1icyA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtZXJnZWRCcmVhZGNydW1icyA9IGNoaWxkQnJlYWRjcnVtYnMucmVkdWNlKChhY2MsIGN1cnIpID0+IFsuLi5hY2MsIC4uLmN1cnJdLCBbXSk7XHJcbiAgICAgICAgICByZXR1cm4gWy4uLm1lcmdlZEJyZWFkY3J1bWJzXTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvZihicmVhZGNydW1iKTtcclxuICB9XHJcblxyXG4gIHNldFJvdXRlUGFyYW1zKGJyZWFkY3J1bWI6IEJyZWFkY3J1bWJJdGVtW10pOiB2b2lkIHtcclxuICAgIGNvbnN0IGJyZWFkY3J1bWJQYXJhbSA9IGJyZWFkY3J1bWIubWFwKGl0ZW0gPT4gKHsgbGFiZWw6IGl0ZW0ubGFiZWwsIGxpbms6IGl0ZW0ubGluayB9KSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xyXG4gICAgICBxdWVyeVBhcmFtczogeyBicmVhZGNydW1iOiBKU09OLnN0cmluZ2lmeShicmVhZGNydW1iUGFyYW0pIH0sXHJcbiAgICAgIHJlcGxhY2VVcmw6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFJvdXRlUGFyYW1zKCk6IEJyZWFkY3J1bWJJdGVtW10gfCBudWxsIHtcclxuICAgIGNvbnN0IGJyZWFkY3J1bWJQYXJhbSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucXVlcnlQYXJhbU1hcC5nZXQoJ2JyZWFkY3J1bWInKTtcclxuICAgIGlmIChicmVhZGNydW1iUGFyYW0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBicmVhZGNydW1iID0gSlNPTi5wYXJzZShicmVhZGNydW1iUGFyYW0pO1xyXG4gICAgICAgIHJldHVybiBicmVhZGNydW1iO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgYnJlYWRjcnVtYiByb3V0ZSBwYXJhbWV0ZXI6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxyXG4gIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGJyZWFkY3J1bWJJdGVtczsgbGV0IGxhc3QgPSBsYXN0XCIgW25nQ2xhc3NdPVwieyAnaW5hY3RpdmUtbGluayc6IGxhc3QgfVwiPlxyXG4gICAgPGEgW3JvdXRlckxpbmtdPVwiaXRlbS5saW5rXCI+e3sgaXRlbS5sYWJlbCB9fTwvYT5cclxuICA8L2xpPlxyXG48L29sPlxyXG4iXX0=