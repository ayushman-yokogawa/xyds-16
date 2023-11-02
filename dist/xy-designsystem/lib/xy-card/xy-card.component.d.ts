import { EventEmitter, OnInit } from "@angular/core";
import { XyCardActionsComponent } from "../xy-card-actions/xy-card-actions.component";
import { XyCardHeaderActionComponent } from "../xy-card-header-action/xy-card-header-action.component";
import * as i0 from "@angular/core";
export declare class XyCardComponent implements OnInit {
    title: string;
    subTitle: string;
    icon: string;
    column: number;
    showClose: boolean;
    cardIcon: string;
    avatar: string;
    image: string;
    titleTooltip: boolean;
    cardActions: XyCardActionsComponent;
    headAction: XyCardHeaderActionComponent;
    this: any;
    constructor();
    ngOnInit(): void;
    visible: boolean;
    customEvent: EventEmitter<any>;
    contentStyle(): "" | "one-column" | "two-column";
    static ɵfac: i0.ɵɵFactoryDeclaration<XyCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyCardComponent, "xy-card", never, { "title": { "alias": "title"; "required": false; }; "subTitle": { "alias": "subTitle"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "column": { "alias": "column"; "required": false; }; "showClose": { "alias": "showClose"; "required": false; }; "cardIcon": { "alias": "cardIcon"; "required": false; }; "avatar": { "alias": "avatar"; "required": false; }; "image": { "alias": "image"; "required": false; }; "titleTooltip": { "alias": "titleTooltip"; "required": false; }; }, { "customEvent": "customEvent"; }, ["cardActions", "headAction"], ["xy-card-header-action", "*", "xy-card-actions"], false, never>;
}
