import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatLegacyNavList as MatNavList } from '@angular/material/legacy-list';

@Component({
  selector: 'xy-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.scss']
})
export class CustomSidenavComponent implements OnInit {

  constructor(private host: ElementRef<any>) { }

  ngOnInit(): void {
  }
  @Input() items!: any[];
  @Input() noCustomIcon!: boolean;
  panelOpenState!: boolean;
  @ViewChild('sidenav') sidenav!: MatNavList;
   
  
}
