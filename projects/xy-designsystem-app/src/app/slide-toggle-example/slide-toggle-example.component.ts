import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatLegacySlideToggle as MatSlideToggle, MatLegacySlideToggleChange as MatSlideToggleChange} from "@angular/material/legacy-slide-toggle";

@Component({
  selector: 'app-slide-toggle-example',
  templateUrl: './slide-toggle-example.component.html',
  styleUrls: ['./slide-toggle-example.component.scss']
})
export class SlideToggleExampleComponent implements OnInit {
  
  dwellingValues!: FormGroup;

  constructor(private fb: FormBuilder) { }

  toggleControl: FormControl = new FormControl(true);

  ngOnInit(): void {
    this.dwellingValues = this.fb.group({
      toggleControl: new FormControl(''),
      toggleControl2: new FormControl(''),
    });
  }

  handleToggleChange(checked: boolean): void {
    console.log('Toggle changed:', checked);
  }

  onSubmit() {
    console.log(this.dwellingValues.getRawValue());
  }

}
