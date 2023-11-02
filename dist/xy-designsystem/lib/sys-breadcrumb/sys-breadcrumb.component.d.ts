import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
interface BreadcrumbItem {
    label: string;
    link: string;
}
export declare class SysBreadcrumbComponent implements OnInit {
    private router;
    private activatedRoute;
    breadcrumbItems: BreadcrumbItem[];
    constructor(router: Router, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    buildBreadcrumb(route: ActivatedRoute, url?: string, breadcrumb?: BreadcrumbItem[]): Observable<BreadcrumbItem[]>;
    setRouteParams(breadcrumb: BreadcrumbItem[]): void;
    getRouteParams(): BreadcrumbItem[] | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysBreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SysBreadcrumbComponent, "xy-breadcrumb-menu", never, {}, {}, never, never, false, never>;
}
export {};
