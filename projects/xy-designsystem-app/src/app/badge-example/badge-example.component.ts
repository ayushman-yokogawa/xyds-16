import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-badge-example',
  templateUrl: './badge-example.component.html',
  styleUrls: ['./badge-example.component.scss']
})
export class BadgeExampleComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  hidden = true;

  toggleBadgeVisibility($event: MouseEvent, name: string) {
    this.hidden = !this.hidden;
  }

}
