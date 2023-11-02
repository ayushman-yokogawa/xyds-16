import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { merge, Observable } from 'rxjs';
import { DetailInfo, EmpListColumnDef, ExpandDetailColumnDef, XyTableColumnDef } from '../../../../xy-designsystem-app/src/app/table-example/table'

class Todo {
  gatewayName!: string;
}
@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent implements OnInit {
  empList:Array<Object> = [];
  EmpListColumnDef = EmpListColumnDef;
  ExpandDetailColumnDef = ExpandDetailColumnDef;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  length = 100;
  ariaLabel = 'Select page';
  DisplayPaginatorLabel = "Rows per page";
  expandTableDetail:Array<Object> = [];
  dataSource: any;

  buttonText = "Action";
 
  @Input() xyTableData : Array<Object> = [];
  @Input() columnDefs!: XyTableColumnDef[];


  constructor(){}
  ngAfterViewInit() {
  }
  
  ngOnInit(): void {
   this.getData();
   this.expandDetail(event);
  }

  test(){
    alert("test is works!!!");
  }

  getData(){
    this.empList =[
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
        IPAddress:"101.111.125",
        pressure:"12.51",
        status:"In progress",
        date:"21 Nov 2022",
        expandableRow:{expandData:'possimus soluta quis sed tempora delectus. Dolor, possimus? Deleniti ab, voluptate quasi sequi voluptatem maiores! Rem, voluptatibus.'}
      },
      { id:"3", 
        gatewayName:"EG:1022",
        portNumber:"SEW1235",
        IPAddress:"101.111.126",
        pressure:"*",
        status:"In progress",
        date:"11 Feb 2022",
        expandableRow:{expandData:'sed tempora delectus. Dolor, possimus? Deleniti ab, voluptate quasi sequi voluptatem maiores! Rem,possimus soluta quis voluptatibus.'}
      },
      {
        id:"4",
        gatewayName:"EG:1026",
        portNumber:"SEW1239",
        IPAddress:"101.111.126",
        pressure:"12.56",
        status:"Active",
        date:"1 Jan 2021",
        expandableRow:{expandData:'voluptatem maiores! Rem possimus soluta quis sed tempora delectus. Dolor, possimus? Deleniti ab, voluptate quasi sequi , voluptatibus.'}
      },
     
    ]
  }
  
  expandDetail(element:any){
    this.expandTableDetail =[
     {id:"11",controllerName:"Test1", price:"100", quantity:"10", imageSrc:"assets/images/Avatar.svg"},
     { id:"12", controllerName:"Test2", price:"200", quantity:"30", imageSrc:"assets/images/Avatar.svg"},]
  }

  editRow(data:any){
   console.log(data);
   console.log('event', event);
  }

  deleteRow(data:any){
    console.log(data);
    console.log('event', event);
  }

  foo(data:any){
    console.log("hello");
  }

  // refreshRow(event: any){
  //   console.log(this.empList);
  //   alert("hello");
  // }

  refreshRow($event: MouseEvent, name: string) {
    alert(name + ' is clicked.');
  }


  onTableAction(event: any) {
    console.log('event', event)
  }

//   constructor(){}
//   expandTableDetail:Array<Object> = [];
//   ExpandDetailColumnDef = ExpandDetailColumnDef;
//   pageSize = 10;
//   pageSizeOptions: number[] = [1, 5, 10, 25, 100]
//   length = 100;
//   ariaLabel = 'Select page';
//   DisplayPaginatorLabel = "Rows per page";
//   data!: any[];
//   expandTableDataSet!: any[];
//   value!: string;
//   ngOnInit() {
   
//     // get data from API 
//     this.data = [
//       {
//         id: 1,
//         name: "Molly Pope",
//         date: "Jul 27, 2021",
//         company: "Faucibus Orci Institute",
//         country: "New Zealand",
//         city: "Campinas",
//         phone: "1-403-634-0276",
      
//       },
//       {
//         id: 2,
//         name: "Alfonso Vinson",
//         date: "May 11, 2021",
//         company: "Non Ante Corp.",
//         country: "United Kingdom",
//         city: "Redlands",
//         phone: "1-405-411-6336",
      
//       },
//     ];
// }

//   onTableAction(event: any) {
//     console.log('event', event)
//   }

//   applyFilter2(event: any) {
//     console.log('event', event);
//   }

 
//   columns = [
//     { id: "1", columnDef: 'name', header: 'Name' , visible: true, action : true},
//     { id: "2", columnDef: 'date', header: 'Date' , visible: true, action : true},
//     { id: "3", columnDef: 'company', header: 'Company',visible: true, action : true },
//     { id: "4", columnDef: 'country', header: 'Country', visible: true ,action : true },
//     { id: "5", columnDef: 'city', header: 'City',  visible: true, action : true},
//     { id: "6", columnDef: 'phone', header: 'Phone', visible: true,  action : true },
//   ]

//   Test(){
//     console.log(this.data);
//   }

}


 
