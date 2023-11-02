import { AfterViewInit, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { XyTableColumnDef } from '../../interfaces/xy-table-column.interface';
import * as i0 from "@angular/core";
export declare class XyTableCellComponent implements AfterViewInit, OnInit {
    componentFactoryResolver: ComponentFactoryResolver;
    private _sanitizer;
    container: ViewContainerRef;
    columnDef: XyTableColumnDef;
    data: any;
    imageSrc: SafeUrl;
    constructor(componentFactoryResolver: ComponentFactoryResolver, _sanitizer: DomSanitizer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    get isRenderingXyComponent(): boolean;
    loadDynamicComponent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyTableCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyTableCellComponent, "xy-table-cell", never, { "columnDef": { "alias": "columnDef"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, {}, never, never, false, never>;
}
