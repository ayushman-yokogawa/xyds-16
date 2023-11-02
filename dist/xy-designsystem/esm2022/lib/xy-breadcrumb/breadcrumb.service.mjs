import { Injectable, EventEmitter } from "@angular/core";
import { NavigationEnd, } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class XyBreadcrumbService {
    constructor(router) {
        this.router = router;
        this.xybreadcrumbChanged = new EventEmitter(false);
        this.breadcrumbs = new Array();
        this.router.events.subscribe((routeEvent) => {
            this.onRouteEvent(routeEvent);
        });
    }
    OnChangeBreadcrumb(route, name) {
        const rootUrl = this.createRootUrl(route);
        const breadcrumb = this.breadcrumbs.find(function (bc) {
            return bc.url === rootUrl;
        });
        if (!breadcrumb) {
            return;
        }
        breadcrumb.displayName = name;
        this.xybreadcrumbChanged.emit(this.breadcrumbs);
    }
    onRouteEvent(routeEvent) {
        if (!(routeEvent instanceof NavigationEnd)) {
            return;
        }
        let route = this.router.routerState.root.snapshot;
        let url = "";
        let xyBreadCrumbIndex = 0;
        let xyCrumbs = [];
        while (route.firstChild != null) {
            route = route.firstChild;
            if (route.routeConfig === null) {
                continue;
            }
            if (!route.routeConfig.path) {
                continue;
            }
            url += `/${this.createUrl(route)}`;
            if (!route.data["breadcrumb"]) {
                continue;
            }
            let newCrumb = this.createXyBreadcrumb(route, url);
            if (xyBreadCrumbIndex < this.breadcrumbs.length) {
                let existing = this.breadcrumbs[xyBreadCrumbIndex++];
                if (existing && existing.route == route.routeConfig) {
                    newCrumb.displayName = existing.displayName;
                }
            }
            xyCrumbs.push(newCrumb);
        }
        this.breadcrumbs = xyCrumbs;
        this.xybreadcrumbChanged.emit(this.breadcrumbs);
    }
    createXyBreadcrumb(route, url) {
        return {
            displayName: route.data["breadcrumb"],
            terminal: this.isTerminal(route),
            url: url,
            route: route.routeConfig,
        };
    }
    isTerminal(route) {
        return (route.firstChild === null ||
            route.firstChild.routeConfig === null ||
            !route.firstChild.routeConfig.path);
    }
    createUrl(route) {
        return route.url
            .map(function (s) {
            return s.toString();
        })
            .join("/");
    }
    createRootUrl(route) {
        let url = "";
        let next = route.root;
        while (next.firstChild !== null) {
            next = next.firstChild;
            if (next.routeConfig === null) {
                continue;
            }
            if (!next.routeConfig.path) {
                continue;
            }
            url += `/${this.createUrl(next)}`;
            if (next === route) {
                break;
            }
        }
        return url;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyBreadcrumbService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyBreadcrumbService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyBreadcrumbService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktYnJlYWRjcnVtYi9icmVhZGNydW1iLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUlMLGFBQWEsR0FDZCxNQUFNLGlCQUFpQixDQUFDOzs7QUFLekIsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpsQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksQ0FBaUIsS0FBSyxDQUFDLENBQUM7UUFFdEQsZ0JBQVcsR0FBRyxJQUFJLEtBQUssRUFBZ0IsQ0FBQztRQUc5QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGtCQUFrQixDQUFDLEtBQTZCLEVBQUUsSUFBWTtRQUNuRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuRCxPQUFPLEVBQUUsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU87U0FDUjtRQUVELFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRTlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFD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SUFBSSxFQUFFO2dCQUM3QixTQUFTO2FBQ1Y7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7Z0JBQzFCLFNBQVM7YUFDVjtZQUVELEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUVsQyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7Z0JBQ2xCLE1BQU07YUFDUDtTQUNGO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzhHQXhIVSxtQkFBbUI7a0hBQW5CLG1CQUFtQjs7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgUm91dGVyLFxyXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgRXZlbnQsXHJcbiAgTmF2aWdhdGlvbkVuZCxcclxufSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBYeUJyZWFkY3J1bWIgfSBmcm9tIFwiLi9icmVhZGNydW1iXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBYeUJyZWFkY3J1bWJTZXJ2aWNlIHtcclxuICB4eWJyZWFkY3J1bWJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxYeUJyZWFkY3J1bWJbXT4oZmFsc2UpO1xyXG5cclxuICBwcml2YXRlIGJyZWFkY3J1bWJzID0gbmV3IEFycmF5PFh5QnJlYWRjcnVtYj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgocm91dGVFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUm91dGVFdmVudChyb3V0ZUV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIE9uQ2hhbmdlQnJlYWRjcnVtYihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgbmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByb290VXJsID0gdGhpcy5jcmVhdGVSb290VXJsKHJvdXRlKTtcclxuICAgIGNvbnN0IGJyZWFkY3J1bWIgPSB0aGlzLmJyZWFkY3J1bWJzLmZpbmQoZnVuY3Rpb24gKGJjKSB7XHJcbiAgICAgIHJldHVybiBiYy51cmwgPT09IHJvb3RVcmw7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWJyZWFkY3J1bWIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGJyZWFkY3J1bWIuZGlzcGxheU5hbWUgPSBuYW1lO1xyXG5cclxuICAgIHRoaXMueHlicmVhZGNydW1iQ2hhbmdlZC5lbWl0KHRoaXMuYnJlYWRjcnVtYnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblJvdXRlRXZlbnQocm91dGVFdmVudDogRXZlbnQpIHtcclxuICAgIGlmICghKHJvdXRlRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUucm9vdC5zbmFwc2hvdDtcclxuICAgIGxldCB1cmwgPSBcIlwiO1xyXG5cclxuICAgIGxldCB4eUJyZWFkQ3J1bWJJbmRleCA9IDA7XHJcbiAgICBsZXQgeHlDcnVtYnMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAocm91dGUuZmlyc3RDaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgIHJvdXRlID0gcm91dGUuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAgIGlmIChyb3V0ZS5yb3V0ZUNvbmZpZyA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghcm91dGUucm91dGVDb25maWcucGF0aCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1cmwgKz0gYC8ke3RoaXMuY3JlYXRlVXJsKHJvdXRlKX1gO1xyXG5cclxuICAgICAgaWYgKCFyb3V0ZS5kYXRhW1wiYnJlYWRjcnVtYlwiXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbmV3Q3J1bWIgPSB0aGlzLmNyZWF0ZVh5QnJlYWRjcnVtYihyb3V0ZSwgdXJsKTtcclxuXHJcbiAgICAgIGlmICh4eUJyZWFkQ3J1bWJJbmRleCA8IHRoaXMuYnJlYWRjcnVtYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IGV4aXN0aW5nID0gdGhpcy5icmVhZGNydW1ic1t4eUJyZWFkQ3J1bWJJbmRleCsrXTtcclxuXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nICYmIGV4aXN0aW5nLnJvdXRlID09IHJvdXRlLnJvdXRlQ29uZmlnKSB7XHJcbiAgICAgICAgICBuZXdDcnVtYi5kaXNwbGF5TmFtZSA9IGV4aXN0aW5nLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgeHlDcnVtYnMucHVzaChuZXdDcnVtYik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5icmVhZGNydW1icyA9IHh5Q3J1bWJzO1xyXG4gICAgdGhpcy54eWJyZWFkY3J1bWJDaGFuZ2VkLmVtaXQodGhpcy5icmVhZGNydW1icyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVh5QnJlYWRjcnVtYihcclxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgdXJsOiBzdHJpbmdcclxuICApOiBYeUJyZWFkY3J1bWIge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzcGxheU5hbWU6IHJvdXRlLmRhdGFbXCJicmVhZGNydW1iXCJdLFxyXG4gICAgICB0ZXJtaW5hbDogdGhpcy5pc1Rlcm1pbmFsKHJvdXRlKSxcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIHJvdXRlOiByb3V0ZS5yb3V0ZUNvbmZpZyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVGVybWluYWwocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHJvdXRlLmZpcnN0Q2hpbGQgPT09IG51bGwgfHxcclxuICAgICAgcm91dGUuZmlyc3RDaGlsZC5yb3V0ZUNvbmZpZyA9PT0gbnVsbCB8fFxyXG4gICAgICAhcm91dGUuZmlyc3RDaGlsZC5yb3V0ZUNvbmZpZy5wYXRoXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVVcmwocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcclxuICAgIHJldHVybiByb3V0ZS51cmxcclxuICAgICAgLm1hcChmdW5jdGlvbiAocykge1xyXG4gICAgICAgIHJldHVybiBzLnRvU3RyaW5nKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKFwiL1wiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUm9vdFVybChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xyXG4gICAgbGV0IHVybCA9IFwiXCI7XHJcbiAgICBsZXQgbmV4dCA9IHJvdXRlLnJvb3Q7XHJcblxyXG4gICAgd2hpbGUgKG5leHQuZmlyc3RDaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xyXG5cclxuICAgICAgaWYgKG5leHQucm91dGVDb25maWcgPT09IG51bGwpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIW5leHQucm91dGVDb25maWcucGF0aCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1cmwgKz0gYC8ke3RoaXMuY3JlYXRlVXJsKG5leHQpfWA7XHJcblxyXG4gICAgICBpZiAobmV4dCA9PT0gcm91dGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG59XHJcbiJdfQ==