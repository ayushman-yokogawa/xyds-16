import { ElementRef, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { SidebarService } from "./sidebar.service";
import { MatSidenav } from "@angular/material/sidenav";
import * as i0 from "@angular/core";
interface SidebarItem {
    label: string;
    routerLink: string;
    customClass: string;
    customSidebarClass: string;
}
export declare class SysSidebarComponent {
    private router;
    private element;
    private sidebarService;
    items: SidebarItem[];
    small: boolean;
    className: string;
    selectedItem: string;
    tooltip: boolean;
    fluid: boolean;
    _sticky: boolean;
    _collapse: boolean;
    _smallMenu: boolean;
    closeByClick: boolean;
    normalSideNav: boolean;
    isOpen: boolean;
    toggle(): void;
    myEvent: EventEmitter<any>;
    sidenav: MatSidenav;
    constructor(router: Router, element: ElementRef, sidebarService: SidebarService);
    menuBar(): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    reason: string;
    opened: boolean;
    customClass(): void;
    closeSidenav(): void;
    close(reason: string): void;
    set sticky(b: "true" | "false" | "");
    set collapse(b: "true" | "false" | "");
    set smallMenu(b: "true" | "false" | "");
    show(): void;
    hide(): void;
    doLayout(): void;
    styleClass(): "" | "xy-sidenav" | "xy-sidenav-small";
    static ɵfac: i0.ɵɵFactoryDeclaration<SysSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SysSidebarComponent, "xy-sidebar", never, { "items": { "alias": "items"; "required": false; }; "small": { "alias": "small"; "required": false; }; "className": { "alias": "className"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "fluid": { "alias": "fluid"; "required": false; }; "_sticky": { "alias": "_sticky"; "required": false; }; "_collapse": { "alias": "_collapse"; "required": false; }; "_smallMenu": { "alias": "_smallMenu"; "required": false; }; "closeByClick": { "alias": "closeByClick"; "required": false; }; "normalSideNav": { "alias": "normalSideNav"; "required": false; }; "sticky": { "alias": "sticky"; "required": false; }; "collapse": { "alias": "collapse"; "required": false; }; "smallMenu": { "alias": "smallMenu"; "required": false; }; }, { "myEvent": "myEvent"; }, never, [".xy-sidenav-toolbox-item", "*"], false, never>;
}
export {};
