import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { Observable, filter, forkJoin, map, of, switchMap } from 'rxjs';

interface BreadcrumbItem {
  label: string;
  link: string;
}

@Component({
  selector: 'xy-breadcrumb-menu',
  templateUrl: './sys-breadcrumb.component.html',
  styleUrls: ['./sys-breadcrumb.component.scss']
})
export class SysBreadcrumbComponent implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Try to build breadcrumb on component initialization
    this.buildBreadcrumb(this.activatedRoute.root, '', []).subscribe(breadcrumb => {
      this.breadcrumbItems = breadcrumb;
      this.setRouteParams(breadcrumb);
    });

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        switchMap(() => this.buildBreadcrumb(this.activatedRoute.root, '', []))
      )
      .subscribe(breadcrumb => {
        this.breadcrumbItems = breadcrumb;
        this.setRouteParams(breadcrumb);
      });

    const storedBreadcrumb = this.getRouteParams();
    if (storedBreadcrumb) {
      this.breadcrumbItems = storedBreadcrumb;
    }
  }
  

  buildBreadcrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumb: BreadcrumbItem[] = []
  ): Observable<BreadcrumbItem[]> {
    const label = route.snapshot.data['breadcrumb'] || '';
    const path = route.routeConfig?.path || '';

    if (label && path && path !== '') { // Exclude parent route from breadcrumb
      const nextUrl = `${url}${path}/`;
      const breadcrumbItem: BreadcrumbItem = { label, link: nextUrl };
      breadcrumb.push(breadcrumbItem);
    }

    const childRoutes = route.children;
    if (childRoutes.length > 0) {
      const childBreadcrumbs$ = childRoutes.map(childRoute =>
        this.buildBreadcrumb(childRoute, `${url}${path}/`, [...breadcrumb])
      );
      return forkJoin(childBreadcrumbs$).pipe(
        map(childBreadcrumbs => {
          const mergedBreadcrumbs = childBreadcrumbs.reduce((acc, curr) => [...acc, ...curr], []);
          return [...mergedBreadcrumbs];
        })
      );
    }

    return of(breadcrumb);
  }

  setRouteParams(breadcrumb: BreadcrumbItem[]): void {
    const breadcrumbParam = breadcrumb.map(item => ({ label: item.label, link: item.link }));
    this.router.navigate([], {
      queryParams: { breadcrumb: JSON.stringify(breadcrumbParam) },
      replaceUrl: true,
    });
  }

  getRouteParams(): BreadcrumbItem[] | null {
    const breadcrumbParam = this.activatedRoute.snapshot.queryParamMap.get('breadcrumb');
    if (breadcrumbParam) {
      try {
        const breadcrumb = JSON.parse(breadcrumbParam);
        return breadcrumb;
      } catch (error) {
        console.error('Error parsing breadcrumb route parameter:', error);
      }
    }
    return null;
  }
}
