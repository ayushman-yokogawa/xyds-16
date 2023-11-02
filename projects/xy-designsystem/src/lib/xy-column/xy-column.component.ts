import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "xy-column",
  template: `
  <ng-template #content>
  <ng-content></ng-content>
</ng-template>
<div *ngIf="column == 1" class="one-column">
  <ng-container *ngTemplateOutlet="content"></ng-container>
</div>
<div *ngIf="column == 2" class="two-columns">
  <ng-container *ngTemplateOutlet="content"></ng-container>
</div>
<div *ngIf="column == 3" class="three-columns">
  <ng-container *ngTemplateOutlet="content"></ng-container>
</div>

  `,
  styleUrls: ["./xy-column.component.scss"],
})
export class XyColumnComponent implements OnInit {
  @Input() column: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
