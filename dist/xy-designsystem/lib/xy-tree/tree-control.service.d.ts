import { FlatTreeControl } from '@angular/cdk/tree';
import * as i0 from "@angular/core";
export declare class TreeControlService {
    treeControl: FlatTreeControl<any>;
    constructor();
    setTreeControl(treeControl: FlatTreeControl<any>): void;
    expandAll(): void;
    collapseAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeControlService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TreeControlService>;
}
