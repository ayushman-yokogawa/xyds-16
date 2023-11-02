import { XyBreadcrumb } from "./breadcrumb";
import { XyBreadcrumbService } from "./breadcrumb.service";
import * as i0 from "@angular/core";
export declare class XyBreadcrumbComponent {
    private breadcrumbService;
    breadcrumbs: XyBreadcrumb[];
    constructor(breadcrumbService: XyBreadcrumbService);
    private onBreadcrumbChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyBreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyBreadcrumbComponent, "xy-breadcrumb", never, {}, {}, never, ["*"], false, never>;
}
