import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'xy-sidenav-content',
  templateUrl: './xy-sidenav-content.component.html',
  styleUrls: ['./xy-sidenav-content.component.scss']
})
export class XySidenavContentComponent implements OnInit {
  @Input() closeByClick!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
