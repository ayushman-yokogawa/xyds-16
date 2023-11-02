import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { MatLegacyRadioButton as MatRadioButton, MatLegacyRadioChange as MatRadioChange } from "@angular/material/legacy-radio";
import { XyRadioGroupComponent } from "./xy-radio-group.component";

@Component({
  selector: "xy-radio",
  templateUrl: "./xy-radio.component.html",
  styleUrls: ["./xy-radio.component.scss"],
})
export class XyRadioComponent {
  @Input() id!: string;
  @Input() value: any;
  @Input() name!: string;
  @Input() label!: string;
  @Input() color:
    | any
    | "accent"
    | "critical"
    | "error"
    | "warning"
    | "attention"
    | "safe_normal" = "accent";
  _checked: boolean = false;
  @Input() set checked(s: string | boolean) {
    if (this._checked != s) {
      this._checked = s == true || s == "true" || s == "checked" || s === "";
    }
  }
  get checked(): boolean {
    return this._checked;
  }
  _required: boolean = false;
  @Input() set required(s: string | boolean) {
    this._required = s == true || s == "true" || s == "required" || s === "";
  }
  get required(): boolean {
    return this._required;
  }
  _disabled: boolean = false;
  @Input() set disabled(s: string | boolean) {
    this._disabled = s == true || s == "true" || s == "disabled" || s === "";
  }
  get disabled(): boolean {
    return this._disabled;
  }
  _disableRipple: boolean = false;
  @Input() set disableRipple(s: string | boolean) {
    this._disableRipple =
      s == true || s == "true" || s == "disableRipple" || s === "";
  }
  @Input("aria-describedby") ariaDescribedby!: string;
  @Input("aria-label") ariaLabel!: string;
  @Input("aria-labelledby") ariaLabelledby!: string;
  @Input() tabindex?: number;
  @Output("change") onchange: EventEmitter<MatRadioChange> =
    new EventEmitter<MatRadioChange>();
  @Output("click") onclick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  @ViewChild(MatRadioButton) radio!: MatRadioButton;

  group!: XyRadioGroupComponent;

  constructor() {}

  onChange(event: MatRadioChange) {
    this.checked = event.value == this.value;
    this.onchange.emit(event);
    if (this.group) {
      this.group.onChange(event);
    }
  }

  onClick(event: MouseEvent) {
    this.onclick.emit(event);
  }

  onFocus(event: FocusEvent) {}

  onBlur(event: FocusEvent) {}

  styleClass() {
    let classes = [];
    if (this.color) {
      classes.push("xy-radio-" + this.color);
    } else {
      classes.push("xy-radio-accent");
    }
    return classes.join(" ");
  }
}
