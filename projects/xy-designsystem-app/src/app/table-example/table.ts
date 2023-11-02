export interface XyTableColumnDef {
    columnDef: string;
    headerCellDef: string;
    checkboxRequired:boolean;
    cellDef: any;
    isSort: boolean;
    visible: boolean;
    htmlElement: boolean;
    allAction: boolean;
    clickRight?: Function;
  }

export interface DetailInfo{
 select?:boolean;
 action?: string; 
 menu?:string;
 id?:string;
 gatewayName?:string;
 portNumber?:string;
 IPAddress?:string;
 pressure?:string;
 status?:string;
 date?:any;
 htmlAction?:any;
}

export interface expandList{
    select?:boolean;
    controllerName?: string; 
    price?:string;
    quantity?:string;
    owner?:any;
    id?:any;
    imageSrc?: any;
   }

export const EmpListColumnDef: XyTableColumnDef[] = [
    {
        columnDef: 'checkbox',
        checkboxRequired: true,
        headerCellDef: 'Checkbox',
        isSort: true,
        visible: true,
        htmlElement: false,
        allAction: true,
        cellDef: {
            type: 'checkbox',
            value: (element: DetailInfo) => element.select
        }
    },
    
    {
        columnDef: 'gatewayName',
        headerCellDef: 'Gateway Name',
        checkboxRequired: false,
        isSort: true,
        visible: true,
        htmlElement: false,
        
        allAction: true,
        cellDef: {
            type: 'text',
            value: (element: DetailInfo) => element.gatewayName
        }
    },
    {
        columnDef: 'IPAddress',
        headerCellDef: 'IP Address',
        checkboxRequired: false,
        isSort: true,
        visible: true,
        htmlElement: false,
        allAction: true,
        cellDef: {
            type: 'text',
            value: (element: DetailInfo) => element.IPAddress
        }
    },
    {
        columnDef: 'portNumber',
        headerCellDef: 'Port Number',
        checkboxRequired: false,
        isSort: true,
        visible: true,
        htmlElement: false,
        allAction: true,
        cellDef: {
            type: 'text',
            value: (element: DetailInfo) => element.portNumber
        }
    },
    {
        columnDef: 'pressure',
        headerCellDef: 'Pressure',
        checkboxRequired: false,
        isSort: true,
        visible: true,
        htmlElement: false,
        allAction: true,
        cellDef: {
            type: 'text',
            value: (element: DetailInfo) => element.pressure
        }
    },
    {
        columnDef: 'menu',
        headerCellDef: 'Action',
        isSort: false,
        visible: true,
        htmlElement: false,
        allAction: true,
        checkboxRequired: false,
        cellDef: {
            type: 'menu',
            value: (element: DetailInfo) => element.menu
        }
    }
];

export const ExpandDetailColumnDef: XyTableColumnDef[] = [
    {
        columnDef: 'checkbox',
        checkboxRequired: true,
        headerCellDef: '',
        visible: true,
        htmlElement: false,
        allAction: true,
        isSort: true,
        cellDef: {
            type: 'checkbox',
            value: (element: expandList) => element.select
        }
    },
    {
        columnDef: 'Controller Name',
        checkboxRequired: false,
        headerCellDef: 'Controller Name',
        isSort: true,
        visible: true,
        htmlElement: false,
        allAction: true,
        cellDef: {
            type: 'text',
            value: (element: expandList) => element.controllerName
        }
    },
    {
        columnDef: 'Price',
        headerCellDef: 'Price',
        checkboxRequired: false,
        isSort: true,
        visible: true,
        htmlElement: false,
        allAction: true,
        cellDef: {
            type: 'text',
            value: (element: expandList) => element.price
        }
    },
    {
        columnDef: 'Quantity',
        headerCellDef: 'Quantity',
        checkboxRequired: false,
        isSort: true,
        visible: true,
        htmlElement: false,
        allAction: true,
        cellDef: {
            type: 'text',
            value: (element: expandList) => element.quantity
        }
    },
    {
        columnDef: 'image',
        headerCellDef: 'Owner',
        checkboxRequired: false,
        isSort: false,
        visible: true,
        htmlElement: false,
        allAction: true,
        cellDef: {
            type: 'image',
            value: (element: expandList) => element.imageSrc
        }
    }
];