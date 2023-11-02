import {
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "xy-expension-panel",
  templateUrl: "./xy-expension-panel.component.html",
  styleUrls: ["./xy-expension-panel.component.scss"],
})
export class XyExpensionPanelComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() theme!: "primary" | "critical";
  @Input() icon!: string;
  @Input() disabled!: boolean;
  @Input() signalIconDefault: string = "keyboard_arrow_down;";
  @Input() signalIconAction: string = "keyboard_arrow_up";
  @Input() noIcon!: boolean;

  color: string = "#000011";

  panelOpenState!: boolean;

  constructor(private host: ElementRef<any>) {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if ("theme" in changes) {
      this.color = this.theme === "primary" ? "#000011" : "#110000";
      this.host.nativeElement.style.setProperty(`--color`, this.color);
    }
  }
}
