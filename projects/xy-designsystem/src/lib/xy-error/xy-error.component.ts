import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'xy-error',
  templateUrl: './xy-error.component.html',
  styleUrls: ['./xy-error.component.scss']
})
export class XyErrorComponent implements OnInit {
  @ViewChild('content') content!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
