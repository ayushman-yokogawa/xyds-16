export interface XyTableColumnDef {
    columnDef: string;
    headerCellDef: string;
    cellDef: any;
    isSort: boolean;
    colId?: string;
    checkboxRequired: boolean;
    action?: Function;
    clickRight?: Function;
    rightIcon?: string;
    clickRight2?: Function;
    visible: boolean;
    htmlElement: boolean;
    allAction: boolean;
}
