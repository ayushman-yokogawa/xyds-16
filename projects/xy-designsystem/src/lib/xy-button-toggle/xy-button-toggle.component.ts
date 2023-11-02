import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "xy-button-toggle",
  templateUrl: "./xy-button-toggle.component.html",
  styleUrls: ["./xy-button-toggle.component.scss"],
})
export class XyButtonToggleComponent implements OnInit, AfterViewInit {
  content: string = "";
  @ViewChild("contentWrapper") contentWrapper!: ElementRef;

  @Input() value!: string;
  @Input() icon!: string;

  _disabled: boolean = false;
  @Input() set disabled(s: string | boolean) {
    this._disabled = s == true || s == "true" || s == "disabled" || s === "";
  }
  get disabled(): boolean {
    return this._disabled;
  }

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.content = this.contentWrapper.nativeElement.innerHTML;
  }
}
