import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'xy-option',
  templateUrl: './xy-option.component.html',
  styleUrls: ['./xy-option.component.scss']
})
export class XyOptionComponent implements OnInit {

  @Input() value!: string;
  @Input() icon!: string;
  @Input() displayName!: string;
  @Input() id!: string;
  content: any;
  _disabled: boolean = false;
  @Input() set disabled(s: boolean|string) {
    this._disabled = (s == true || s == 'true' || s == 'disabled' || s === '');
  }
  get disabled(): boolean {
    return this._disabled;
  }
 

  constructor(private elementRef: ElementRef, private http: HttpClient) { }
  
  ngOnInit(): void {
    this.content = this.elementRef.nativeElement.innerHTML;
  }

}
