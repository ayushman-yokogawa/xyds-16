import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { MatBadgeSize } from "@angular/material/badge";
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: "xy-badge",
  template: `<ng-content></ng-content>`,
  styleUrls: ["./xy-badge.component.scss"],
})
export class XyBadgeComponent implements OnInit {
  @Input("matBadge") matBadge: string | number | undefined | null;
  @Input("matBadgeSize") size?: "small" | "medium" | "large";

  content: any;
  class: any;
  mode: any;

  constructor() {}
  ngOnInit(): void {}
}
