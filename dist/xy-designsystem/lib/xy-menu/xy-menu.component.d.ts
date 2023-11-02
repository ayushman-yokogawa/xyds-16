import { AfterViewInit, EventEmitter, OnInit, QueryList } from '@angular/core';
import { XyMenuItemComponent } from "./xy-menu-item.component";
import { LegacyMenuPositionX as MenuPositionX, LegacyMenuPositionY as MenuPositionY } from "@angular/material/legacy-menu";
import { ControlValueAccessor, FormControl, FormGroup } from "@angular/forms";
import { MatLegacyMenu as MatMenu, MatLegacyMenuItem as MatMenuItem, MatLegacyMenuTrigger as MatMenuTrigger } from "@angular/material/legacy-menu";
import { XyCheckboxComponent } from "../xy-checkbox/xy-checkbox.component";
import { XyErrorComponent } from "../xy-error/xy-error.component";
import { XyMenuChange, XyMenuItem } from "./xy-menu-model";
import * as i0 from "@angular/core";
export declare class XyMenuComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    name: string;
    label: string;
    icon: string;
    matmenus: QueryList<MatMenu>;
    _small: boolean;
    isOverOpen: boolean;
    set small(s: boolean | string);
    get small(): boolean;
    _fit: boolean;
    set fit(s: boolean | string);
    get fit(): boolean;
    _checkable: boolean;
    set checkable(s: boolean | string);
    get checkable(): boolean;
    _required: boolean;
    set required(s: string | boolean);
    get required(): boolean;
    _disabled: boolean;
    set disabled(s: boolean | string);
    get disabled(): boolean;
    visibleItem: number;
    xPosition: MenuPositionX;
    yPosition: MenuPositionY;
    formGroup: FormGroup;
    formControl: FormControl;
    menuItems: QueryList<XyMenuItemComponent>;
    errors: QueryList<XyErrorComponent>;
    dataSource: XyMenuItem;
    change: EventEmitter<XyMenuChange>;
    private _onTouchedCallback;
    private _onChangeCallback;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    value: any;
    writeValue(obj: any): void;
    _writeValue(item: XyMenuItem, obj: any): void;
    isExpandable(node: XyMenuItem): boolean;
    checkedValues(item: XyMenuItem): Array<any>;
    onChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyMenuComponent, "xy-menu", never, { "name": { "alias": "name"; "required": false; }; "label": { "alias": "label"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "isOverOpen": { "alias": "isOverOpen"; "required": false; }; "small": { "alias": "small"; "required": false; }; "fit": { "alias": "fit"; "required": false; }; "checkable": { "alias": "checkable"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "visibleItem": { "alias": "visible-item"; "required": false; }; "xPosition": { "alias": "xPosition"; "required": false; }; "yPosition": { "alias": "yPosition"; "required": false; }; "formGroup": { "alias": "formGroup"; "required": false; }; "formControl": { "alias": "formControl"; "required": false; }; }, { "change": "change"; }, ["menuItems", "errors"], never, false, never>;
}
export declare class XyMenuNodeComponent implements OnInit {
    private menu;
    _small: boolean;
    isOverOpen: boolean;
    icon: string;
    set small(s: boolean | string);
    openMyMenu(): void;
    closeMyMenu(): void;
    get small(): boolean;
    _fit: boolean;
    set fit(s: boolean | string);
    get fit(): boolean;
    _checkable: boolean;
    set checkable(s: boolean | string);
    get checkable(): boolean;
    _disabled: boolean;
    set disabled(s: boolean | string);
    get disabled(): boolean;
    parent: XyMenuNodeComponent;
    rootNode: boolean;
    _isLast: boolean;
    data: XyMenuItem;
    visibleItem: number;
    xPosition: MenuPositionX;
    yPosition: MenuPositionY;
    matMenu: MatMenu;
    trigger: MatMenuTrigger;
    children: QueryList<XyMenuNodeComponent>;
    errors: QueryList<XyErrorComponent>;
    constructor(menu: XyMenuComponent);
    ngOnInit(): void;
    /**
     * Check if there is (a) child(children).
     */
    hasChildren(): boolean;
    /**
     * Check the item is last item.
     */
    isLast(item: XyMenuItem): boolean;
    menuStyle(): string;
    dividerStyle(): string;
    onClick($event: MouseEvent): void;
    onCloseMenu(node: MatMenuItem): void;
    closeOther(except: XyMenuNodeComponent): void;
    mouseEnter(): void;
    onChangeCheckbox(checkbox: XyCheckboxComponent, item: XyMenuItem): void;
    checkChildren(item: XyMenuItem): void;
    clearCheckChildren(item: XyMenuItem): void;
    updateCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyMenuNodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyMenuNodeComponent, "xy-menu-node", never, { "isOverOpen": { "alias": "isOverOpen"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "small": { "alias": "small"; "required": false; }; "fit": { "alias": "fit"; "required": false; }; "checkable": { "alias": "checkable"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "parent": { "alias": "parent"; "required": false; }; "rootNode": { "alias": "rootNode"; "required": false; }; "_isLast": { "alias": "is-last"; "required": false; }; "data": { "alias": "data"; "required": false; }; "visibleItem": { "alias": "visible-item"; "required": false; }; "xPosition": { "alias": "xPosition"; "required": false; }; "yPosition": { "alias": "yPosition"; "required": false; }; }, {}, ["errors"], never, false, never>;
}
