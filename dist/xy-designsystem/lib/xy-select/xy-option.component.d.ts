import { HttpClient } from '@angular/common/http';
import { ElementRef, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class XyOptionComponent implements OnInit {
    private elementRef;
    private http;
    value: string;
    icon: string;
    displayName: string;
    id: string;
    content: any;
    _disabled: boolean;
    set disabled(s: boolean | string);
    get disabled(): boolean;
    constructor(elementRef: ElementRef, http: HttpClient);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyOptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyOptionComponent, "xy-option", never, { "value": { "alias": "value"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "displayName": { "alias": "displayName"; "required": false; }; "id": { "alias": "id"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], false, never>;
}
