import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  forwardRef,
} from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
import { XyErrorComponent } from "../xy-error/xy-error.component";
import { XyHintComponent } from "../xy-hint/xy-hint.component";


@Component({
  selector: "xy-autocomplete",
  templateUrl: "./xy-autocomplete.component.html",
  styleUrls: ["./xy-autocomplete.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => XyAutocompleteComponent),
      multi: true,
    },
  ],
})
export class XyAutocompleteComponent implements ControlValueAccessor {
  @Input() options: string[] = [];
  @Input() placeholder: string = "Search";
  @Input() errorMessage!: string;
  @Input() inputAutocomplete!: boolean;
  @Input() disabled!: boolean;
  @Input() searchAutocomplete!: boolean;
  @Output() selected = new EventEmitter<string>();
  private isDisabled: boolean = false;
  autoCompleteControl = new FormControl("", Validators.required);
  filteredOptions: Observable<string[]>;
  public onChange!: (value: any) => void;
  private onTouched!: () => void;
  searched: boolean = false;
  @Output() search: EventEmitter<{ value: string }> = new EventEmitter<{
    value: string;
  }>();
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();
  @ContentChild(XyHintComponent) hint!: XyHintComponent;
  value!: string;
  input: any;
  constructor() {
    this.filteredOptions = this.autoCompleteControl.valueChanges.pipe(
      startWith(""),
      map((value) => this.filterOptions(value))
    );
  }

  ngOnInit() {
    this.disabled = this.disabled;
    if (this.disabled) {
      this.autoCompleteControl.disable();
    } else {
      this.autoCompleteControl.enable();
    }
  }

  filterOptions(value: any): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  optionSelected(option: string): void {
    this.selected.emit(option);
    this.onChange(option);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.autoCompleteControl.setValue(value);
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.autoCompleteControl.disable();
    } else {
      this.autoCompleteControl.enable();
    }
  }

  hasError(): boolean {
    const control = this.autoCompleteControl;
    return control.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(): string {
    if (this.autoCompleteControl.hasError("required")) {
      return this.errorMessage;
    }
    return "";
  }

  onClickSearch($event: MouseEvent) {
    if (this.search != null) {
      this.doSearch();
    }
  }

  onClickClear($event: MouseEvent) {
    this.doReset();
  }

  _incrementalSearch: boolean = false;
  @Input("incremental-search") set incrementalSearch(v: boolean | string) {
    if (v === true || v === "true" || v === "") {
      this._incrementalSearch = true;
    } else {
      this._incrementalSearch = false;
    }
  }
  get incrementalSearch(): boolean {
    return this._incrementalSearch;
  }

  public changed!: (value: string) => void;
  @ContentChildren(XyErrorComponent) errors!: QueryList<XyErrorComponent>;
  public _onTouchedCallback: () => void = () => {};
  public _onChangeCallback: (_: any) => void = () => {};

  onKeyUp(event: any) {
    if (13 === event.which) {
      event.preventDefault();
    }
    if (this._incrementalSearch) {
      if (this.value != null && this.value.trim() != "") {
        this.doSearch();
      } else {
        this.doReset();
      }
    } else {
      if (event.code == "Enter" || event.code == "NumpadEnter") {
        this.doSearch();
      }
    }
  }

  doReset() {
    this.value = "";
    this.searched = false;
    if (this.reset != null) {
      this.reset.emit();
    }
  }

  doSearch() {
    if (this.value != null && this.value.trim() != "") {
      if (this.search != null) {
        this.searched = true;
        this.search.emit({ value: this.value.trim() });
      }
    }
  }

  styleClass(): string {
    let styles: string[] = [];

    if (this.disabled) {
      styles.push("mat-mdc-form-field-disabled");
    }

    return styles.join(" ");
  }
}
