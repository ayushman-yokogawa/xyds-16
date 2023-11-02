import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'xy-sidenav-item',
  templateUrl: './xy-sidenav-item.component.html',
  styleUrls: ['./xy-sidenav-item.component.scss']
})
export class XySidenavItemComponent implements OnInit {
  @Input() closeByClick!: boolean;
  @Input() icon!: string;
  @Input() name!: string;
  @Input('right-icon') rightIcon!: string;
  @Input('right-icon2') rightIcon2!: string;
  @Input('click-right') clickRight?: Function;
  @Input('click-right2') clickRight2?: Function;
  @Input() routerLink: any;
  @Input() class: any;
  @Input() routerLinkActive: any;
  @Output() clickRightEvent = new EventEmitter<MouseEvent>();
  @Output() clickRight2Event = new EventEmitter<MouseEvent>();

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }
 

  onClickRight($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.clickRightEvent.emit($event);
  }

  onClickRight2($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.clickRight2Event.emit($event);
  }
}
