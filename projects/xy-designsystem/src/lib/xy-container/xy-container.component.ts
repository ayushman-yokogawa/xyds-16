import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "xy-container",
  templateUrl: "./xy-container.component.html",
  styleUrls: ["./xy-container.component.scss"],
})
export class XyContainerComponent implements OnInit {
  @Input() direction: "horizontal" | "vertical" = "horizontal";
  @Input() align: "center" | "left" | "right" | "justify" = "left";
  @Input() valign: "middle" | "top" | "bottom" | "justify" = "top";
  @Input() spacing: "xss" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl" =
    "m";
  @Input() wrap: "wrap" | "nowrap" = "nowrap";

  constructor() {}

  ngOnInit(): void {}

  styleClass() {
    let classes = [];
    if (this.direction) {
      classes.push("xy-" + this.direction);
    }
    if (this.align == "left") {
      classes.push("xy-left");
    } else if (this.align == "center") {
      classes.push("xy-center");
    } else if (this.align == "right") {
      classes.push("xy-right");
    } else if (this.align == "justify") {
      classes.push("xy-justify");
    }
    if (this.valign == "top") {
      classes.push("xy-vertical-top");
    } else if (this.valign == "middle") {
      classes.push("xy-vertical-center");
    } else if (this.valign == "bottom") {
      classes.push("xy-vertical-bottom");
    } else if (this.valign == "justify") {
      classes.push("xy-vertical-justify");
    }
    if (this.spacing) {
      classes.push("xy-spacing-" + this.spacing);
    }
    if (this.wrap) {
      classes.push("xy-" + this.wrap);
    }
    return classes.join(" ");
  }
}
