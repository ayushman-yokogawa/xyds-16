import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BreadcrumbExampleComponent} from "./breadcrumb-example.component";
import { Child2ExampleComponent } from './breadcrumb-child-components/child2-example/child2-example.component';
const routes:Routes = [
    {path:"", component:BreadcrumbExampleComponent,
     children:[
        { path:"child", component:Child2ExampleComponent, data : {breadcrumb:"child"}}
    ]
}
];
@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(
        routes,
        {
          enableTracing: false,
          paramsInheritanceStrategy: 'always'
        }
      ),
    ],
    exports: [RouterModule]
  })
  export class BreadCrumbRoutingModule { }
