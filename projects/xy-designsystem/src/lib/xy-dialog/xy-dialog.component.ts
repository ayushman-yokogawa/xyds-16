import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { XyDialogActionsComponent } from "../xy-dialog-actions/xy-dialog-actions.component";
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: "xy-dialog",
  templateUrl: "./xy-dialog.component.html",
  styleUrls: ["./xy-dialog.component.scss"],
})
export class XyDialogComponent implements OnInit {
  @Input() title!: string;
  @Input() column: number = 1;
  @Input() showClose: boolean = false;
  @Input() isCustomClose!: boolean;
  @ContentChild(XyDialogActionsComponent)
  cardActions!: XyDialogActionsComponent;
  constructor(private dialogRef: MatDialogRef<XyDialogComponent>) {}

  ngOnInit(): void {}
  @Output() myEvent = new EventEmitter();

  contentStyle() {
    if (this.column == 1) {
      return "one-column";
    } else if (this.column == 2) {
      return "two-column";
    }
    return "";
  }

  onClickClose($event: MouseEvent) {
    this.dialogRef.close();
  }
}
