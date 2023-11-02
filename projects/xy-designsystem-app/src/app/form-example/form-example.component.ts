import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})

export class FormExampleComponent {
  dwellingValues!: FormGroup;

  public get inputControl(): FormControl {
    return this.dwellingValues.get('inputControl') as FormControl;
  }
  public get textControl(): FormControl {
    return this.dwellingValues.get('textControl') as FormControl;
  } 
  public get slideToggleControl(): FormControl {
    return this.dwellingValues.get('slideToggleControl') as FormControl;
  }
  public get checkboxControl1(): FormControl {
    return this.dwellingValues.get('checkboxControl1') as FormControl;
  }
  public get checkboxControl2(): FormControl {
    return this.dwellingValues.get('checkboxControl2') as FormControl;
  } 
  
  public get autoCompleteControl(): FormControl {
    return this.dwellingValues.get('autoCompleteControl') as FormControl;
  } 
  
  public get datePickerControl(): FormControl {
    return this.dwellingValues.get('datePickerControl') as FormControl;
  }  
  searchKeyword: string = '';
  onReset() {
    console.log("Reset")
    this.searchKeyword = ''; 
  }
  radioControl = new FormControl('', [Validators.required]);
  selectControl = new FormControl('', [Validators.required]);
  searchControl = new FormControl('', [Validators.required]);
  constructor(private fb: FormBuilder) {}
  array: any = []
  ngOnInit() {
    this.dwellingValues = this.fb.group({
      selectControl: new FormControl('', [Validators.required]),
      inputControl: new FormControl(''),
      textControl: new FormControl(''),
      searchControl: new FormControl(''),
      slideToggleControl: new FormControl(''),
      checkboxControl1: new FormControl(''),
      checkboxControl2: new FormControl(''),
      radioControl: new FormControl(''),
      autoCompleteControl: new FormControl(''),
      datePickerControl: new FormControl(''),
    });

    this.array = [
      {
        icon: '',
        value: 'Value 1',
        disabled: false,
        displayName: 'Options 1' ,
        id: "1",
      },
      {
        icon: '',
        value: 'Value 2',
        disabled: false,
        displayName: 'Options 2',
        id: "1",
      },
      {
        icon: '',
        value: 'Value 3',
        disabled: false,
        displayName: 'Options 2',
        id: "1",
      },
    ];
  }
  onSetvalue(){
    this.dwellingValues.patchValue({
      inputControl: "",
      textControl: "para graph",
      checkboxControl1: true,
      checkboxControl2: true,
    });
   }
   reset(){
    console.log("data");
   }
 
  onSubmit() {
    this.dwellingValues.reset();
    console.log(this.dwellingValues.getRawValue()); 
  }
}
