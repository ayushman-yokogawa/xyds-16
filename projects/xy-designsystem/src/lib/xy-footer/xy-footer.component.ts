import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "xy-footer",
  template: `
   <footer class="xy-footer">
      <div class="col-left">
          <a class="link" href="{{link}}" [target]="target"><h5 class="title" *ngIf="!logo">{{title}}</h5></a>
          <a class="link" href="{{link}}"  [target]="target"><img src="{{logo}}" alt="" *ngIf="!title" class="logo"></a>
          <div><ng-content></ng-content></div>
      </div>
      <div class="conteWnt">
          <p class="content">{{content}}</p>
      </div>
   </footer>
  `,
  styleUrls: ["./xy-footer.component.scss"],
})
export class XyFooterComponent implements OnInit {
  @Input() title: any;
  @Input() content: any;
  @Input() logo!: string;
  @Input() link!: string;
  @Input() target!: string;
  constructor() {}

  ngOnInit(): void {}
}
