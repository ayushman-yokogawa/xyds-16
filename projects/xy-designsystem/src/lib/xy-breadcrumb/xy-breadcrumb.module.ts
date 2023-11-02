import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyBreadcrumbComponent } from './xy-breadcrumb.component'
import { RouterModule,Router  } from '@angular/router';

import { XyBreadcrumbService } from './breadcrumb.service';

export function breadcrumbServiceFactory(router: Router) {
  return new XyBreadcrumbService(router);
}
@NgModule({
  declarations: [
    XyBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    XyBreadcrumbComponent
  ],
  providers: [
    { provide: XyBreadcrumbService, useFactory: breadcrumbServiceFactory, deps: [Router] }
]
})
export class XyBreadcrumbModule { }
