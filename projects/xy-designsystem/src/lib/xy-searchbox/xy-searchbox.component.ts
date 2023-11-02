import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatLegacyLabel as MatLabel } from "@angular/material/legacy-form-field";
import { MatLegacyInput as MatInput } from "@angular/material/legacy-input";
import { XyHintComponent } from "../xy-hint/xy-hint.component";
import { XyErrorComponent } from "../xy-error/xy-error.component";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => XySearchboxComponent),
  multi: true
};

@Component({
  selector: 'xy-searchbox',
  templateUrl: './xy-searchbox.component.html',
  styleUrls: ['./xy-searchbox.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class XySearchboxComponent implements AfterViewInit, ControlValueAccessor {

  @Input() placeholder: string = 'Search';
  @Input() formControl: FormControl = new FormControl('');
  @Input() errorStateMatcher!: ErrorStateMatcher;
  @Output() search: EventEmitter<{value:string}> = new EventEmitter<{value:string}>();
  @Input() searchControl!: FormControl;
  @Input() autocomplete!: string;
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();
  _disabled: boolean = false;
  @Input() set disabled(s: string | boolean) {
    this._disabled = (s == true || s == 'true' || s == 'disabled' || s === '');
    if (this.textInput) {
      this.textInput.nativeElement.disabled = this._disabled;
    }
  };
  get disabled(): boolean {
    return this._disabled;
  };

  _incrementalSearch: boolean = false;
  @Input('incremental-search') set incrementalSearch(v: boolean | string) {
    if (v === true || v === 'true' || v === '') {
      this._incrementalSearch = true;
    } else {
      this._incrementalSearch = false;
    }
  }
  get incrementalSearch(): boolean {
    return this._incrementalSearch;
  };
  searched: boolean = false;
  hasError: boolean = false;
  public changed: (value: string) => void = () => {};

  @ViewChild(MatLabel) matLabel!: MatLabel;
  @ViewChild(MatInput) input!: MatInput;
  @ViewChild('textInput') textInput!: ElementRef;
  @ContentChild(XyHintComponent) hint!: XyHintComponent;

  @ContentChildren(XyErrorComponent) errors!: QueryList<XyErrorComponent>;
  private _onTouchedCallback: () => void = () => { };
  private _onChangeCallback: (_: any) => void = () => { };

  constructor() { }

  ngAfterViewInit(): void {
    if (this.textInput) {
      this.textInput.nativeElement.disabled = this._disabled;
    }
  }

  @Input() set value(v: string) {
    if (this.input) {
      this.input.value = v;
      this.searched = false;
      this._onChangeCallback(v); // Notify Angular forms about the value change
    }
  }

  get value(): string {
    if (this.input) {
      return this.input.value;
    }
    return '';
  }

  focus(options?: FocusOptions): void {
    if (this.textInput) {
      this.textInput.nativeElement.focus(options);
    }
  }

  blur(): void {
    if (this.textInput && this.value.trim() !== '') {
      this.textInput.nativeElement.blur();
    }
  }

  updateErrorState(): void {
    if (this.input) {
      this.input.updateErrorState();
    }
  }

  writeValue(value: any): void {
    if (this.input) {
      this.input.value = value || '';
      this.searched = false;
    }
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
    this._onChangeCallback = fn;
  }
 

  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.textInput.nativeElement.disabled = isDisabled;
  }

  onChanged(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }
  
  onChange($event: Event) {
    this.hasError = this.input.errorState;
    if (!this.hasError) {
      this.doSearch();
    }
  }

  onFocus($event: FocusEvent) {
  }

  onBlur($event: FocusEvent) {
    const clickedElement = $event.relatedTarget as HTMLElement;
    const isSearchButton = clickedElement?.classList.contains('xy-searchbox-search-button');
    const isClearButton = clickedElement?.classList.contains('xy-searchbox-clear-button');

    if (!isSearchButton && !isClearButton) {
      const self = this;
      setTimeout(function () {
        if (!self.searched && self.value.trim() === '') {
          self.hasError = self.input.errorState;
          if (!self.hasError) {
            self.doReset();
          }
        }
      }, 200);
    }
  }


  onKeyUp($event: KeyboardEvent) {
    if (this._incrementalSearch) {
      if (this.value != null && this.value.trim() !== '' || this.value !== '') {
        $event.stopPropagation();
        this.doSearch();
        this.searched = true;
      } else {
        this.doReset();
        this.searched = false;
      }
    } else {
      if (($event.code === 'Backspace' || $event.code === 'Delete' || this.value == '') && this.value.trim() === '') {
        this.doReset();
        this.searched = false;
      } else if (($event.code === 'Enter' || $event.code === 'NumpadEnter') && this.value.trim() !== '') {
        $event.preventDefault(); 
        this.doSearch();
        this.searched = true;
      }
    }
  
    if (this.value.trim() === '') {
      this.reset.emit();
    }
  }
  
  
  
  onClickSearch($event: MouseEvent) {
    if (this.search != null) {
      this.doSearch();
    }
  }

  onClickClear($event: MouseEvent) {
    this.doReset();
  }

  doReset() {
    if (this.value.trim() !== '') {
      this.value = '';
      this.reset.emit(); 
    }
  }

  doSearch() {
    if (this.value != null && this.value.trim() !== '') {
      if (this.search != null) {
        this.searched = true;
        this.search.emit({ value: this.value.trim() });
      }
    }
  }

  styleClass(): string {
    let styles: string[] = [];
    if (this._disabled) {
      styles.push('xy-searchbox-disabled');
    }
    return styles.join(' ');
  }
}
