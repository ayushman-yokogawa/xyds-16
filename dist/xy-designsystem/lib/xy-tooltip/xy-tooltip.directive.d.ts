import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
export declare class TooltipDirective {
    tooltip: MatTooltip;
    myDir: string;
    placement: TooltipPosition;
    tooltipClass: string;
    constructor(tooltip: MatTooltip);
    mouseover(): void;
    mouseout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TooltipDirective, "[tooltip]", never, { "myDir": { "alias": "tooltip"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "tooltipClass": { "alias": "tooltipClass"; "required": false; }; }, {}, never, never, false, never>;
}
