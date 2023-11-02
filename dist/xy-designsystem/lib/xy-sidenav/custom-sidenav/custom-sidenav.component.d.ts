import { ElementRef, OnInit } from '@angular/core';
import { MatLegacyNavList as MatNavList } from '@angular/material/legacy-list';
import * as i0 from "@angular/core";
export declare class CustomSidenavComponent implements OnInit {
    private host;
    constructor(host: ElementRef<any>);
    ngOnInit(): void;
    items: any[];
    noCustomIcon: boolean;
    panelOpenState: boolean;
    sidenav: MatNavList;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomSidenavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomSidenavComponent, "xy-custom-sidenav", never, { "items": { "alias": "items"; "required": false; }; "noCustomIcon": { "alias": "noCustomIcon"; "required": false; }; }, {}, never, never, false, never>;
}
