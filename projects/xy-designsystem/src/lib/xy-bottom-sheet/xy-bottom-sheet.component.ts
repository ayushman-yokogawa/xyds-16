import { Component, Inject, Input, OnInit } from "@angular/core";
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from "@angular/material/bottom-sheet";

@Component({
  selector: "xy-bottom-sheet",
  templateUrl: "./xy-bottom-sheet.component.html",
  styleUrls: ["./xy-bottom-sheet.component.scss"],
})
export class XyBottomSheetComponent implements OnInit {
  @Input() title: any;

  ngOnInit(): void {}
  constructor(
    private bottomSheet: MatBottomSheetRef,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}
}
