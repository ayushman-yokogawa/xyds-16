import { AfterViewInit, ElementRef, EventEmitter, OnInit, TemplateRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class XyTabComponent implements OnInit, AfterViewInit {
    private element;
    label: string;
    active: boolean;
    icon: string;
    hide: boolean;
    controls: boolean;
    myEvent: EventEmitter<any>;
    _disabled: boolean;
    elementRef: any;
    set disabled(s: string | boolean);
    get disabled(): boolean;
    CustomElement: TemplateRef<any>;
    CustomEle: TemplateRef<any>;
    ariaLabel: string;
    ariaLabelledby: string;
    content: any;
    constructor(element: ElementRef);
    preTab(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyTabComponent, "xy-tab", never, { "label": { "alias": "label"; "required": false; }; "active": { "alias": "active"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "hide": { "alias": "hide"; "required": false; }; "controls": { "alias": "controls"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "CustomElement": { "alias": "CustomElement"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; }; }, { "myEvent": "myEvent"; }, never, ["*"], false, never>;
}
