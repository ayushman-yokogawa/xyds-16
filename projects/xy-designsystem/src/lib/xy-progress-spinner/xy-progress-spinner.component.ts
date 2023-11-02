import { Component, Input } from '@angular/core';

@Component({
  selector: 'xy-progress-spinner',
  templateUrl: './xy-progress-spinner.component.html',
  styleUrls: ['./xy-progress-spinner.component.scss']
})
export class XyProgressSpinnerComponent  {

  @Input() value!: number | string;
  @Input() mode: any;
  @Input() color: any |  'accent' | 'critical' | 'error' | 'warning' | 'attention' | 'safe_normal' = 'accent';
  @Input() type!: String;

}
