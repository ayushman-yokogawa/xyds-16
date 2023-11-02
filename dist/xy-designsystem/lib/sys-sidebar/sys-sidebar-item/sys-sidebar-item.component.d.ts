import { EventEmitter } from '@angular/core';
import { XyNode } from '../../xy-tree/xy-tree.component';
import * as i0 from "@angular/core";
export declare class SysSidebarItemComponent {
    icon: string;
    customIcon: string;
    label: string;
    routerLink: string;
    charLimit: number;
    className: string;
    menuIcon: string;
    tree: boolean;
    logo: boolean;
    menuTooltip: boolean;
    treeMenu: XyNode[];
    newLabelClass: any;
    ngAfterViewInit(): void;
    nodeClick($event: MouseEvent, node: any): void;
    nodes: XyNode[];
    defaultIcon: string;
    expendedIcon: string;
    clickMenuNode: EventEmitter<any>;
    toggleNode(node: XyNode): void;
    onClickNode($event: MouseEvent, node: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysSidebarItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SysSidebarItemComponent, "xy-sidebar-item", never, { "icon": { "alias": "icon"; "required": false; }; "customIcon": { "alias": "customIcon"; "required": false; }; "label": { "alias": "label"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; "charLimit": { "alias": "charLimit"; "required": false; }; "className": { "alias": "className"; "required": false; }; "menuIcon": { "alias": "menuIcon"; "required": false; }; "tree": { "alias": "tree"; "required": false; }; "logo": { "alias": "logo"; "required": false; }; "menuTooltip": { "alias": "menuTooltip"; "required": false; }; "treeMenu": { "alias": "treeMenu"; "required": false; }; "nodes": { "alias": "nodes"; "required": false; }; "defaultIcon": { "alias": "defaultIcon"; "required": false; }; "expendedIcon": { "alias": "expendedIcon"; "required": false; }; }, { "clickMenuNode": "clickMenuNode"; }, never, ["*", "xy-tree"], false, never>;
}
