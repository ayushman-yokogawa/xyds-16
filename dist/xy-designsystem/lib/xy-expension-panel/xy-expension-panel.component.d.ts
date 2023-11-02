import { ElementRef, OnInit, SimpleChanges } from "@angular/core";
import * as i0 from "@angular/core";
export declare class XyExpensionPanelComponent implements OnInit {
    private host;
    title: string;
    subtitle: string;
    theme: "primary" | "critical";
    icon: string;
    disabled: boolean;
    signalIconDefault: string;
    signalIconAction: string;
    noIcon: boolean;
    color: string;
    panelOpenState: boolean;
    constructor(host: ElementRef<any>);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyExpensionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyExpensionPanelComponent, "xy-expension-panel", never, { "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "signalIconDefault": { "alias": "signalIconDefault"; "required": false; }; "signalIconAction": { "alias": "signalIconAction"; "required": false; }; "noIcon": { "alias": "noIcon"; "required": false; }; }, {}, never, ["*"], false, never>;
}
