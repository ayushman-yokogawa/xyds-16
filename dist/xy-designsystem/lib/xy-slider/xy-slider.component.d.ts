import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class XySliderComponent implements OnInit {
    min?: string;
    max?: string;
    value?: string;
    disabled?: boolean;
    label?: string;
    discrete?: boolean;
    color: 'accent' | 'critical' | 'error' | 'warning' | 'attention' | 'safe_normal';
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XySliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XySliderComponent, "xy-slider", never, { "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; "discrete": { "alias": "discrete"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, never, false, never>;
}
