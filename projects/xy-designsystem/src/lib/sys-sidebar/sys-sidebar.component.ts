import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

import { SidebarService } from "./sidebar.service";
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from "@angular/animations";
import { MatSidenav } from "@angular/material/sidenav";
// import { TreeNode } from '../sys-tree/sys-tree.component';
interface SidebarItem {
  label: string;
  routerLink: string;
  customClass: string;
  customSidebarClass: string;
}
@Component({
  selector: "xy-sidebar",
  templateUrl: "./sys-sidebar.component.html",
  styleUrls: ["./sys-sidebar.component.scss"],
  animations: [
    trigger("slideInOut", [
      state("in", style({ transform: "translateX(0)" })),
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate("0.2s ease-in"),
      ]),
      transition(":leave", [
        animate("1s ease-out", style({ transform: "translateX(-100%)" })),
      ]),
    ]),
  ],
})
export class SysSidebarComponent {
  @Input() items!: SidebarItem[];
  @Input() small!: boolean;
  @Input() className!: string;
  selectedItem!: string;
  @Input() tooltip!: boolean;
  @Input() fluid: boolean = false;
  @Input() _sticky: boolean = false;
  @Input() _collapse: boolean = false;
  @Input() _smallMenu: boolean = false;
  @Input() closeByClick!: boolean;
  @Input() normalSideNav!: boolean;

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  @Output() myEvent = new EventEmitter();
  @ViewChild("sidenav") sidenav!: MatSidenav;

  constructor(
    private router: Router,
    private element: ElementRef,
    private sidebarService: SidebarService
  ) {}

  menuBar() {
    const sidebar = this.element.nativeElement.querySelector(".nav");
    const routerContent =
      this.element.nativeElement.querySelector(".router-content");
    sidebar.classList.add("small");
  }

  ngAfterViewInit() {
    const top = this.element.nativeElement.offsetTop;
    const container = this.element.nativeElement.querySelector(
      ".mat-sidenav-container"
    );
    if (container) {
      container.style.height = "calc(100% - " + top + "px)";
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedItem = event.url;
      }
    });
  }

  reason = "";
  opened: boolean = false;

  customClass() {
    const custom = this.element.nativeElement.querySelector(".mat-sidenav");

    const content = this.element.nativeElement.querySelector(
      ".mat-sidenav-content"
    );
    if (window.innerWidth >= 768) {
      custom.classList.add("xy-sidenav-small");
      custom.classList.remove("hide");
      content.style.marginLeft = "48px";
    } else {
      custom.classList.add("hide");
      content.style.marginLeft = "0px";
    }
  }

  closeSidenav(): void {
    this.sidenav.close();
  }

  close(reason: string) {
    this.reason = reason;
  }

  @Input() set sticky(b: "true" | "false" | "") {
    this._sticky = b == "true" || b == "";
  }
  @Input() set collapse(b: "true" | "false" | "") {
    this._collapse = b == "true" || b == "";
  }
  @Input() set smallMenu(b: "true" | "false" | "") {
    this._smallMenu = b == "true" || b == "";
  }

  show() {
    this.opened = true;
    this.sidenav.open();
    const custom = this.element.nativeElement.querySelector(".mat-sidenav");
    custom.classList.remove("hide");
    if (this._sticky || this._collapse || this._smallMenu) {
      this.doLayout();
    }
  }

  hide() {
    this.opened = false;
    if (!this._sticky || !this._collapse || this._smallMenu) {
      this.sidenav.close();
    } else {
      this.doLayout();
    }
  }

  doLayout() {
    const self = this;
    setTimeout(function () {
      const w =
        self.element.nativeElement.querySelector(".mat-sidenav").offsetWidth;
      self.element.nativeElement.querySelector(
        ".mat-sidenav-content"
      ).style.marginLeft = w + "px";
    }, 200);
  }

  styleClass() {
    if (!this._collapse) {
      return "";
    }
    if (this._sticky && !this.opened) {
      return "xy-sidenav";
    }
    if (this._sticky && this._collapse && !this.opened) {
      return "xy-sidenav-small";
    }
    return "xy-sidenav-small";
  }
}
function contentChildren(
  SysHeaderComponent: any
): (target: SysSidebarComponent, propertyKey: "header") => void {
  throw new Error("Function not implemented.");
}
