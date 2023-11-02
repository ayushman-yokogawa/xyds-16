import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XyInputModule } from '../xy-input/xy-input.module';
import { MatIconModule } from '@angular/material/icon';
import { XySearchboxModule } from '../xy-searchbox/xy-searchbox.module';
import { SysSidebarComponent } from './sys-sidebar.component';
import { SysSidebarItemComponent } from './sys-sidebar-item/sys-sidebar-item.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [SysSidebarComponent, SysSidebarItemComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule, 
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    XyInputModule,
    MatIconModule,
    XySearchboxModule,
    RouterModule,
    RouterModule,
    MatSidenavModule,
    MatTooltipModule
  ],
  exports:[
    SysSidebarComponent,
    SysSidebarItemComponent
  ]
})
export class XySidebarModule { }
