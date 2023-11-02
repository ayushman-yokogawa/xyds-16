import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-example',
  templateUrl: './breadcrumb-example.component.html',
  styleUrls: ['./breadcrumb-example.component.scss']
})
export class BreadcrumbExampleComponent implements OnInit {
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }

}
