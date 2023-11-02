import { OnInit } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import * as i0 from "@angular/core";
export declare class XyBottomSheetComponent implements OnInit {
    private bottomSheet;
    data: any;
    title: any;
    ngOnInit(): void;
    constructor(bottomSheet: MatBottomSheetRef, data: any);
    static ɵfac: i0.ɵɵFactoryDeclaration<XyBottomSheetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyBottomSheetComponent, "xy-bottom-sheet", never, { "title": { "alias": "title"; "required": false; }; }, {}, never, ["*"], false, never>;
}
