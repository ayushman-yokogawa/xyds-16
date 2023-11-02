import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss']
})

export class SelectExampleComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  DATASOURCE: any = [
    {
      icon: '',
      value: 'All Notifications',
      disabled: false,
      content: 'All Notifications',
    },
    {
      icon: '',
      value: 'Battery Low (disabled)',
      disabled: true,
      content: 'Battery Low (disabled)',
    },
    {
      icon: '',
      value: 'Signal Shift Detected',
      disabled: false,
      content: 'Signal Shift Detected',
    },
    {
      icon: '',
      value: 'Inactive',
      disabled: false,
      content: 'Inactive',
    },
  ];


  array: any = [
    {
      icon: '',
      value: 'All Notifications',
      disabled: false,
      content: 'All Notifications',
    },
    {
      icon: '',
      value: 'Battery Low (disabled)',
      disabled: true,
      content: 'Battery Low (disabled)',
    },
    {
      icon: '',
      value: 'Signal Shift Detected',
      disabled: false,
      content: 'Signal Shift Detected',
    },
  ];

  formControl: FormControl = new FormControl('', [Validators.required]);

  // onChange(element: any){
  //     console.log(element);
  // }

  constructor() { }

  ngOnInit(): void {
  }

  
  select: null | undefined

  selectControl: FormControl = new FormControl('', [Validators.required]);

  onSelect(element : any) {  
    //this.selectControl.markAllAsTouched();
    //this.select = this.selectControl.value;
    console.log(element);
  }

}
