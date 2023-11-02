import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'xy-slider',
  templateUrl: './xy-slider.component.html',
  styleUrls: ['./xy-slider.component.scss']
})
export class XySliderComponent implements OnInit {

  @Input() min?: string;
  @Input() max?: string;
  @Input() value?: string;
  @Input() disabled?: boolean;
  @Input() label?: string;
  @Input() discrete?: boolean;

 
  @Input() color: 'accent' | 'critical' | 'error' | 'warning' | 'attention' | 'safe_normal' = 'accent';
  
 
  constructor() { }

  ngOnInit(): void {
  }
  

}
