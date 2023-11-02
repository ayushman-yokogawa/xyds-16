import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xy-chips-list',
  template: `
  <mat-chip-row aria-label="Fish selection">
    <ng-content></ng-content>
  </mat-chip-row>
  `,
})
export class XyChipsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
