import { Component, OnInit } from "@angular/core";

import { XyBreadcrumb } from "./breadcrumb";
import { XyBreadcrumbService } from "./breadcrumb.service";

@Component({
  selector: "xy-breadcrumb",
  templateUrl: "./xy-breadcrumb.component.html",
  styleUrls: ["./xy-breadcrumb.component.scss"],
})
export class XyBreadcrumbComponent {
  breadcrumbs!: XyBreadcrumb[];

  constructor(private breadcrumbService: XyBreadcrumbService) {
    this.breadcrumbService.xybreadcrumbChanged.subscribe(
      (crumbs: XyBreadcrumb[]) => {
        this.onBreadcrumbChange(crumbs);
      }
    );
  }

  private onBreadcrumbChange(crumbs: XyBreadcrumb[]) {
    this.breadcrumbs = crumbs;
  }
}
