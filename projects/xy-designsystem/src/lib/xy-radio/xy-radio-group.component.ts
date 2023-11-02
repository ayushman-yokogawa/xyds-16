import {
  AfterViewInit,
  Component,
  ContentChildren,
  forwardRef,
  Input,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import {MatLegacyRadioChange as MatRadioChange, MatLegacyRadioGroup as MatRadioGroup} from "@angular/material/legacy-radio";
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {XyRadioComponent} from "./xy-radio.component";
import {XyErrorComponent} from "../xy-error/xy-error.component";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => XyRadioGroupComponent),
  multi: true
};

@Component({
  selector: 'xy-radio-group',
  templateUrl: './xy-radio-group.component.html',
  styleUrls: ['./xy-radio-group.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class XyRadioGroupComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  _color: any;
  @Input() name!: string;
  _required:boolean = false;
  @Input() set required(s: string|boolean) {
    this._required = (s == true || s == 'true' || s == 'required' || s === '');
  };
  get required(): boolean {
    return this._required;
  };
  _disabled:boolean = false;
  @Input() set disabled(s: string|boolean) {
    this._disabled = (s == true || s == 'true' || s == 'disabled' || s === '');
  };
  get disabled(): boolean {
    return this._disabled;
  };
  @Input() formGroup!: FormGroup;
  @Input() formControl: FormControl = new FormControl('', []);

  @ViewChild(MatRadioGroup) buttonGroup!: MatRadioGroup;
  @ContentChildren(XyRadioComponent) radios!: QueryList<XyRadioComponent>;
  @ContentChildren(XyErrorComponent) errors!: QueryList<XyErrorComponent>;

  private _onTouchedCallback: () => void = () => {};
  private _onChangeCallback: (_: any) => void = () => {};

  constructor(public fb : FormBuilder) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let control: any;
    if (this.formGroup) {
      control = <FormControl>this.formGroup.get(this.name);
    } else if (this.formControl) {
      control = this.formControl;
    }
    if (control == null) {
      this.formControl = new FormControl('', []);
    }
    if (this.required) {
      this.formControl.addValidators(Validators.required);
    }
    if (this.radios) {
      for (const radio of this.radios) {
        radio.group = this;
      }
    }
  }

  @Input() set color(c: string) {
    if (c == 'primary' || c == 'accent') {
      this._color = c;
    } else if (c == 'warning') {
      this._color = 'warn';
    } else {
      this._color = 'primary';
    }
  }

  get color(): any {
    return this._color;
  }

  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  writeValue(obj: any): void {
    if (this.radios) {
      for (const radio of this.radios) {
        if (radio.value == obj) {
          radio.checked = true;
        } else {
          radio.checked = false;
        }
      }
    }
  }

  onChange($event: MatRadioChange) {
    if (this.formGroup) {
      const control:FormControl = <FormControl>this.formGroup.get(this.name);
      if (control) {
        control.setValue($event.value);
      }
    } else if (this.formControl) {
      this.formControl.setValue($event.value);
    }
  }
}
