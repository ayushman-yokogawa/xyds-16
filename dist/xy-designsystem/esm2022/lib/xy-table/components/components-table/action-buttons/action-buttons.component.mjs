import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tableConst } from '../../consts/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/menu";
export class ActionButtonsComponent {
    constructor() {
        this.buttonAction = new EventEmitter();
    }
    ngOnInit() { }
    onEditClick() {
        this.buttonAction.emit({
            name: tableConst.actionButton.edit,
            value: this.value,
        });
    }
    onDeleteClick() {
        this.buttonAction.emit({ name: tableConst.actionButton.delete });
    }
    onViewClick() {
        this.buttonAction.emit({ name: tableConst.actionButton.view });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: ActionButtonsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: ActionButtonsComponent, selector: "[action-buttons]", inputs: { value: "value" }, outputs: { buttonAction: "buttonAction" }, ngImport: i0, template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n  <mat-icon>more_vert</mat-icon>\r\n</button>\r\n<mat-menu #menu=\"matMenu\">\r\n  <button mat-menu-item (click)=\"onDeleteClick()\">\r\n    <mat-icon>delete</mat-icon>\r\n    <span>Delete</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"onEditClick()\">\r\n    <mat-icon>edit</mat-icon>\r\n    <span>Edit</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"onViewClick()\">\r\n    <mat-icon>visibility</mat-icon>\r\n    <span>View Details</span>\r\n  </button>\r\n</mat-menu>", styles: [""], dependencies: [{ kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i3.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i3.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: ActionButtonsComponent, decorators: [{
            type: Component,
            args: [{ selector: '[action-buttons]', template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n  <mat-icon>more_vert</mat-icon>\r\n</button>\r\n<mat-menu #menu=\"matMenu\">\r\n  <button mat-menu-item (click)=\"onDeleteClick()\">\r\n    <mat-icon>delete</mat-icon>\r\n    <span>Delete</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"onEditClick()\">\r\n    <mat-icon>edit</mat-icon>\r\n    <span>Edit</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"onViewClick()\">\r\n    <mat-icon>visibility</mat-icon>\r\n    <span>View Details</span>\r\n  </button>\r\n</mat-menu>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { value: [{
                type: Input
            }], buttonAction: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJ1dHRvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktdGFibGUvY29tcG9uZW50cy9jb21wb25lbnRzLXRhYmxlL2FjdGlvbi1idXR0b25zL2FjdGlvbi1idXR0b25zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LXRhYmxlL2NvbXBvbmVudHMvY29tcG9uZW50cy10YWJsZS9hY3Rpb24tYnV0dG9ucy9hY3Rpb24tYnV0dG9ucy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTs7Ozs7QUFTL0MsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQztRQUtVLGlCQUFZLEdBQW9DLElBQUksWUFBWSxFQUFxQixDQUFBO0lBTC9FLENBQUM7SUFFakIsUUFBUSxLQUFLLENBQUM7SUFLZCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSTtZQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELGFBQWE7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs4R0FuQlUsc0JBQXNCO2tHQUF0QixzQkFBc0IsK0hDVm5DLHVsQkFnQlc7OzJGRE5FLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxrQkFBa0I7MEVBU25CLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxZQUFZO3NCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IHRhYmxlQ29uc3QgfSBmcm9tICcuLi8uLi9jb25zdHMvdGFibGUnXHJcbmltcG9ydCB7IFRhYmxlQnV0dG9uQWN0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RhYmxlQnV0dG9uQWN0aW9uJ1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2FjdGlvbi1idXR0b25zXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1idXR0b25zLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb24tYnV0dG9ucy5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25CdXR0b25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBASW5wdXQoKSB2YWx1ZSE6IGFueTtcclxuICBAT3V0cHV0KCkgYnV0dG9uQWN0aW9uOiBFdmVudEVtaXR0ZXI8VGFibGVCdXR0b25BY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJsZUJ1dHRvbkFjdGlvbj4oKVxyXG5cclxuICBvbkVkaXRDbGljaygpIHtcclxuICAgIHRoaXMuYnV0dG9uQWN0aW9uLmVtaXQoe1xyXG4gICAgICBuYW1lOiB0YWJsZUNvbnN0LmFjdGlvbkJ1dHRvbi5lZGl0LFxyXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uRGVsZXRlQ2xpY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkFjdGlvbi5lbWl0KHsgbmFtZTogdGFibGVDb25zdC5hY3Rpb25CdXR0b24uZGVsZXRlIH0pO1xyXG4gIH1cclxuICBvblZpZXdDbGljaygpIHtcclxuICAgIHRoaXMuYnV0dG9uQWN0aW9uLmVtaXQoeyBuYW1lOiB0YWJsZUNvbnN0LmFjdGlvbkJ1dHRvbi52aWV3IH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgbWVudVwiPlxyXG4gIDxtYXQtaWNvbj5tb3JlX3ZlcnQ8L21hdC1pY29uPlxyXG48L2J1dHRvbj5cclxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxyXG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwib25EZWxldGVDbGljaygpXCI+XHJcbiAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgIDxzcGFuPkRlbGV0ZTwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9uRWRpdENsaWNrKClcIj5cclxuICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgIDxzcGFuPkVkaXQ8L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJvblZpZXdDbGljaygpXCI+XHJcbiAgICA8bWF0LWljb24+dmlzaWJpbGl0eTwvbWF0LWljb24+XHJcbiAgICA8c3Bhbj5WaWV3IERldGFpbHM8L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbjwvbWF0LW1lbnU+Il19