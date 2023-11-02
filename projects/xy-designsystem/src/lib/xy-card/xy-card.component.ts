import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { XyCardActionsComponent } from "../xy-card-actions/xy-card-actions.component";
import { XyCardHeaderActionComponent } from "../xy-card-header-action/xy-card-header-action.component";

@Component({
  selector: "xy-card",
  template: `
  <mat-card #card [attr.icon]="icon">
  <div class="flex card-header">
    <mat-card-title *ngIf="title" [matTooltip]="this.titleTooltip == true ? this.title : ''">{{title}}</mat-card-title>
    
    <mat-icon>{{icon}}</mat-icon>
    
    <div *ngIf="headAction">
        <ng-content select="xy-card-header-action"></ng-content>
    </div>
  </div>
 

  <img *ngIf="image" class="xyCard-img" mat-card-image src={{image}} alt="Photo of a Shiba Inu">

  <xy-button *ngIf="showClose" (click)="customEvent.emit()" icon-button class="xy-card-close-button">
    <mat-icon>close</mat-icon>
  </xy-button>

  <mat-divider *ngIf="!image" inset></mat-divider>
  <mat-card-content>
  
    <div [class]="contentStyle()">
      <ng-content></ng-content>
    </div>
  </mat-card-content>
  <mat-card-actions *ngIf="cardActions">
    <ng-content select="xy-card-actions"></ng-content>
  </mat-card-actions>
</mat-card>

  `,
  styleUrls: ["./xy-card.component.scss"],
})
export class XyCardComponent implements OnInit {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() icon!: string;
  @Input() column: number = 1;
  @Input() showClose: boolean = false;
  @Input() cardIcon!: string;
  @Input() avatar!: string;
  @Input() image!: string;
  @Input() titleTooltip!: boolean;
  @ContentChild(XyCardActionsComponent) cardActions!: XyCardActionsComponent;
  @ContentChild(XyCardHeaderActionComponent)
  headAction!: XyCardHeaderActionComponent;
  this: any;

  constructor() {}

  ngOnInit(): void {}
  visible!: boolean;

  @Output() customEvent = new EventEmitter();

  contentStyle() {
    if (this.column == 1) {
      return "one-column";
    } else if (this.column == 2) {
      return "two-column";
    }
    return "";
  }
}
