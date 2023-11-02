import { AfterViewInit, ElementRef, EventEmitter, OnInit } from "@angular/core";
import { XySidenavContainerComponent } from "../xy-sidenav/xy-sidenav-container.component";
import * as i0 from "@angular/core";
export declare class XyTopAppBarComponent implements OnInit, AfterViewInit {
    private element;
    username: any;
    role: string;
    classTitle: string;
    multiple: boolean;
    profile: boolean;
    avatar: any;
    draggable: any;
    title: string;
    className: string;
    menuBtn: boolean;
    logo: string;
    fixed: boolean;
    linkToSidenav: XySidenavContainerComponent;
    color: "primary" | "accent" | "critical" | "error" | "warning" | "attention" | "safe_normal";
    private sidenavOpened;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onClickSidenavButton(): void;
    menuClose: EventEmitter<any>;
    updateSidenav(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyTopAppBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyTopAppBarComponent, "xy-topAppBar", never, { "username": { "alias": "username"; "required": false; }; "role": { "alias": "role"; "required": false; }; "classTitle": { "alias": "classTitle"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "profile": { "alias": "profile"; "required": false; }; "avatar": { "alias": "avatar"; "required": false; }; "title": { "alias": "title"; "required": false; }; "className": { "alias": "className"; "required": false; }; "menuBtn": { "alias": "menuBtn"; "required": false; }; "logo": { "alias": "logo"; "required": false; }; "fixed": { "alias": "fixed"; "required": false; }; "linkToSidenav": { "alias": "linkToSidenav"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, { "menuClose": "menuClose"; }, never, ["h1", "*", "*"], false, never>;
}
