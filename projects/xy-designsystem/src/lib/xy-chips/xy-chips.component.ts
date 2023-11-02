import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";


@Component({
  selector: "xy-chips",
  template: `
    <mat-chip-option  [disabled]="disabled" color="accent" [value]="value" [id]="id" [selected]="selected">
        <mat-icon *ngIf="checked">check</mat-icon>
        <mat-icon *ngIf="icon" class="myCustomIcon">{{icon}}</mat-icon>
        <img matChipAvatar src="{{avatar}}" alt="Photo of a Shiba Inu" *ngIf="avatar"/>
       <span class='chips-content'> {{chipsLabel}}</span>

        <button matChipRemove  (click)="removeChips.emit()" *ngIf="removeBtn">
            <mat-icon>cancel</mat-icon>
        </button>
  </mat-chip-option>
  `,
  styleUrls: ["./xy-chips.component.scss"],
})
export class XyChipsComponent implements OnInit {
  @Input() chipsLabel!: any;
  @Input() avatar!: any;
  @Input() value!: string;
  @Input() id!: string;
  @Input() icon!: string;
  @Input() removeBtn!: boolean;
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  @Input() checked: boolean = false;
  @Input() removeIcon: boolean = true;
  @Input() color:
    | "accent"
    | "critical"
    | "error"
    | "warning"
    | "attention"
    | "safe_normal" = "accent";
  @Output() removeChips = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
