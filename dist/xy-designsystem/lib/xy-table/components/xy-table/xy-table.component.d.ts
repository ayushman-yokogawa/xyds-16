import { AfterViewInit, SimpleChanges, TemplateRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTable as MatTable, MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { XyTableColumnDef } from '../../interfaces/xy-table-column.interface';
import { EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatLegacyMenu as MatMenu } from '@angular/material/legacy-menu';
import { TableButtonAction } from '../models/tableButtonAction';
import { MatLegacyButton as MatButton } from "@angular/material/legacy-button";
import * as i0 from "@angular/core";
export declare const tableConst: {
    actionButton: {
        edit: string;
        delete: string;
        view: string;
    };
};
export declare class XyTableComponent implements AfterViewInit {
    xyTableData: Array<Object>;
    columnDefs: XyTableColumnDef[];
    expandcolumnDefs: XyTableColumnDef[];
    deleteRow: EventEmitter<any>;
    sort: MatSort;
    paginator: MatPaginator;
    table: MatTable<any>;
    expandDetail: EventEmitter<any>;
    expandRequired: boolean;
    expandTableDetail: any;
    selection: SelectionModel<XyTableColumnDef>;
    pageSize: number;
    pageSizeOptions: number[];
    length: number;
    ariaLabel: string;
    DisplayPaginatorLabel: string;
    expandAsData: boolean;
    expandAsTableData: boolean;
    isEditRequired: boolean;
    isDeleteRequired: boolean;
    editRow: EventEmitter<any>;
    refreshTrig: EventEmitter<any>;
    action: EventEmitter<TableButtonAction>;
    matButton: MatButton;
    tableactionBar: boolean;
    tableSearchBar: boolean;
    deleteAllTrig: boolean;
    columnHideTrig: boolean;
    searchPlaceholder: any;
    tableRefresh: boolean;
    noDataMessage: any;
    value: string;
    valueFilter: string;
    dataSource: any;
    expandedDataSource: any;
    expandedElement: any;
    columnsToDisplay: string[];
    expandColumnsToDisplay: string[];
    changeColor: any;
    customfilter: TemplateRef<any>;
    CustomELement: TemplateRef<any>;
    intlies: TemplateRef<any>;
    intlies2: TemplateRef<any>;
    valid: boolean;
    buttonText: any;
    actionButton: {
        edit: 'edit';
        delete: 'delete';
        view: 'View';
    };
    buttonAction: EventEmitter<TableButtonAction>;
    emptyData: MatTableDataSource<{
        empty: string;
    }>;
    onEditClick(): void;
    onDeleteClick(): void;
    onViewClick(): void;
    constructor();
    searchMenu: MatMenu;
    onHostClick(event: MouseEvent): void;
    refreshClick(event: Event): void;
    getDisplayedExpandColumns(): string[];
    dataSourceFilters: MatTableDataSource<Object>;
    getFilterData: never[];
    empFilters: any[];
    getDisplayedColumns(): string[];
    defaultValue: string;
    ngOnInit(): void;
    filterDictionary: Map<any, any>;
    applyFilter(event: Event): void;
    ngAfterViewInit(): void;
    toggleRow(element: any): void;
    onTableAction(e: TableButtonAction): void;
    delete(data: any): void;
    edit(data: any): void;
    click(): void;
    onClick($event: MouseEvent): void;
    refresh($event: MouseEvent): void;
    onClickRight($event: MouseEvent, element: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    selectedRow(element: any): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    selectRow(data: XyTableColumnDef): void;
    masterToggle(): void;
    removeSelectedRows(): void;
    private configureMenuClose;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyTableComponent, "xy-table", never, { "xyTableData": { "alias": "xyTableData"; "required": false; }; "columnDefs": { "alias": "columnDefs"; "required": false; }; "expandcolumnDefs": { "alias": "expandcolumnDefs"; "required": false; }; "expandRequired": { "alias": "expandRequired"; "required": false; }; "expandTableDetail": { "alias": "expandTableDetail"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "pageSizeOptions": { "alias": "pageSizeOptions"; "required": false; }; "length": { "alias": "length"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; "DisplayPaginatorLabel": { "alias": "DisplayPaginatorLabel"; "required": false; }; "expandAsData": { "alias": "expandAsData"; "required": false; }; "expandAsTableData": { "alias": "expandAsTableData"; "required": false; }; "isEditRequired": { "alias": "isEditRequired"; "required": false; }; "isDeleteRequired": { "alias": "isDeleteRequired"; "required": false; }; "tableactionBar": { "alias": "tableactionBar"; "required": false; }; "tableSearchBar": { "alias": "tableSearchBar"; "required": false; }; "deleteAllTrig": { "alias": "deleteAllTrig"; "required": false; }; "columnHideTrig": { "alias": "columnHideTrig"; "required": false; }; "searchPlaceholder": { "alias": "searchPlaceholder"; "required": false; }; "tableRefresh": { "alias": "tableRefresh"; "required": false; }; "noDataMessage": { "alias": "noDataMessage"; "required": false; }; "customfilter": { "alias": "customfilter"; "required": false; }; "CustomELement": { "alias": "CustomELement"; "required": false; }; "buttonText": { "alias": "buttonText"; "required": false; }; }, { "deleteRow": "deleteRow"; "expandDetail": "expandDetail"; "editRow": "editRow"; "refreshTrig": "refreshTrig"; "action": "action"; "buttonAction": "buttonAction"; }, never, never, false, never>;
}
