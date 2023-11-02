import { EventEmitter, OnInit } from '@angular/core';
import { TableButtonAction } from '../../models/tableButtonAction';
import * as i0 from "@angular/core";
export declare class ActionButtonsComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    value: any;
    buttonAction: EventEmitter<TableButtonAction>;
    onEditClick(): void;
    onDeleteClick(): void;
    onViewClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionButtonsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionButtonsComponent, "[action-buttons]", never, { "value": { "alias": "value"; "required": false; }; }, { "buttonAction": "buttonAction"; }, never, never, false, never>;
}
