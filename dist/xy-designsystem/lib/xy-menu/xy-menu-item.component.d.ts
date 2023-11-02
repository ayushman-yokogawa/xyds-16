import { ElementRef, EventEmitter, OnInit } from "@angular/core";
import * as i0 from "@angular/core";
export declare class XyMenuItemComponent implements OnInit {
    private elementRef;
    value: string;
    icon: string;
    level: number;
    customElement: boolean;
    _disabled: boolean;
    set disabled(s: boolean | string);
    get disabled(): boolean;
    _checkable: boolean;
    set checkable(s: boolean | string);
    get checkable(): boolean;
    content: any;
    click: EventEmitter<MouseEvent>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyMenuItemComponent, "xy-menu-item", never, { "value": { "alias": "value"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "level": { "alias": "level"; "required": false; }; "customElement": { "alias": "customElement"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "checkable": { "alias": "checkable"; "required": false; }; }, { "click": "click"; }, never, ["*"], false, never>;
}
