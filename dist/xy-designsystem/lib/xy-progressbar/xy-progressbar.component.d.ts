import * as i0 from "@angular/core";
export declare class XyProgressbarComponent {
    mode: any;
    color: any | 'accent' | 'critical' | 'error' | 'warning' | 'attention' | 'safe_normal';
    value: number | string;
    label?: string;
    help: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyProgressbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyProgressbarComponent, "xy-progressbar", never, { "mode": { "alias": "mode"; "required": false; }; "color": { "alias": "color"; "required": false; }; "value": { "alias": "value"; "required": false; }; "label": { "alias": "label"; "required": false; }; "help": { "alias": "help"; "required": false; }; }, {}, never, never, false, never>;
}
