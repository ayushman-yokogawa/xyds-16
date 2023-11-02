import { AfterViewInit, ElementRef, OnInit } from "@angular/core";
import * as i0 from "@angular/core";
export declare class XyButtonToggleComponent implements OnInit, AfterViewInit {
    content: string;
    contentWrapper: ElementRef;
    value: string;
    icon: string;
    _disabled: boolean;
    set disabled(s: string | boolean);
    get disabled(): boolean;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyButtonToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyButtonToggleComponent, "xy-button-toggle", never, { "value": { "alias": "value"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], false, never>;
}
