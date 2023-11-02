import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "xy-tab",
  templateUrl: "./xy-tab.component.html",
  styleUrls: ["./xy-tab.component.scss"],
})
export class XyTabComponent implements OnInit, AfterViewInit {
  @Input() label!: string;
  @Input() active = false;
  @Input() icon!: string;
  @Input() hide!: boolean;
  @Input() controls!: boolean;
  @Output() myEvent = new EventEmitter();
  _disabled: boolean = false;
  elementRef: any;
  @Input() set disabled(s: string | boolean) {
    this._disabled = s == true || s == "true" || s == "disabled" || s === "";
  }
  get disabled(): boolean {
    return this._disabled;
  }

  @Input() CustomElement!: TemplateRef<any>;
  CustomEle!: TemplateRef<any>;

  @Input("aria-label") ariaLabel!: string;
  @Input("aria-labelledby") ariaLabelledby!: string;

  content!: any;

  constructor(private element: ElementRef) {}

  preTab() {
    this.hide = !this.hide;
  }

  ngOnInit(): void {
    this.CustomEle = this.CustomElement;
  }

  ngAfterViewInit(): void {
    const self = this;
    self.content = self.element.nativeElement.innerHTML;
  }
}