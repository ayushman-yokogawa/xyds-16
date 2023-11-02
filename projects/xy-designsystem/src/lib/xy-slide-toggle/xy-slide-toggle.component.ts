import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';

import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {XyErrorComponent} from "../xy-error/xy-error.component";
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'xy-slide-toggle',
  templateUrl: './xy-slide-toggle.component.html',
  styleUrls: ['./xy-slide-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => XySlideToggleComponent),
      multi: true
    }
  ]
})
export class XySlideToggleComponent implements ControlValueAccessor{
  @Input() color: any | 'accent' | 'critical' | 'error' | 'warning' | 'attention' | 'safe_normal' = 'accent';
  @Input() label!: string;
  @Input() disabled!: boolean;
  @Input() checked!: boolean;
  @Input() name!: string;
  @Input() id!: string;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() error!: string;
  control: FormControl = new FormControl();
  @Output() checkedChange = new EventEmitter<boolean>();

  toggleChecked(event: MatSlideToggleChange): void {
    this.checked = event.checked;
    this.control.setValue(this.checked);
    this.onChange(this.checked);
    this.onTouched();
    this.change.emit(this.checked);
  }

  private onChange!: (value: any) => void;
  private onTouched!: () => void;

  writeValue(value: any): void {
    this.checked = value;
    this.control.setValue(value, { emitEvent: true });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
