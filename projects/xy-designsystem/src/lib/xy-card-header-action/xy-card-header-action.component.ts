import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xy-card-header-action',
  template: `<ng-content></ng-content>`,
})
export class XyCardHeaderActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
