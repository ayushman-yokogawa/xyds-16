import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router  } from '@angular/router';
import { SysBreadcrumbComponent } from './sys-breadcrumb.component';


@NgModule({
  declarations: [
    SysBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SysBreadcrumbComponent
  ],
  providers: []
})
export class XyBreadcrumbMenuModule { }
