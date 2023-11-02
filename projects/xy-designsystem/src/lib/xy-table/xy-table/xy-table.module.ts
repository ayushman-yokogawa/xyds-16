import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyTableComponent } from '../components/xy-table/xy-table.component';
import { MatTableModule } from '@angular/material/table';
import { XyTableCellComponent } from '../components/xy-table-cell/xy-table-cell.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableActionDirective } from '../components/directives/table-action.directive';
import { ActionButtonsComponent } from '../components/components-table/action-buttons/action-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule } from '@angular/cdk/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { XyInputModule } from '../../xy-input/xy-input.module';
import { MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { XySelectModule } from '../../xy-select/xy-select.module';
import { XyHintModule } from '../../xy-hint/xy-hint.module';
import { XyButtonModule } from '../../xy-button/xy-button.module';
import { XyMenuModule } from '../../xy-menu/xy-menu.module';
import { XyCheckboxModule } from '../../xy-checkbox/xy-checkbox.module';



@NgModule({
  declarations: [
    XyTableComponent,
    XyTableCellComponent,
    TableActionDirective, 
    ActionButtonsComponent
  ],
  imports: [
    CommonModule,
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
  exports: [
    XyTableComponent,
    XyTableCellComponent
  ]
})
export class XyTableModule { }
