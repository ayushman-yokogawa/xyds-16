import { EventEmitter, OnInit } from "@angular/core";
import { XyDialogActionsComponent } from "../xy-dialog-actions/xy-dialog-actions.component";
import { MatDialogRef } from "@angular/material/dialog";
import * as i0 from "@angular/core";
export declare class XyDialogComponent implements OnInit {
    private dialogRef;
    title: string;
    column: number;
    showClose: boolean;
    isCustomClose: boolean;
    cardActions: XyDialogActionsComponent;
    constructor(dialogRef: MatDialogRef<XyDialogComponent>);
    ngOnInit(): void;
    myEvent: EventEmitter<any>;
    contentStyle(): "" | "one-column" | "two-column";
    onClickClose($event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyDialogComponent, "xy-dialog", never, { "title": { "alias": "title"; "required": false; }; "column": { "alias": "column"; "required": false; }; "showClose": { "alias": "showClose"; "required": false; }; "isCustomClose": { "alias": "isCustomClose"; "required": false; }; }, { "myEvent": "myEvent"; }, ["cardActions"], ["*", "xy-dialog-actions"], false, never>;
}
