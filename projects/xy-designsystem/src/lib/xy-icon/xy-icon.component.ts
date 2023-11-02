import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'xy-icon',
  template:  `
  <ng-container *ngIf="content == 'Test-svg'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a{fill:#bbb;}</style></defs><path class="a" d="M3,6H1V1H6V3H3Zm7-5V3h3V6h2V1ZM3,10H1v5H6V13H3Zm10,3H10v2h5V10H13ZM11,9V7H9V5H7V7H5V9H7v2H9V9Z"/></svg></ng-container>
  <ng-container *ngIf="content == 'Test-png'"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAApElEQVRYhWP8//8/A6lg/uZLWDUl+uoxkmoWE8m2UxkMuAMwomD+5ksOUKYBAwODAAMDgwIUg9j6RJp7kYGB4QMDA8MDKAaxLzBAoukAskIWLJr3k+kZZABzqD0WOZR0MpoGBl8ipDcY8BDAlgvAAFdpRy7AVUqOJkKiHdBVFg7G5IhRxQG0AqMOGHXAqANGHTDqgFEHjDoAZ6N0tElGF8DAwAAAy1srbTa8znMAAAAASUVORK5CYII=" /></ng-container>
  <ng-container *ngIf="content == 'Test-css'"><div [className]="content"></div></ng-container>
  <ng-container *ngIf="content == 'pacman'"><div class="icon-pacman"></div></ng-container>
  <div #contentWrapper><ng-content></ng-content></div>`,
  styleUrls: ['./xy-icon.component.scss']
})
export class XyIconComponent implements OnInit, AfterViewInit {

  content: string = '';
  @ViewChild('contentWrapper') contentWrapper!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const self = this;
    setTimeout(function () {
      self.content = self.contentWrapper.nativeElement.textContent;
      self.contentWrapper.nativeElement.remove();
    }, 100);
  }

}
