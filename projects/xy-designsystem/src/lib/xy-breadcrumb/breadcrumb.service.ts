import { Injectable, EventEmitter } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  Event,
  NavigationEnd,
} from "@angular/router";

import { XyBreadcrumb } from "./breadcrumb";

@Injectable()
export class XyBreadcrumbService {
  xybreadcrumbChanged = new EventEmitter<XyBreadcrumb[]>(false);

  private breadcrumbs = new Array<XyBreadcrumb>();

  constructor(private router: Router) {
    this.router.events.subscribe((routeEvent) => {
      this.onRouteEvent(routeEvent);
    });
  }

  public OnChangeBreadcrumb(route: ActivatedRouteSnapshot, name: string) {
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

  private onRouteEvent(routeEvent: Event) {
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

  private createXyBreadcrumb(
    route: ActivatedRouteSnapshot,
    url: string
  ): XyBreadcrumb {
    return {
      displayName: route.data["breadcrumb"],
      terminal: this.isTerminal(route),
      url: url,
      route: route.routeConfig,
    };
  }

  private isTerminal(route: ActivatedRouteSnapshot) {
    return (
      route.firstChild === null ||
      route.firstChild.routeConfig === null ||
      !route.firstChild.routeConfig.path
    );
  }

  private createUrl(route: ActivatedRouteSnapshot) {
    return route.url
      .map(function (s) {
        return s.toString();
      })
      .join("/");
  }

  private createRootUrl(route: ActivatedRouteSnapshot) {
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
}
