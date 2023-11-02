import { Component, OnInit } from '@angular/core';
import {MatLegacyOptionSelectionChange as MatOptionSelectionChange} from "@angular/material/legacy-core";

@Component({
  selector: 'app-container-example',
  templateUrl: './container-example.component.html',
  styleUrls: ['./container-example.component.scss']
})
export class ContainerExampleComponent implements OnInit {

  direction: any = 'horizontal';
  align: any = 'left';
  valign: any = 'top';
  spacing: any = 'm';
  wrap: any = 'nowrap';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeDirection(event: MatOptionSelectionChange) {
    this.direction = event.source.value;
  }

  onChangeAlign(event: MatOptionSelectionChange) {
    this.align = event.source.value;
  }

  onChangeVerticalAlign(event: MatOptionSelectionChange) {
    this.valign = event.source.value;
  }

  onChangeSpacing(event: MatOptionSelectionChange) {
    this.spacing = event.source.value;
  }

  onChangeWrap(event: MatOptionSelectionChange) {
    this.wrap = event.source.value;
  }
}
