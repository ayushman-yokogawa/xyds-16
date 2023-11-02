import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  forwardRef,
  Input,
  QueryList,
  Version,
  VERSION,
  ViewChild,
} from "@angular/core";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatLegacyInput as MatInput } from "@angular/material/legacy-input";
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormControlOptions,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from "@angular/forms";
import { MatLegacyLabel as MatLabel } from "@angular/material/legacy-form-field";
import { XyHintComponent } from "../xy-hint/xy-hint.component";
import { XyErrorComponent } from "../xy-error/xy-error.component";
import { MatLegacyAutocomplete as MatAutocomplete } from "@angular/material/legacy-autocomplete";
import {
  MatDatepicker,
  MatDatepickerInputEvent,
} from "@angular/material/datepicker";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => XyInputComponent),
  multi: true,
};

interface XyError {
  content: any;
}

@Component({
  selector: "xy-input",
  templateUrl: "./xy-input.component.html",
  styleUrls: ["./xy-input.component.scss"],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class XyInputComponent implements AfterViewInit, ControlValueAccessor {
  @Input() matAutocomplete!: MatAutocomplete;
  @Input() name!: string;
  @Input() label!: string;
  private _value!: string;
  @Input() placeholder!: string;
  @Input() note!: string;
  @Input() formGroup!: FormGroup;
  @Input() formControl: FormControl = new FormControl("", []);
  @Input() inputFormControl: FormControl = new FormControl("", []);
  @Input() errorStateMatcher!: ErrorStateMatcher;
  @Input() isXyAutocomplete: boolean = false;
  @Input() isDatePicker: boolean = false;
  @Input() datePicker!: boolean;
  @Input() matDatepicker!: MatDatepicker<any>;

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

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
  public changed!: (value: string) => void;
  public touched!: (value: string) => void;
  public isDisabled!: Boolean;

  constructor(public fb: FormBuilder) {}

  public writeValue(value: any): void {
    if (this.input) {
      this.input.value = value;
    }
  }
  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public onChanged(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  get spinnerDiameter(): number {
    if (this._small) {
      return 16;
    }
    return 24;
  }

  @ViewChild(MatLabel) matLabel!: MatLabel;
  @ViewChild(MatInput) input!: MatInput;
  @ViewChild("textInput") textInput!: ElementRef;
  @ContentChild(XyHintComponent) hint!: XyHintComponent;

  @ContentChildren(XyErrorComponent) errors!: QueryList<XyErrorComponent>;
  private _onTouchedCallback: () => void = () => {};
  private _onChangeCallback: (_: any) => void = () => {};

  public angularVersion: Version = VERSION;

  ngAfterViewInit(): void {
    let control: any;
    if (this.formGroup) {
      control = <FormControl>this.formGroup.get(this.name);
    } else if (this.formControl) {
      control = this.formControl;
    }
    if (control == null) {
      this.formControl = new FormControl("", []);
    }
    if (this.required) {
      this.formControl.addValidators(Validators.required);
    }
    if (this.type == "email") {
      this.formControl.addValidators(Validators.email);
    }
    if (this.textInput) {
      this.textInput.nativeElement.disabled = this._disabled;
      this.textInput.nativeElement.readonly = this._readonly;
      this.value = this._value;
    }
  }

  @Input() set value(v: string) {
    this._value = v;
    const self = this;
    setTimeout(function () {
      if (self.formControl) {
        self.formControl.setValue(v);
      } else {
        self.writeValue(v);
      }
    }, 0);
  }

  get value(): string {
    let value = "";
    if (this.input) {
      value = this.input.value;
    }
    return value;
  }

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

  focus(options?: FocusOptions): void {
    if (this.textInput) {
      this.textInput.nativeElement.focus(options);
    }
  }

  blur(): void {
    if (this.textInput) {
      this.textInput.nativeElement.blur();
    }
  }

  updateErrorState(): void {
    if (this.input) {
      this.input.updateErrorState();
    }
  }

  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.textInput.nativeElement.disabled = isDisabled;
  }
  onChange($event: Event) {
    let error: boolean = false;

    if (this.formGroup) {
      const control: FormControl = <FormControl>this.formGroup.get(this.name);
      if (control) {
        control.setValue(this.input.value);
      }
    } else if (this.formControl) {
      this.formControl.setValue(this.input.value);
    }

    this.checkError();
  }

  onFocus($event: FocusEvent) {}

  onBlur($event: FocusEvent) {
    const self = this;
    setTimeout(function () {
      self.checkError();
    }, 200);
  }

  checkError() {
    let control: FormControl | null = null;
    let error: boolean = false;

    if (this.formGroup) {
      control = <FormControl>this.formGroup.get(this.name);
    } else if (this.formControl) {
      control = this.formControl;
    }
    if (control && control.invalid) {
      error = true;
    }
    error ||= this.input.errorState;
    this._hasError = error;
  }
}
