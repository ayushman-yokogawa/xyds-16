import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatLegacyAutocomplete as MatAutocomplete } from '@angular/material/legacy-autocomplete';

@Component({
  selector: 'lib-autocomplet-example',
  templateUrl: './autocomplet-example.component.html',
  styleUrls: ['./autocomplet-example.component.scss']
})
export class AutocompletExampleComponent implements OnInit {
  data : any
  
  countries = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'San Antonio'
  ];

  disabled:boolean=   true
  changeState(){
    this.disabled = !this.disabled;
  }

  selectedValue!: string;

  handleSelectedValue(value: any): void {
    this.selectedValue = value;
  }

  dwellingValues!: FormGroup;
  ngOnInit(): void {
    this.dwellingValues = this.fb.group({
      inputAutocompleteControl: new FormControl(''),
      searchAutocompleteControl: new FormControl(''),
      searchAutocompleteDsabledControl: new FormControl('Chicago'),
    });

  }

  onSubmit() {
    console.log(this.dwellingValues.getRawValue()); 
  }
  constructor(private fb: FormBuilder) {}
}
