import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class XyStepComponent implements OnInit {
    stepNumber: number;
    isLast: boolean;
    isFirst: boolean;
    currentStep: number;
    _vertical: boolean;
    icon: string;
    set collapse(b: 'true' | 'false' | '');
    constructor();
    ngOnInit(): void;
    ngDoCheck(): void;
    styleClass(): "" | "test-1";
    static ɵfac: i0.ɵɵFactoryDeclaration<XyStepComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyStepComponent, "xy-step", never, { "_vertical": { "alias": "_vertical"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "collapse": { "alias": "collapse"; "required": false; }; }, {}, never, ["[step-title]", "[step-content]", "[step-action]"], false, never>;
}
