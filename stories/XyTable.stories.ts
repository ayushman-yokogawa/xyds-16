// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import { XyButtonModule, XyCheckboxModule, XyHintModule, XyInputModule, XyMenuModule, XySelectModule, XyTableCellComponent, XyTableComponent, XyTableModule } from "projects/xy-designsystem/src/public-api";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { ExpandDetailColumnDef } from 'projects/xy-designsystem-app/src/app/table-example/table';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule } from '@angular/cdk/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

export interface XyTableColumnDef {
  columnDef: string;
  headerCellDef: string;
  checkboxRequired:boolean;
  cellDef: any;
  isSort: boolean;
  visible: boolean;
  htmlElement: any;
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



export default {
  title: 'XYdesignsystem/XyTable',
  component: XyTableComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  options: {
  },
  argTypes: {
    'pageSize': {
        description: ``,
        name: 'pageSize',
        control: {
          type: 'number',
        },
        defaultValue: '5',
        type: {name: "number"},
        table: {
          type: {summary: null},
          defaultValue: {summary: 5}
      },
    },
    'pageSizeOptions':{
      description: ``,
      name: 'pageSizeOptions',
      control: {
        type: 'object',
      },
      type: {name: "number"},
      defaultValue: [5,10,25,100],
      table: {
        type: {summary: Object},
        defaultValue: {summary: [5,10,25,100]},
      },
    },
    'length': {
      description: ``,
      name: 'length',
      control: 'none',
      type: {name: "number"},
      defaultValue: '100',
      table: {
        type: {summary: null},
        defaultValue: {summary: 100}
    },
    },
    'DisplayPaginatorLabel': {
      description: ``,
      name: 'DisplayPaginatorLabel',
      control: 'text',
      type: {name: "string"},
      defaultValue:'Rows per page',
      table: {
        type: {summary: null},
        defaultValue: {summary: 'Rows per page'}
    },
    },
    'expandRequired': {
      description: ``,
      name: 'expandRequired',
      control: 'boolean',
      type: {name: "boolean"},
      defaultValue:true,
      table: {
        type: {summary: null},
        defaultValue: {summary: true}
    },
    },
    'expandAsData': {
      description: ``,
      name: 'expandAsData',
      control: 'boolean',
      type: {name: "boolean"},
      defaultValue:false,
      table: {
        type: {summary: null},
        defaultValue: {summary: false}
    },
    },   
    'expandAsTableData': {
      description: ``,
      name: 'expandAsTableData',
      control: 'boolean',
      type: {name: "boolean"},
      defaultValue:true,
      table: {
        type: {summary: null},
        defaultValue: {summary: true}
    },
    }, 
    'isEditRequired': {
      description: ``,
      name: 'isEditRequired',
      control: 'boolean',
      type: {name: "boolean"},
      defaultValue:false,
      table: {
        type: {summary: null},
        defaultValue: {summary: false}
    },
    }, 
    'isDeleteRequired': {
      description: ``,
      name: 'isDeleteRequired',
      control: 'boolean',
      type: {name: "boolean"},
      defaultValue:false,
      table: {
        type: {summary: null},
        defaultValue: {summary: false}
    },
    }
  },
  
  decorators: [
    moduleMetadata({
      declarations: [
        XyTableCellComponent,
        XyTableComponent
      ],
      imports: [
        CommonModule,
        MatTableModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        CdkTableModule,
        MatMenuModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatInputModule,
        FormsModule,
        MatSortModule,
        XyInputModule,
        MatOptionModule,
        MatSelectModule,
        XySelectModule,
        ReactiveFormsModule,
        XyHintModule,
        XyButtonModule,
        XyMenuModule,
        XyCheckboxModule
      ],
    }),
]} as Meta;


const Template: Story<XyTableComponent> = (args: XyTableComponent) => ({
  props: args
});

const EmpListColumnDef: XyTableColumnDef[] = [
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
    columnDef: 'htmlAction',
    headerCellDef: 'Element',
    checkboxRequired: false,
    isSort: true,
    visible: true,
    htmlElement: true,
    allAction: true,
    cellDef: {
        type: 'text',
        value: (element: DetailInfo) => element
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

const empList =[
  { 
    id:"1", 
    gatewayName:"EG:1026",
    portNumber:"SEW1234",
    IPAddress:"101.111.121",
    pressure:"12.55",
    status:"In progress",
    date:"12 Feb 2022",
    expandableRow:{expandData:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti obcaecati fuga dolores, possimus soluta quis sed tempora delectus. Dolor, possimus? Deleniti ab, voluptate quasi sequi voluptatem maiores! Rem, voluptatibus.'}
  },
  { id:"2",
    gatewayName:"EG:1023",
    portNumber:"SEW1232",
    IPAddress:"101.111.121",
    pressure:"12.51",
    status:"In progress",
    date:"21 Nov 2022",
    expandableRow:{expandData:'possimus soluta quis sed tempora delectus. Dolor, possimus? Deleniti ab, voluptate quasi sequi voluptatem maiores! Rem, voluptatibus.'}
  },
  { id:"3", 
    gatewayName:"EG:1022",
    portNumber:"SEW1235",
    IPAddress:"101.111.121",
    pressure:"12.50",
    status:"In progress",
    date:"11 Feb 2022",
    expandableRow:{expandData:'sed tempora delectus. Dolor, possimus? Deleniti ab, voluptate quasi sequi voluptatem maiores! Rem,possimus soluta quis voluptatibus.'}
  },
  {
    id:"4",
    gatewayName:"EG:1026",
    portNumber:"SEW1239",
    IPAddress:"101.111.121",
    pressure:"12.56",
    status:"Active",
    date:"1 Jan 2021",
    expandableRow:{expandData:'voluptatem maiores! Rem possimus soluta quis sed tempora delectus. Dolor, possimus? Deleniti ab, voluptate quasi sequi , voluptatibus.'}
  },
  { id:"5", 
    gatewayName:"EG:1022",
    portNumber:"SEW1231",
    IPAddress:"101.111.122",
    pressure:"12.55",
    status:"Error",
    date:"12 Oct 2020",
    expandableRow:{expandData:'sequi voluptatem maiores possimus soluta quis sed tempora delectus. Dolor, possimus? Deleniti ab, voluptate quasi sequi voluptatem maiores! Rem, voluptatibus.'}
},
  { id:"6", 
    gatewayName:"EG:1022",
    portNumber:"SEW1234",
    IPAddress:"101.111.121",
    status:"In progress",
    pressure:"12.55",
    date:"9 Feb 2022",
    expandableRow:{expandData:'Dolor, possimus? Deleniti ab, voluptate quasi sequi voluptatem maiores! Rem,  possimus soluta quis sed tempora delectus. Dolor, possimus? Deleniti ab, voluptate quasi sequi voluptatem maiores! Rem, voluptatibus.'}
  }
]

const  expandTableDetail = [
  {id:"11",controllerName:"Test1", price:"100", quantity:"10", imageSrc:"assets/images/Avatar.svg"},
  {id:"12", controllerName:"Test2", price:"200", quantity:"30", imageSrc:"assets/images/Avatar.svg"},
]

export const Basic = Template.bind({});
Basic.args = {
  xyTableData : empList,
  columnDefs: EmpListColumnDef,
  expandcolumnDefs : ExpandDetailColumnDef,
  expandTableDetail : expandTableDetail,
  tableactionBar: true,
  tableSearchBar:true,
  deleteAllTrig:true,
  columnHideTrig:true,
};


