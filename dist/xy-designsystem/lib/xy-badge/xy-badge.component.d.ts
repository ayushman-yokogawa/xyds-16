import { OnInit } from "@angular/core";
import * as i0 from "@angular/core";
export declare class XyBadgeComponent implements OnInit {
    matBadge: string | number | undefined | null;
    size?: "small" | "medium" | "large";
    content: any;
    class: any;
    mode: any;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyBadgeComponent, "xy-badge", never, { "matBadge": { "alias": "matBadge"; "required": false; }; "size": { "alias": "matBadgeSize"; "required": false; }; }, {}, never, ["*"], false, never>;
}
