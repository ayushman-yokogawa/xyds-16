import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  QueryList,
  ViewChild,
} from "@angular/core";
import { XyOptionComponent } from "./xy-option.component";
import { MatSelect } from "@angular/material/select";
import { XyHintComponent } from "../xy-hint/xy-hint.component";
import { XyErrorComponent } from "../xy-error/xy-error.component";
import { MatOptionSelectionChange } from "@angular/material/core";
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";

export interface XyOptionItem {
  icon?: string;
  value?: string;
  disabled: boolean;
  content?: string;
  id: string;
  displayName: string;
}

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => XySelectComponent),
  multi: true,
};

@Component({
  selector: "xy-select",
  templateUrl: "./xy-select.component.html",
  styleUrls: ["./xy-select.component.scss"],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class XySelectComponent implements AfterViewInit, ControlValueAccessor {
  @Input() name!: string;
  @Input() label!: string;
  @Input() id!: string;
  @Input() placeholder!: string;
  @Output() selectedValueChange = new EventEmitter<string>();
  input: any;
  @Input() multiple: boolean = false;
  selectFormControl: FormControl = new FormControl("", Validators.required);
  @Input() errorMessage!: string;
  errorOccurred = false;
  hasError(): boolean {
    const control = this.selectFormControl;
    return control.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(): string {
    if (this.selectFormControl.hasError("required")) {
      return this.errorMessage;
    }
    return "";
  }

  private _value: any;
  private _onChange: any = () => {};
  private _onTouched: any = () => {};
  ngOnInit() {
    this.selectFormControl.valueChanges.subscribe((value) => {
      this._onChange(value);
      this.selectedValueChange.emit(value);
    });
  }
  writeValue(value: any): void {
    this._value = value;
    this.selectFormControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    if (isDisabled) {
      this.selectFormControl.disable();
    } else {
      this.selectFormControl.enable();
    }
  }
  _multipleSelect: boolean = false;
  _small: boolean = false;

  @Input() set multipleSelect(s: boolean | string) {
    this._multipleSelect =
      s == true || s == "true" || s == "multipleSelect" || s === "";
  }

  @Input() set small(s: boolean | string) {
    this._small = s == true || s == "true" || s == "small" || s === "";
  }

  get small(): boolean {
    return this._small;
  }

  get multipleSelect(): boolean {
    return this._multipleSelect;
  }
  _required: boolean = false;
  @Input() set required(s: string | boolean) {
    this._required = s == true || s == "true" || s == "required" || s === "";
  }
  get required(): boolean {
    return this._required;
  }

  _disabled: boolean = false;
  @Input() set disabled(s: boolean | string) {
    this._disabled = s == true || s == "true" || s == "disabled" || s === "";
    if (this.select) {
      this.select.disabled = this._disabled;
    }
    if (this.selectElement && this.selectElement.nativeElement) {
      this.selectElement.nativeElement.disabled = this._disabled;
    }
  }

  get disabled(): boolean {
    let value = false;
    if (this.select) {
      value = this.select.disabled != undefined;
    }
    return value;
  }

  private _shadow: boolean = false;
  @Input() set shadow(s: boolean | string) {
    this._shadow = s == true || s == "true" || s == "shadow" || s === "";
  }
  get shadow(): boolean {
    return this._shadow;
  }

  @Input() formGroup!: FormGroup;
  @Input() error!: string; 

  @ViewChild(MatSelect) select!: MatSelect;
  @ViewChild("sel") selectElement!: ElementRef;
  @ContentChildren(XyOptionComponent) options!: QueryList<XyOptionComponent>;
  @ContentChild(XyHintComponent) hint!: XyHintComponent;
  @ContentChildren(XyErrorComponent) errors!: QueryList<XyErrorComponent>;
  @Output("change") onchange: EventEmitter<any> = new EventEmitter<any>();

  private _onTouchedCallback: () => void = () => {};
  private _onChangeCallback: (_: any) => void = () => {};

  dataSourceData: XyOptionItem[] = [];
  @Input() set dataSource(list: XyOptionItem[]) {
    this.dataSourceData = list;
  }
  formControl: FormControl = new FormControl("", []);
  form: FormControl = new FormControl("", []);
  selectedValueString!: string;
  selectedValue: any;

  constructor(private http: HttpClient, public fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  ngAfterViewInit(): void {
    this.formControl.setValue(this.select.value);
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

    const self = this;

    if (this.options.length > 0) {
      let list: XyOptionItem[] = [];
      for (const option of this.options) {
        list.push({
          icon: option.icon,
          value: option.value,
          disabled: option.disabled,
          content: option.content,
          displayName: option.displayName,
          id: option.id,
        });
      }
      setTimeout(function () {
        self.dataSourceData = list;
        if (self.selectedValueString) {
          self.applyValue();
        }
      }, 200);
    }

    setTimeout(function () {
      if (self.select) {
        self.select.disabled = self._disabled;
      }
      if (self.selectElement && self.selectElement.nativeElement) {
        self.selectElement.nativeElement.disabled = self._disabled;
      }
    }, 200);
  }

  @Input() set value(v: string) {
    if (this.selectedValueString != v) {
      this.selectedValueString = v;
    }
    const self = this;
    setTimeout(function () {
      if (self.formControl) {
        console.log(self.formControl.setValue(v));
      } else {
        self.writeValue(v);
      }
    }, 200);
    this.applyValue();
  }

  get value(): string {
    let value = "";
    if (this.input) {
      value = this.input.value;
    }
    return value;
  }

  applyValue() {
    if (this.select) {
      if (this.select.value != this.selectedValueString) {
        this.select.value = this.selectedValueString;
      }
    }

    if (this.selectElement && this.selectElement.nativeElement) {
      if (this.selectElement.nativeElement.value != this.selectedValueString) {
        this.selectElement.nativeElement.value = this.selectedValueString;
      }
    }
    if (this.dataSourceData.length > 0) {
      for (const option of this.dataSourceData) {
        if (option.value == this.selectedValueString) {
          this.selectedValue = option;
        }
      }
    }
  }

  onChange(v: string) {
    this.value = v;
    const event = new MatOptionSelectionChange(this.selectedValue, true);
    this.onchange.emit(event.source);

    if (this.formGroup) {
      const control: FormControl = this.formGroup.get(this.name) as FormControl;
      if (control) {
        control.setValue(this.select.value);
      }
    } else if (this.formControl) {
      this.formControl.setValue(this.select.value);
    }
  }

  compare(a: XyOptionItem, b: XyOptionItem) {
    if (a != null && b != null) {
      if (a.value == b.value) {
        return true;
      }
    }
    return false;
  }

  public changed!: (value: string) => void;

  public onChanged(event: Event): void {
    const value: string = (<HTMLOptionElement>event.target).value;

    this.changed(value);
  }

  styleClass() {
    let classes = [];
    if (this._small) {
      classes.push("xy-select-small");
    }
    if (this._shadow) {
      classes.push("shadow");
    }
    if (this._multipleSelect) {
      classes.push("xy-multiple-select");
    }
    return classes.join(" ");
  }
}
