import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { XySidenavContainerComponent } from "../xy-sidenav/xy-sidenav-container.component";

@Component({
  selector: "xy-topAppBar",
  template: `
    <mat-toolbar color="{{color}}" [ngClass]="{'header_fixed' : fixed}" [attr.multiple]="multiple" [attr.profile]="profile" [attr.avatar]="avatar" [attr.username]="username" [attr.role]="role">
      <div class="leftCol">
        <xy-button class="xy-sidenav-button" icon-button *ngIf="linkToSidenav != null" (click)="onClickSidenavButton()"><mat-icon>menu</mat-icon></xy-button>
        <ng-content select="h1"></ng-content>
      </div>

      <div class="header-row">
        <div class="col">
            <div class="menu-flex">
                <xy-button class="xy-sidenav-button menuBtn" [className]="className"  icon-button *ngIf="menuBtn != null" (click)="menuClose.emit()">
                    <mat-icon>menu</mat-icon>
                </xy-button>

                <div class="logoTitle">
                    <h1 class="main-title" class="{{classTitle}}" *ngIf="!logo">{{title}}</h1>
                    <img src="{{logo}}" alt="" *ngIf="logo">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
        <div class="col" *ngIf="multiple === true">
            <div class="profile-slot">
                <ng-content></ng-content>
                <div class="profile" *ngIf="profile === true">
                    <div class="line"></div>
                    <img src="{{avatar}}" alt="" class="avatar">
                    <div class="userData">
                        <h6  class="userName">{{username}},</h6>
                        <p class="userRole">{{role}}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </mat-toolbar>

  `,
  styleUrls: ["./xy-top-app-bar.component.scss"],
})
export class XyTopAppBarComponent implements OnInit, AfterViewInit {
  @Input() username: any;
  @Input() role!: string;
  @Input() classTitle!: string;
  @Input() multiple!: boolean;
  @Input() profile!: boolean;
  @Input() avatar!: any;
  draggable: any;
  @Input() title!: string;
  @Input() className!: string;
  @Input() menuBtn!: boolean;
  @Input() logo!: string;
  @Input() fixed!: boolean;
  @Input() linkToSidenav!: XySidenavContainerComponent;
  @Input() color:
    | "primary"
    | "accent"
    | "critical"
    | "error"
    | "warning"
    | "attention"
    | "safe_normal" = "accent";

  private sidenavOpened: boolean = true;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const self = this;
    setTimeout(function () {
      self.updateSidenav();
    }, 200);
  }

  onClickSidenavButton() {
    this.sidenavOpened = !this.sidenavOpened;
    this.updateSidenav();
  }

  @Output() menuClose = new EventEmitter();

  updateSidenav() {
    if (this.linkToSidenav) {
      if (this.sidenavOpened) {
        this.linkToSidenav.show();
      } else {
        this.linkToSidenav.hide();
      }
    }
  }
}
