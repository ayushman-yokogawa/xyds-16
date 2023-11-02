import { OnInit } from "@angular/core";
import * as i0 from "@angular/core";
export declare class XyContainerComponent implements OnInit {
    direction: "horizontal" | "vertical";
    align: "center" | "left" | "right" | "justify";
    valign: "middle" | "top" | "bottom" | "justify";
    spacing: "xss" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
    wrap: "wrap" | "nowrap";
    constructor();
    ngOnInit(): void;
    styleClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyContainerComponent, "xy-container", never, { "direction": { "alias": "direction"; "required": false; }; "align": { "alias": "align"; "required": false; }; "valign": { "alias": "valign"; "required": false; }; "spacing": { "alias": "spacing"; "required": false; }; "wrap": { "alias": "wrap"; "required": false; }; }, {}, never, ["mat-radio-group", "xy-radio", "xy-checkbox"], false, never>;
}
