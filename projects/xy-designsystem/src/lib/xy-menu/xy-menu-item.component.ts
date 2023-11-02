import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "xy-menu-item",
  templateUrl: "./xy-menu-item.component.html",
  styleUrls: ["./xy-menu-item.component.scss"],
})
export class XyMenuItemComponent implements OnInit {
  @Input() value!: string;
  @Input() icon!: string;
  @Input() level!: number;
  @Input() customElement: boolean = true;
  _disabled: boolean = false;
  @Input() set disabled(s: boolean | string) {
    this._disabled = s == true || s == "true" || s == "disabled" || s === "";
  }
  get disabled(): boolean {
    return this._disabled;
  }
  _checkable: boolean = false;
  @Input() set checkable(s: boolean | string) {
    this._checkable = s == true || s == "true" || s == "checkable" || s === "";
  }
  get checkable(): boolean {
    return this._checkable;
  }
  content: any;

  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.content = this.elementRef.nativeElement.innerHTML;
  }
}
