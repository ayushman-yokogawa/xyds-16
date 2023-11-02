import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'xy-divider',
  templateUrl: './xy-divider.component.html',
  styleUrls: ['./xy-divider.component.scss']
})
export class XyDividerComponent implements OnInit {
  @Input() inset!: boolean;
  @Input() vertical!: boolean
  constructor() { }

  ngOnInit(): void {
  }

}
