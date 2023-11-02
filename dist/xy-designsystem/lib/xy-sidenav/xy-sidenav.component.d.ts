import { AfterViewInit, OnInit, QueryList } from '@angular/core';
import { XySidenavItemComponent } from "./xy-sidenav-item.component";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatSidenav } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
export interface XySideNaviItem {
    id: string;
    name?: string;
    icon?: string;
    action?: Function;
    clickRight?: Function;
    rightIcon?: string;
    clickRight2?: Function;
    rightIcon2?: string;
    routerLink?: string;
    dragging: boolean;
    class: string;
}
export declare class XySidenavComponent implements OnInit, AfterViewInit {
    draggable: boolean;
    noCustomIcon: boolean;
    nestedOn: boolean;
    nestedItems: any[];
    items: QueryList<XySidenavItemComponent>;
    links: QueryList<any>;
    dataSourceData: XySideNaviItem[];
    sidenav: MatSidenav;
    set dataSource(list: XySideNaviItem[]);
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onClickItem($event: MouseEvent, node: any): void;
    hasIcon(node: any): boolean;
    icon(node: any): string | null;
    hasClickRight(node: any): boolean;
    onClickRight($event: MouseEvent, node: any): void;
    hasClickRight2(node: any): boolean;
    onClickRight2($event: MouseEvent, node: any): void;
    cloneData(datas: Array<any>): Array<any>;
    onClickClose($event: MouseEvent): void;
    drop(event: CdkDragDrop<string[]>): void;
    dragStart(node: XySideNaviItem): void;
    dragEnd(node: XySideNaviItem): void;
    dragHover(node: XySideNaviItem): void;
    dragHoverEnd(node: XySideNaviItem): void;
    /**
     * The following methods are for persisting the tree expand state
     * after being rebuilt
     */
    rebuildSidenavForData(data: XySideNaviItem[]): void;
    /**
     * keydown event handler
     * @param event Key event
     * @param node tree node
     */
    onKeyDown(event: KeyboardEvent, node: XySideNaviItem): void;
    /**
     * Focus previous node
     * @param target HTMLElement of mat-tree-node
     */
    focusPrevious(target: HTMLElement): void;
    /**
     * Focus next node
     * @param target HTMLElement of mat-tree-node
     */
    focusNext(target: HTMLElement): void;
    styleClass(node: XySideNaviItem): "" | "xy-sidenavi-item-dragging";
    static ɵfac: i0.ɵɵFactoryDeclaration<XySidenavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XySidenavComponent, "xy-sidenav", never, { "draggable": { "alias": "draggable"; "required": false; }; "noCustomIcon": { "alias": "noCustomIcon"; "required": false; }; "nestedOn": { "alias": "nestedOn"; "required": false; }; "nestedItems": { "alias": "nestedItems"; "required": false; }; "dataSource": { "alias": "dataSource"; "required": false; }; }, {}, ["items", "links"], [".xy-sidenav-toolbox-item"], false, never>;
}
