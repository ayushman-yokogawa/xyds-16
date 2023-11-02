import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { FocusOrigin } from "@angular/cdk/a11y";
import { MatLegacyButton as MatButton } from "@angular/material/legacy-button";

@Component({
  selector: "xy-button",
  template: `
    <ng-template #icon_content>
  <ng-content select="mat-icon,xy-icon,img,svg"></ng-content>
</ng-template>

<ng-template #content>
  <ng-content select=":not(mat-icon)"></ng-content>
</ng-template>
<ng-container [ngSwitch]="buttonType">
  <button #button *ngSwitchCase=BUTTON_TYPE_TEXT_BUTTON mat-button
          [id]="id"
          [name]="name"
          color="{{color}}"
          [type]="type"
          [disabled]="_disabled"
          [attr.default-focus]="defaultFocus"
          [attr.aria-label]="ariaLabel"
          [attr.tabindex]="tabindex"
          (click)="onClick($event)"
          (focus)="onFocus($event)"
          (blur)="onBlur($event)"
          class="xy-button"
          [ngClass]="{'has-icon':icon}">
    <mat-icon *ngIf="icon">{{icon}}</mat-icon>
    <ng-container *ngTemplateOutlet="icon_content"></ng-container>
    <ng-container *ngTemplateOutlet="content"></ng-container>
  </button>
  <button #button *ngSwitchCase=BUTTON_TYPE_LIGHT_WEIGHT_BUTTON mat-stroked-button
          [id]="id"
          [name]="name"
          color="{{color}}"
          [disabled]="_disabled"
          [type]="type"
          [attr.default-focus]="defaultFocus"
          [attr.aria-label]="ariaLabel"
          [attr.tabindex]="tabindex"
          (click)="onClick($event)"
          (focus)="onFocus($event)"
          (blur)="onBlur($event)"
          class="xy-button"
          [ngClass]="{'has-icon':icon}">
    <mat-icon *ngIf="icon">{{icon}}</mat-icon>
    <ng-container *ngTemplateOutlet="icon_content"></ng-container>
    <ng-container *ngTemplateOutlet="content"></ng-container>
  </button>
  <button #button *ngSwitchCase=BUTTON_TYPE_STANDARD_BUTTON mat-flat-button
          [id]="id"
          [name]="name"
          color="{{color}}"
          [disabled]="_disabled"
          [type]="type"
          [attr.default-focus]="defaultFocus"
          [attr.aria-label]="ariaLabel"
          [attr.tabindex]="tabindex"
          (click)="onClick($event)"
          (focus)="onFocus($event)"
          (blur)="onBlur($event)"
          class="xy-button"
          [ngClass]="{'has-icon':icon}">
    <mat-icon *ngIf="icon">{{icon}}</mat-icon>
    <ng-container *ngTemplateOutlet="icon_content"></ng-container>
    <ng-container *ngTemplateOutlet="content"></ng-container>
  </button>
  <button #button *ngSwitchCase=BUTTON_TYPE_ICON_BUTTON mat-icon-button
          [id]="id"
          [name]="name"
          color="{{color}}"
          [disabled]="_disabled"
          [type]="type"
          [attr.default-focus]="defaultFocus"
          [attr.aria-label]="ariaLabel"
          [attr.tabindex]="tabindex"
          (click)="onClick($event)"
          (focus)="onFocus($event)"
          (blur)="onBlur($event)"
          class="xy-button">
    <mat-icon *ngIf="icon">{{icon}}</mat-icon>
    <ng-container *ngTemplateOutlet="icon_content"></ng-container>
  </button>
  <button #button *ngSwitchCase=BUTTON_TYPE_FAB_BUTTON mat-fab
          [id]="id"
          [name]="name"
          color="{{color}}"
          [disabled]="_disabled"
          [type]="type"
          [attr.default-focus]="defaultFocus"
          [attr.aria-label]="ariaLabel"
          [attr.tabindex]="tabindex"
          (click)="onClick($event)"
          (focus)="onFocus($event)"
          (blur)="onBlur($event)"
          class="xy-button">
    <mat-icon *ngIf="icon">{{icon}}</mat-icon>
    <ng-container *ngTemplateOutlet="icon_content"></ng-container>
  </button>
  <button #button *ngSwitchCase=BUTTON_TYPE_MINI_FAB_BUTTON mat-mini-fab
          [id]="id"
          [name]="name"
          color="{{color}}"
          [type]="type"
          [disabled]="_disabled"
          [attr.default-focus]="defaultFocus"
          [attr.aria-label]="ariaLabel"
          [attr.tabindex]="tabindex"
          (click)="onClick($event)"
          (focus)="onFocus($event)"
          (blur)="onBlur($event)"
          class="xy-button">
    <mat-icon *ngIf="icon">{{icon}}</mat-icon>
    <ng-container *ngTemplateOutlet="icon_content"></ng-container>
  </button>
  <button #button *ngSwitchDefault mat-button
          [id]="id"
          [name]="name"
          color="{{color}}"
          [type]="type"
          [disabled]="_disabled"
          [attr.aria-label]="ariaLabel"
          [attr.tabindex]="tabindex"
          (click)="onClick($event)"
          (focus)="onFocus($event)"
          (blur)="onBlur($event)"
          class="xy-button"
          [ngClass]="{'has-icon':icon}">
    <mat-icon *ngIf="icon">{{icon}}</mat-icon>
    <ng-container *ngTemplateOutlet="icon_content"></ng-container>
    <ng-container *ngTemplateOutlet="content"></ng-container>
  </button>
</ng-container>

  `,
  styleUrls: ["./xy-button.component.scss"],
})
export class XyButtonComponent implements OnInit, AfterViewInit {
  BUTTON_TYPE_TEXT_BUTTON: string = "text-button";
  BUTTON_TYPE_LIGHT_WEIGHT_BUTTON: string = "light-weight-button";
  BUTTON_TYPE_PROMINENT_BUTTON: string = "prominent-button";
  BUTTON_TYPE_STANDARD_BUTTON: string = "standard-button";
  BUTTON_TYPE_ICON_BUTTON: string = "icon-button";
  BUTTON_TYPE_FAB_BUTTON: string = "fab-button";
  BUTTON_TYPE_MINI_FAB_BUTTON: string = "mini-fab-button";
  @Input() type: string = "button"

