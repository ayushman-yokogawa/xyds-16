import { Component, Input } from '@angular/core';

@Component({
  selector: 'xy-progressbar',
  templateUrl: './xy-progressbar.component.html',
  styleUrls: ['./xy-progressbar.component.scss']
})
export class XyProgressbarComponent  {
  @Input() mode:any;
  @Input() color: any | 'accent' | 'critical' | 'error' | 'warning' | 'attention' | 'safe_normal' = 'accent';
  @Input() value!: number | string;
  @Input() label?: string;
  @Input() help!: string;
  constructor(){}
  ngOnInit(): void {
  }
}
