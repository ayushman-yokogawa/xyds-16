import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class XyColumnComponent {
    constructor() {
        this.column = 1;
    }
    ngOnInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyColumnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: XyColumnComponent, selector: "xy-column", inputs: { column: "column" }, ngImport: i0, template: `
  <ng-template #content>
  <ng-content></ng-content>
</ng-template>
<div *ngIf="column == 1" class="one-column">
  <ng-container *ngTemplateOutlet="content"></ng-container>
</div>
<div *ngIf="column == 2" class="two-columns">
  <ng-container *ngTemplateOutlet="content"></ng-container>
</div>
<div *ngIf="column == 3" class="three-columns">
  <ng-container *ngTemplateOutlet="content"></ng-container>
</div>

  `, isInline: true, styles: [":host ::ng-deep>xy-input mat-mdc-form-field{display:block;width:100%}:host .one-column{display:flex;justify-content:flex-start;flex-direction:column}:host .one-column ::ng-deep>*{display:block;width:100%}:host .two-columns{display:flex;justify-content:space-between;flex-direction:row;flex-wrap:wrap}:host .two-columns ::ng-deep>*{display:block;width:calc(50% - 12px)}:host .three-columns{display:flex;justify-content:space-between;flex-direction:row;flex-wrap:wrap}:host .three-columns ::ng-deep>*{display:block;width:calc((100% - 48px) / 3)}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: "xy-column", template: `
  <ng-template #content>
  <ng-content></ng-content>
</ng-template>
<div *ngIf="column == 1" class="one-column">
  <ng-container *ngTemplateOutlet="content"></ng-container>
</div>
<div *ngIf="column == 2" class="two-columns">
  <ng-container *ngTemplateOutlet="content"></ng-container>
</div>
<div *ngIf="column == 3" class="three-columns">
  <ng-container *ngTemplateOutlet="content"></ng-container>
</div>

  `, styles: [":host ::ng-deep>xy-input mat-mdc-form-field{display:block;width:100%}:host .one-column{display:flex;justify-content:flex-start;flex-direction:column}:host .one-column ::ng-deep>*{display:block;width:100%}:host .two-columns{display:flex;justify-content:space-between;flex-direction:row;flex-wrap:wrap}:host .two-columns ::ng-deep>*{display:block;width:calc(50% - 12px)}:host .three-columns{display:flex;justify-content:space-between;flex-direction:row;flex-wrap:wrap}:host .three-columns ::ng-deep>*{display:block;width:calc((100% - 48px) / 3)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { column: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LWNvbHVtbi94eS1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFxQnpELE1BQU0sT0FBTyxpQkFBaUI7SUFHNUI7UUFGUyxXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBRWIsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQzs4R0FMUixpQkFBaUI7a0dBQWpCLGlCQUFpQiwrRUFqQmxCOzs7Ozs7Ozs7Ozs7OztHQWNUOzsyRkFHVSxpQkFBaUI7a0JBbkI3QixTQUFTOytCQUNFLFdBQVcsWUFDWDs7Ozs7Ozs7Ozs7Ozs7R0FjVDswRUFJUSxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwieHktY29sdW1uXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bmctdGVtcGxhdGUgI2NvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLXRlbXBsYXRlPlxyXG48ZGl2ICpuZ0lmPVwiY29sdW1uID09IDFcIiBjbGFzcz1cIm9uZS1jb2x1bW5cIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPGRpdiAqbmdJZj1cImNvbHVtbiA9PSAyXCIgY2xhc3M9XCJ0d28tY29sdW1uc1wiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwiY29sdW1uID09IDNcIiBjbGFzcz1cInRocmVlLWNvbHVtbnNcIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuXHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFtcIi4veHktY29sdW1uLmNvbXBvbmVudC5zY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgWHlDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNvbHVtbjogbnVtYmVyID0gMTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcbn1cclxuIl19