  @Input() id!: string;
  @Input() name!: string;
  @Input("button-type") buttonType:
    | "text-button"
    | "light-weight-button"
    | "standard-button"
    | "icon-button" = "standard-button";
  @Input() color:
    | "accent"
    | "critical"
    | "error"
    | "warning"
    | "attention"
    | "safe_normal" = "accent";
  // @Input() color!: 'primary'| 'accent' |  'error' ;
  _disableRipple: boolean = false;
  @Input() set disableRipple(s: string | boolean) {
    this._disableRipple =
      s == true || s == "true" || s == "disableRipple" || s === "";
  }
  _disabled: boolean = false;
  @Input() set disabled(s: string | boolean) {
    this._disabled = s == true || s == "true" || s == "disabled" || s === "";
  }
  get disabled(): boolean {
    return this._disabled;
  }
  @Input("aria-label") ariaLabel: string = "";
  @Input("default-focus") defaultFocus: boolean = false;
  @Input() tabindex?: number;

  @Input("text-button") set textButton(s: any) {
    if (s != undefined) {
      this.buttonType = "text-button";
    }
  }

  @Input("light-weight-button") set lightWeightButton(s: any) {
    if (s != undefined) {
      this.buttonType = "light-weight-button";
    }
  }

  @Input("standard-button") set standardButton(s: any) {
    if (s != undefined) {
      this.buttonType = "standard-button";
    }
  }

  @Input("icon-button") set iconButton(s: any) {
    if (s != undefined) {
      this.buttonType = "icon-button";
    }
  }
  @Input() set cdkFocusInitial(v: any) {
    this.focus();
  }
  @Input() icon!: string;
  hasIcon: boolean = false;

  @ViewChild("button") matButton!: MatButton;

  content: any;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.content = this.elementRef.nativeElement.innerHTML;
  }

  ngAfterViewInit(): void {
    if (this.defaultFocus) {
      this.focus();
    }

    let matIcons =
      this.elementRef.nativeElement.getElementsByTagName("mat-icon");
    if (matIcons.length > 0) {
      let buttons =
        this.elementRef.nativeElement.getElementsByTagName("button");
      if (buttons.length > 0) {
        this.renderer.addClass(buttons[0], "has-icon");
      }
    }
  }

  focus(origin?: FocusOrigin, options?: FocusOptions): void {
    if (this.matButton) {
      this.matButton._elementRef.nativeElement.focus(origin, options);
    }
  }

  blur(): void {
    if (this.matButton) {
      this.matButton._elementRef.nativeElement.blur();
    }
  }

  click(): void {
    if (this.matButton) {
      this.matButton._elementRef.nativeElement.click();
    }
  }

  onClick($event: MouseEvent): void {}

  onFocus($event: FocusEvent): void {}

  onBlur($event: FocusEvent): void {}
}
