import { EventEmitter, OnInit } from "@angular/core";
import * as i0 from "@angular/core";
export declare class XyChipsComponent implements OnInit {
    chipsLabel: any;
    avatar: any;
    value: string;
    id: string;
    icon: string;
    removeBtn: boolean;
    disabled: boolean;
    selected: boolean;
    checked: boolean;
    removeIcon: boolean;
    color: "accent" | "critical" | "error" | "warning" | "attention" | "safe_normal";
    removeChips: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyChipsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyChipsComponent, "xy-chips", never, { "chipsLabel": { "alias": "chipsLabel"; "required": false; }; "avatar": { "alias": "avatar"; "required": false; }; "value": { "alias": "value"; "required": false; }; "id": { "alias": "id"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "removeBtn": { "alias": "removeBtn"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "removeIcon": { "alias": "removeIcon"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, { "removeChips": "removeChips"; }, never, never, false, never>;
}
