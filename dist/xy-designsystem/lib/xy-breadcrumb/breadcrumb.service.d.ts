import { EventEmitter } from "@angular/core";
import { Router, ActivatedRouteSnapshot } from "@angular/router";
import { XyBreadcrumb } from "./breadcrumb";
import * as i0 from "@angular/core";
export declare class XyBreadcrumbService {
    private router;
    xybreadcrumbChanged: EventEmitter<XyBreadcrumb[]>;
    private breadcrumbs;
    constructor(router: Router);
    OnChangeBreadcrumb(route: ActivatedRouteSnapshot, name: string): void;
    private onRouteEvent;
    private createXyBreadcrumb;
    private isTerminal;
    private createUrl;
    private createRootUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyBreadcrumbService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<XyBreadcrumbService>;
}
