import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, HostListener, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTable as MatTable, MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { XyTableColumnDef } from '../../interfaces/xy-table-column.interface';
import { Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, merge, Observable, Subject, Subscription } from 'rxjs';
import { TableColumn } from '../models/tableColumn';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatLegacySelectChange as MatSelectChange } from '@angular/material/legacy-select';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatLegacyMenu as MatMenu, MatLegacyMenuTrigger as MatMenuTrigger } from '@angular/material/legacy-menu';
import { TableButtonAction } from '../models/tableButtonAction';
import {MatLegacyButton as MatButton} from "@angular/material/legacy-button";
import { XyNode } from '../../../xy-tree/xy-tree.component';
import { MatLegacyCheckboxChange as MatCheckboxChange } from '@angular/material/legacy-checkbox';



export const tableConst = {
  actionButton: {
    edit: 'edit',
    delete: 'delete',
    view: 'View',
  },
}


@Component({
  selector: 'xy-table',
  templateUrl: './xy-table.component.html',
  styleUrls: ['./xy-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px'})),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class XyTableComponent implements AfterViewInit {
  @Input() xyTableData : Array<Object> = [];
  @Input() columnDefs!: XyTableColumnDef[];
  @Input() expandcolumnDefs!: XyTableColumnDef[];
  @Output() deleteRow = new EventEmitter<any>();
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;
  @Output() expandDetail = new EventEmitter<any>();
  @Input() expandRequired: boolean = true;
  @Input() expandTableDetail: any = [];
  selection = new SelectionModel<XyTableColumnDef>(true, []);
  @Input() pageSize!: number;
  @Input() pageSizeOptions!: number[];
  @Input() length!: number;
  @Input('aria-label') ariaLabel!: string;
  @Input() DisplayPaginatorLabel! : string;
  @Input() expandAsData : boolean = false;
  @Input() expandAsTableData : boolean = false;
  @Input() isEditRequired:boolean = false;
  @Input() isDeleteRequired:boolean = false;
  @Output() editRow = new EventEmitter<any>();
  @Output() refreshTrig = new EventEmitter<any>();
  @Output() action: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>();
  @ViewChild('button') matButton!: MatButton;
  @Input() tableactionBar!: boolean;
  @Input() tableSearchBar!: boolean;
  @Input() deleteAllTrig!: boolean;
  @Input() columnHideTrig!: boolean;
  @Input() searchPlaceholder!: any;
  @Input() tableRefresh!: boolean;
  @Input() noDataMessage!: any;
  value!: string;
  valueFilter!: string;
  dataSource: any;
  expandedDataSource:any;
  expandedElement:any;
  columnsToDisplay: string[] = [];
  expandColumnsToDisplay:string[] = [];
  changeColor: any;
  @Input() customfilter!: TemplateRef<any>
  @Input() CustomELement!: TemplateRef<any>
  intlies!:  TemplateRef<any>
  intlies2!:  TemplateRef<any>
  valid = false;
  @Input() buttonText: any;

  actionButton!: {
    edit: 'edit',
    delete: 'delete',
    view: 'View',
  }
 
  @Output() buttonAction: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()
 emptyData = new MatTableDataSource([{ empty: "row" }]);
  onEditClick() {
    this.buttonAction.emit({
      name: tableConst.actionButton.edit,
      value: this.value,
    })
  }

  onDeleteClick() {
    this.buttonAction.emit({
       name: tableConst.actionButton.delete ,
       value: this.value,
    });
  }

  onViewClick() {
    this.buttonAction.emit({ 
      name: tableConst.actionButton.view ,
      value: this.value,
    });
  }

  constructor() { }

  @ViewChild('searchMenu') searchMenu!: MatMenu;
  
  @HostListener('click', ['$event'])
  onHostClick(event: MouseEvent) {
    console.log(event);
  }

  refreshClick(event: Event) {
    console.log("event", event);
  }

  // getDisplayedColumns(): string[] {
  //   return this.columnDefs.filter(cd => cd.visible).map(cd => cd.columnDef);
    
  // } 
  getDisplayedExpandColumns(): string[] {
    return this.expandcolumnDefs.filter(cd => cd.visible).map(cd => cd.columnDef);
  }
  
  dataSourceFilters = new MatTableDataSource(this.xyTableData);

  getFilterData = [];
  
  empFilters: any[]=[];

  getDisplayedColumns(){
    const filterData = this.columnDefs.filter(cd => cd.visible).map(cd => cd.columnDef);
    const columnHide = this.xyTableData.map((rowValue)=>{
    let obj : any = {};
      for (const [key, value] of Object.entries(rowValue)) {
        if(filterData.indexOf(key) > -1){
            obj[key] = value;
        }
      }
      return obj;
    })
    console.log(columnHide);
   
    this.dataSource = new MatTableDataSource(columnHide);
    return this.columnDefs.filter(cd => cd.visible).map(cd => cd.columnDef);
  } 


  defaultValue = "All";
  ngOnInit(): void {
    this.intlies = this.customfilter;
    this.intlies2 = this.CustomELement;
    this.dataSource = new MatTableDataSource(this.xyTableData);
    this.dataSource.sort = this.sort;
    this.columnDefs.forEach(element => this.columnsToDisplay.push(element.columnDef));
    this.paginator._intl.itemsPerPageLabel= this.DisplayPaginatorLabel;
    this.expandcolumnDefs.forEach(element => this.expandColumnsToDisplay.push(element.columnDef));
  }



  
  filterDictionary= new Map<any,any>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    (this.searchMenu as any).closed = this.configureMenuClose(this.searchMenu.close);
  }

  toggleRow(element: any) {
    this.expandedElement = this.expandedElement === element ? null : element;
  } 

  onTableAction(e: TableButtonAction): void {
    this.action.emit(e);
    this.buttonAction.emit({ name: tableConst.actionButton.delete });
  }

  delete(data: any): void {
    this.deleteRow.emit(data);
  }

  edit(data:any): void{
    this.editRow.emit(data);
  }

 
  click(): void {
    if (this.matButton) {
      this.matButton._elementRef.nativeElement.click();
    }
  }

  onClick($event: MouseEvent): void {
    console.log("Button CLicked");
  }

  refresh($event: MouseEvent): void{}
  
  onClickRight($event: MouseEvent, element:any) {
    $event.stopPropagation();
    if (element.clickRight) {
      element.clickRight.call(this);
    }
  }
  
  // onDeleteClick() {
   
  // onViewClick() {
  //   this.buttonAction.emit({ name: tableConst.actionButton.view });
  // }
  
  ngOnChanges(changes: SimpleChanges): void {
    // this.getDisplayedColumns();
    for (const propName of Object.keys(changes)) {
      const change = changes[propName];
      if (propName === 'expandTableDetail') {
        this.expandedElement = change.currentValue;
        this.expandedDataSource = this.expandedElement;
      }
    }
  }


  selectedRow(element : any) {
    this.changeColor = this.expandedElement === element ? null : element;
  }

 

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
 
  selectRow(data: XyTableColumnDef) {
    this.selection.toggle(data);
  }

  
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach((data: any) => this.selection.select(data));
  }

  removeSelectedRows() {
    this.selection.selected.forEach(item => {
      let index: number = this.xyTableData.findIndex((d: any) => d === item);
      console.log(this.xyTableData.findIndex((d: any) => d === item));
      this.xyTableData.splice(index,1)
      this.dataSource = new MatTableDataSource<any>(this.xyTableData);
    });
    this.selection = new SelectionModel<XyTableColumnDef>(true, []);
  }



   private configureMenuClose(old: MatMenu['close']): MatMenu['close'] {
     const upd = new EventEmitter();
     feed(upd.pipe(
       filter(event => {
         console.log(`menu.close(${JSON.stringify(event)})`);
         if (event === 'click') {
           // Ignore clicks inside the menu 
           return false;
         }
         return true;
       }),
     ), old);
     return upd;
   }

 

  // @Input() pageSize!: number;
  // @Input() isTrue: boolean = false;
  // @Input() pageSizeOptions!: number[];
  // @Input() length!: number;
  // @ViewChild(MatPaginator, { static: true })
  // paginator!: MatPaginator;
  // @Input('aria-label') ariaLabel!: string;
  // @Input() DisplayPaginatorLabel! : string;
  // @Output() action: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()
  // @Input() columns!: Array<TableColumn>;
  // @Input() dataset: Array<any> = [];
  // @ViewChild(MatSort, { static: true }) sort!: MatSort;
  // dataSource!: MatTableDataSource<any>;
  // selection = new SelectionModel<any>(true, []);
  // displayedColumns: string[] = [];
  // value!: string;

  // @Input() expandAsTableData : boolean = false;
  // @Input() expandAsData : boolean = false;
  // @Input() expandcolumnDefs!:Array<TableColumn>;
  // @Output() expandDetail = new EventEmitter<any>();
  // @Input() expandRequired: boolean = true;
  // @Input() expandTableDetail: any = [];

  // @Input() getCustomFilter!: TemplateRef<any>;
  // intlies!: TemplateRef<any>;

  // expandedDataSource:any;
  // expandedElement:any;
  // columnsToDisplay: string[] = [];
  // expandColumnsToDisplay:string[] = [];


  // constructor() { }
  // @Output() buttonAction: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()

  // getDisplayedColumns(): string[] {
  //   return this.columns.filter(cd => cd.visible).map(cd => cd.columnDef);
  // }

  // OpenFilter(){
  //   alert("hello");
  // }

  // ngOnInit() {
  //   this.intlies = this.getCustomFilter;
   
  //   // set checkbox column
  //   this.displayedColumns.push("select");

    // add action column
    

  //   // set table columns
  //   this.displayedColumns = this.displayedColumns.concat(this.columns.map(x => x.columnDef));    // pre-fix static
  //   this.dataSource = new MatTableDataSource<any>(this.dataset);
  //   this.paginator._intl.itemsPerPageLabel= this.DisplayPaginatorLabel;
  //   // set pagination
  //   this.dataSource.paginator = this.paginator;

  //   this.expandcolumnDefs.forEach(element => this.expandColumnsToDisplay.push(element.columnDef))
  //   this.dataSource.paginator = this.paginator;

   
  
  // }

  // // form:FormGroup = new FormGroup({
  // //   displayedColumns: new FormControl(false),
  // // });

  // // col = this.form.get('name');
  // // columns1!: any[];
  // // getDisplayedColumns(){
  // //   this.columns1 = this.columns.filter(cd=>!cd.hide).map(cd=>cd.columnDef);
  // //  }

  
  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }
  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   console.log(filterValue);
  // }

  // toggleRow(element: any) {
  //   this.expandedElement = this.expandedElement === element ? null : element;
  // }   

  // ngOnChanges(changes: SimpleChanges): void {
  //   for (const propName of Object.keys(changes)) {
  //     const change = changes[propName];
  //     if (propName === 'expandTableDataSet') {
  //       this.expandedElement = change.currentValue;
  //       this.expandedDataSource = this.expandedElement;
  //     }
  //   }
  // }

  // selectRow(data: XyTableColumnDef) {
  //   this.selection.toggle(data);
  // }

  // removeSelectedRows() {
  //    this.selection.selected.forEach(item => {
  //      let index: number = this.dataset.findIndex((d: any) => d === item);
  //      console.log(this.dataset.findIndex((d: any) => d === item));
  //      this.dataset.splice(index,1)
  //      this.dataSource = new MatTableDataSource<any>(this.dataset);
  //    });
  //    this.selection = new SelectionModel<XyTableColumnDef>(true, []);
  //    console.log(this.dataset);
  //  }

  
  //  onRefreshClick() {
  //   alert("helo");
  // }

}

function feed<T>(from: Observable<T>, to: Subject<T>): Subscription {
  return from.subscribe(
    data => to.next(data),
    err => to.error(err),
    () => to.complete(),
  );
}