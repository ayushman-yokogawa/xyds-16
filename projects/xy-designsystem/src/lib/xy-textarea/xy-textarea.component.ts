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
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from "@angular/forms";
import { MatLegacyLabel as MatLabel } from "@angular/material/legacy-form-field";
import { XyHintComponent } from "../xy-hint/xy-hint.component";
import { XyErrorComponent } from "../xy-error/xy-error.component";

interface XyError {
  content: any;
}

@Component({
  selector: "xy-textarea",
  templateUrl: "./xy-textarea.component.html",
  styleUrls: ["./xy-textarea.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => XyTextareaComponent),
      multi: true,
    },
  ],
})
export class XyTextareaComponent implements ControlValueAccessor {
  @Input() name!: string;
  @Input() label!: string;
  private _value!: string;
  @Input() placeholder!: string;
  @Input() note!: string;
  @Input() rows?: string;
  @Input() maxlength?: string;
  @Input() formGroup!: FormGroup;
  @Input() formControl: FormControl = new FormControl("", []);
  @Input() textareaControl: FormControl = new FormControl("", []);
  @Input() errorStateMatcher!: ErrorStateMatcher;
  @Input("list") list?: string;
  _readonly: boolean = false;
  @Input() set readonly(s: string | boolean) {
    this._readonly = s == true || s == "true" || s == "readonly" || s === "";
    if (this.textarea) {
      this.textarea.nativeElement.readonly = this._readonly;
    }
  }
  get readonly(): boolean {
    return this._readonly;
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
    if (this.textarea) {
      this.textarea.nativeElement.disabled = this._disabled;
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

  get spinnerDiameter(): number {
    return 16;
  }

  public changed!: (value: string) => void;
  public touched!: (value: string) => void;

  public onChanged(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;

    this.changed(value);
  }

  @ViewChild(MatLabel) matLabel!: MatLabel;
  @ViewChild(MatInput) input!: MatInput;
  @ViewChild("textarea") textarea!: ElementRef;
  @ContentChild(XyHintComponent) hint!: XyHintComponent;

  @ContentChildren(XyErrorComponent) errors!: QueryList<XyErrorComponent>;
  private _onTouchedCallback: () => void = () => {};
  private _onChangeCallback: (_: any) => void = () => {};

  public angularVersion: Version = VERSION;

  constructor() {}

  public writeValue(value: any): void {
    if (this.input) {
      this.input.value = value;
    }
  }
  public registerOnChange(fn: any): void {
    this.changed = fn;
  }
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
    if (this.textarea) {
      this.textarea.nativeElement.disabled = this._disabled;
      this.textarea.nativeElement.readonly = this._readonly;
      this.value = this.value;
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
    }, 200);
  }

  // get value(): string {
  //   let value = '';
  //   if (this.input) {
  //     value = this.input.value;
  //   }
  //   return value;
  // }

  styleClass(): string {
    let styles: string[] = [];
    if (this._hasError) {
      styles.push("xy-textarea-error");
    }
    if (this._isLoading) {
      styles.push("xy-textarea-loading");
    }
    if (this._readonly) {
      styles.push("xy-textarea-readonly");
    }
    if (this._edited) {
      styles.push("xy-textarea-edited");
    }
    if (this._success) {
      styles.push("xy-textarea-success");
    }
    if (this._disabled) {
      styles.push("xy-textarea-disabled");
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
    if (this.textarea) {
      this.textarea.nativeElement.focus(options);
    }
  }

  blur(): void {
    if (this.textarea) {
      this.textarea.nativeElement.blur();
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
    this.textarea.nativeElement.disabled = isDisabled;
  }

  // writeValue(obj: any): void {
  //   if (this.input) {
  //     this.input.value = obj;
  //   }
  // }

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
