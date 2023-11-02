import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class XySidenavItemComponent implements OnInit {
    private element;
    closeByClick: boolean;
    icon: string;
    name: string;
    rightIcon: string;
    rightIcon2: string;
    clickRight?: Function;
    clickRight2?: Function;
    routerLink: any;
    class: any;
    routerLinkActive: any;
    clickRightEvent: EventEmitter<MouseEvent>;
    clickRight2Event: EventEmitter<MouseEvent>;
    constructor(element: ElementRef);
    ngOnInit(): void;
    onClickRight($event: MouseEvent): void;
    onClickRight2($event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XySidenavItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XySidenavItemComponent, "xy-sidenav-item", never, { "closeByClick": { "alias": "closeByClick"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "name": { "alias": "name"; "required": false; }; "rightIcon": { "alias": "right-icon"; "required": false; }; "rightIcon2": { "alias": "right-icon2"; "required": false; }; "clickRight": { "alias": "click-right"; "required": false; }; "clickRight2": { "alias": "click-right2"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; "class": { "alias": "class"; "required": false; }; "routerLinkActive": { "alias": "routerLinkActive"; "required": false; }; }, { "clickRightEvent": "clickRightEvent"; "clickRight2Event": "clickRight2Event"; }, never, never, false, never>;
}
