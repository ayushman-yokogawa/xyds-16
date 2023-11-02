import {
  Component,
  ContentChild,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";


@Component({
  selector: "xy-snackbar",
  template: `
    <div class="xy-snackbar" [ngClass]="{'xy-ab-snack': action}" [class]="styleClass()" [attr.value]="value" [attr.icon]="icon" [attr.autoClose]="autoClose">
    <div class="grid">
        <div class="content body2 grid">
           <div class="snackbar-icon" *ngIf="icon">
                <mat-icon >{{icon}}</mat-icon>
           </div>
            <p>
                <span>{{data.message}}</span>
            </p>
        </div>
        <div class="snackbar-action" *ngIf="action">
            <ng-content></ng-content>
        </div>
    </div>
</div>
  `,
  styleUrls: ["./xy-snackbar.component.scss"],
})
export class XySnackbarComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() value: number = 5;
  @Input() icon!: string;
  @Input() action!: string;
  @Input() showClose: boolean = false;
  @Input() customAction: boolean = false;
  @Input() _bottomLeft: boolean = false;
  @Input() _bottomRight: boolean = false;
  @Input() _topRight: boolean = false;
  @Input() _topLeft: boolean = false;
  @Input() _topCenter: boolean = false;
  @Output() accept = new EventEmitter();
  @Output() cancel = new EventEmitter();
  timeoutId: any;

  @Input() autoClose: boolean = true;

  @Input() set bottomLeft(b: "true" | "false" | "") {
    this._bottomLeft = b == "true" || b == "";
  }
  @Input() set bottomRight(b: "true" | "false" | "") {
    this._bottomRight = b == "true" || b == "";
  }
  @Input() set topRight(b: "true" | "false" | "") {
    this._topRight = b == "true" || b == "";
  }

  @Input() set topLeft(b: "true" | "false" | "") {
    this._topLeft = b == "true" || b == "";
  }

  @Input() set topCenter(b: "true" | "false" | "") {
    this._topCenter = b == "true" || b == "";
  }

  constructor(
    private snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  clearTimeout() {
    clearTimeout(this.timeoutId);
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.clearTimeout();
  }
  onClickClose($event: MouseEvent) {}

  horizontalPosition: MatSnackBarHorizontalPosition = "start";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";

  @Output() myEvent = new EventEmitter();

  styleClass() {
    if (this._bottomLeft) {
      return "bottomLeft";
    } else if (this._bottomRight) {
      return "bottomRight";
    } else if (this._topRight) {
      return "topRight";
    } else if (this._topLeft) {
      return "topLeft";
    } else if (this._topCenter) {
      return "topCenter";
    }

    return "bottomCenter";
  }
}
