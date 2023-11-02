import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child1-example',
  templateUrl: './child1-example.component.html',
  styleUrls: ['./child1-example.component.scss']
})
export class Child1ExampleComponent implements OnInit {
  constructor(private router:Router,public route: ActivatedRoute) { }
  
  ngOnInit(): void {
  }

  btnClick(){
    this.router.navigate(['breadcrumb/child1','child2']);
  }
}
