import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList,
} from "@angular/core";
import { XyButtonToggleComponent } from "./xy-button-toggle.component";
import { MatButtonToggleChange } from "@angular/material/button-toggle";
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from "@angular/forms";
import { XyErrorComponent } from "../xy-error/xy-error.component";

interface XyButtonToggleItem {
  content: string;
  value: string;
  icon: string;
  _disabled: boolean;
}

@Component({
  selector: "xy-button-toggle-group",
  templateUrl: "./xy-button-toggle-group.component.html",
  styleUrls: ["./xy-button-toggle-group.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => XyButtonToggleGroupComponent),
    },
  ],
})
export class XyButtonToggleGroupComponent
  implements OnInit, AfterContentInit, ControlValueAccessor
{
  @Input() id!: string;
  @Input() name!: string;

  _value!: any;
  @Input()
  set value(obj: any) {
    if (this._value !== obj) {
      this._value = obj;
      this.onChangeCallback(obj);
    }
  }

  @ContentChildren(XyErrorComponent) errors!: QueryList<XyErrorComponent>;

  _multiple: boolean = false;
  @Input() set multiple(s: string | boolean) {
    this._multiple = s == true || s == "true" || s == "multiple" || s === "";
  }
  get multiple(): boolean {
    return this._multiple;
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

  @Input() formGroup!: FormGroup;
  @Input() formControl!: FormControl;
  @Input() tabindex?: number;

  dataSource: Array<XyButtonToggleItem> = new Array<XyButtonToggleItem>();
  @ContentChildren(XyButtonToggleComponent)
  buttons!: QueryList<XyButtonToggleComponent>;

  @Output() change: EventEmitter<MatButtonToggleChange> =
    new EventEmitter<MatButtonToggleChange>();

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
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
    setTimeout(function () {
      self.dataSource = [];
      if (self.buttons) {
        for (const button of self.buttons) {
          self.dataSource.push({
            content: button.content,
            value: button.value,
            icon: button.icon,
            _disabled: button._disabled,
          });
        }
      }
    }, 200);
  }

  public changed!: (value: string) => void;
  public touched!: (value: string) => void;
  public isDisabled!: Boolean;

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public onChanged(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;

    this.changed(value);
  }
  public writeValue(value: any): void {
    this.value = value;
  }
  onChange($event: MatButtonToggleChange) {
    if (this.formGroup) {
      const control: FormControl = <FormControl>this.formGroup.get(this.name);
      if (control) {
        control.setValue($event.value);
      }
    } else if (this.formControl) {
      this.formControl.setValue($event.value);
    }
    this.change.emit($event);
  }
}
