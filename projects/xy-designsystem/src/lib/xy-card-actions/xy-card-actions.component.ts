import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xy-card-actions',
  template: `<ng-content></ng-content>`,
})
export class XyCardActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
