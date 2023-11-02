import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  QueryList,
  ViewChild,
} from "@angular/core";
import { MatLegacyCheckbox as MatCheckbox, MatLegacyCheckboxChange as MatCheckboxChange } from "@angular/material/legacy-checkbox";
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from "@angular/forms";
import { XyErrorComponent } from "../xy-error/xy-error.component";

@Component({
  selector: "xy-checkbox",
  templateUrl: "./xy-checkbox.component.html",
  styleUrls: ["./xy-checkbox.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => XyCheckboxComponent),
      multi: true,
    },
  ],
})
export class XyCheckboxComponent
  implements AfterViewInit, ControlValueAccessor
{
  @Input() id!: string;
  @Input() checked: boolean = false;
  @Input() color:
    | any
    | "accent"
    | "critical"
    | "error"
    | "warning"
    | "attention"
    | "safe_normal" = "accent";
  @Input() value: any;
  @Input() name!: string;
  @Input() label!: string;
  @Input() checkedFormControl!: FormControl;

  @Output() checkedChange = new EventEmitter<boolean>();

  toggleChecked() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  _disabled: boolean = false;
  @Input() set disabled(s: string | boolean) {
    this._disabled = s == true || s == "true" || s == "disabled" || s === "";
  }
  get disabled(): boolean {
    return this._disabled;
  }
  _required: boolean = false;
  @Input() set required(s: string | boolean) {
    this._required = s == true || s == "true" || s === "";
  }
  get required(): boolean {
    return this._required;
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
  @Input() formGroup!: FormGroup;
  @Input() formControl: FormControl = new FormControl("", []);
  @Output("change") onchange: EventEmitter<MatCheckboxChange> =
    new EventEmitter<MatCheckboxChange>();
  @Output("click") onclick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  @ViewChild(MatCheckbox) checkbox!: MatCheckbox;
  @ViewChild("checkbox") checkboxInput!: ElementRef;
  @ContentChildren(XyErrorComponent) errors!: QueryList<XyErrorComponent>;

  private _onTouchedCallback: (_: any) => void = () => {};
  private _onChangeCallback: (_: any) => void = () => {};

  public changed!: (value: string) => void;
  public touched!: (value: string) => void;
  public isDisabled!: Boolean;

  constructor(public fb: FormBuilder) {}

  public writeValue(value: any): void {
    this.value = value;
    if (this.checked) {
      this.checkbox.value = value;
    }
  }
  public registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  public onChanged(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  ngAfterViewInit(): void {
    //console.log(this.value);
    let control: any;
    if (this.formGroup) {
      control = <FormControl>this.formGroup.get(this.value);
    } else if (this.formControl) {
      control = this.formControl;
    }
    if (control == null) {
      this.formControl = new FormControl("", []);
    }
    if (this.required) {
      this.formControl.addValidators(Validators.required);
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.checkboxInput.nativeElement.disabled = isDisabled;
  }
  onChange($event: MatCheckboxChange) {
    if (this.checked != $event.checked) {
      this.checked = this.value;
      if (this.formGroup) {
        const control: FormControl = <FormControl>this.formGroup.get(this.name);
        if (control) {
          control.setValue($event.checked ? this.value : null);
        }
      } else if (this.formControl) {
        this.formControl.setValue($event.checked ? this.value : null);
      }
      this.onchange.emit($event);
    }
  }

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.onclick.emit(event);
  }

  onFocus(event: FocusEvent) {}

  onBlur(event: FocusEvent) {}
}
