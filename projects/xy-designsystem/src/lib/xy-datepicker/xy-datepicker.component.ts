import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Version,
  VERSION,
  ViewChild,
} from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "xy-datepicker",
  templateUrl: "./xy-datepicker.component.html",
  styleUrls: ["./xy-datepicker.component.scss"],
})
export class XyDatepickerComponent implements OnInit {
  @Input() placeholder!: string;
  @Input() value!: string;
  @Input() label!: string;
  @Input() daterange!: boolean;
  @Input() datePicker!: boolean;
  @Input() dateControl!: FormControl;
  @ViewChild("textInput") textInput!: ElementRef;
  constructor() {}
  _readonly: boolean = false;
  @Input() set readonly(s: string | boolean) {
    this._readonly = s == true || s == "true" || s == "readonly" || s === "";
    if (this.textInput) {
      this.textInput.nativeElement.readonly = this._readonly;
    }
  }
  get readonly(): boolean {
    return this._readonly;
  }
  @Input() type: string = "text";
  _required: boolean = false;
  @Input() set required(s: string | boolean) {
    this._required = s == true || s == "true" || s == "required" || s === "";
  }
  get required(): boolean {
    return this._required;
  }
  _small: boolean = false;
  @Input() set small(s: string | boolean) {
    this._small = s == true || s == "true" || s == "small" || s === "";
  }
  get small(): boolean {
    return this._small;
  }
  _disabled: boolean = false;
  @Input() set disabled(s: string | boolean) {
    this._disabled = s == true || s == "true" || s == "disabled" || s === "";
    if (this.textInput) {
      this.textInput.nativeElement.disabled = this._disabled;
    }
  }
  get disabled(): boolean {
    return this._disabled;
  }
  _hasError: boolean = false;
  @Input("has-error") set hasError(s: string | boolean) {
    this._hasError = s == true || s == "true" || s === "";
  }
  get hasError(): boolean {
    return this._hasError;
  }
  _isLoading: boolean = false;
  @Input("is-loading") set isLoading(s: string | boolean) {
    this._isLoading = s == true || s == "true" || s === "";
  }
  get isLoading(): boolean {
    return this._isLoading;
  }
  _edited: boolean = false;
  @Input() set edited(s: string | boolean) {
    this._edited = s == true || s == "true" || s == "edited" || s === "";
  }
  get edited(): boolean {
    return this._edited;
  }
  _success: boolean = false;
  @Input() set success(s: string | boolean) {
    this._success = s == true || s == "true" || s == "success" || s === "";
  }
  get success(): boolean {
    return this._success;
  }
  ngOnInit(): void {}

  styleClass(): string {
    let styles: string[] = [];
    if (this._small) {
      styles.push("xy-input-small");
    }
    if (this._hasError) {
      styles.push("xy-input-error");
    }
    if (this._isLoading) {
      styles.push("xy-input-loading");
    }
    if (this._readonly) {
      styles.push("xy-input-readonly");
    }
    if (this._edited) {
      styles.push("xy-input-edited");
    }
    if (this._success) {
      styles.push("xy-input-success");
    }
    if (this._disabled) {
      styles.push("mat-mdc-form-field-disabled");
    }

    return styles.join(" ");
  }
  public angularVersion: Version = VERSION;
  labelClass(): string {
    let cls = [];
    if (this._disabled) {
      cls.push("disabled-label");
    }
    if (parseInt(this.angularVersion.major) <= 12) {
      cls.push("angular12");
    }
    return cls.join(" ");
  }
}
