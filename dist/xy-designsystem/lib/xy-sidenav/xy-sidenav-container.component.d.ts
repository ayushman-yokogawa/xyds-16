import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import * as i0 from "@angular/core";
export declare class XySidenavContainerComponent implements OnInit, AfterViewInit {
    private element;
    _sticky: boolean;
    _collapse: boolean;
    _smallMenu: boolean;
    closeByClick: boolean;
    normalSideNav: boolean;
    reason: string;
    opened: boolean;
    sidenav: MatSidenav;
    customClass(): void;
    closeSidenav(): void;
    constructor(element: ElementRef);
    ngOnInit(): void;
    close(reason: string): void;
    ngAfterViewInit(): void;
    set sticky(b: 'true' | 'false' | '');
    set collapse(b: 'true' | 'false' | '');
    set smallMenu(b: 'true' | 'false' | '');
    show(): void;
    hide(): void;
    doLayout(): void;
    styleClass(): "" | "xy-sidenav" | "xy-sidenav-small";
    static ɵfac: i0.ɵɵFactoryDeclaration<XySidenavContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XySidenavContainerComponent, "xy-sidenav-container", never, { "_sticky": { "alias": "_sticky"; "required": false; }; "_collapse": { "alias": "_collapse"; "required": false; }; "_smallMenu": { "alias": "_smallMenu"; "required": false; }; "closeByClick": { "alias": "closeByClick"; "required": false; }; "normalSideNav": { "alias": "normalSideNav"; "required": false; }; "sticky": { "alias": "sticky"; "required": false; }; "collapse": { "alias": "collapse"; "required": false; }; "smallMenu": { "alias": "smallMenu"; "required": false; }; }, {}, never, ["xy-sidenav"], false, never>;
}
