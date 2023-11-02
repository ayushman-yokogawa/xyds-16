import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/tooltip";
export class SysSidebarItemComponent {
    constructor() {
        this.defaultIcon = "chevron_right";
        this.expendedIcon = "expand_more";
        this.clickMenuNode = new EventEmitter();
    }
    ngAfterViewInit() {
    }
    nodeClick($event, node) {
        node.action.call(this);
    }
    toggleNode(node) {
        // node.expanded = !node.expanded;
    }
    onClickNode($event, node) {
        node.action.call(this);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: SysSidebarItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: SysSidebarItemComponent, selector: "xy-sidebar-item", inputs: { icon: "icon", customIcon: "customIcon", label: "label", routerLink: "routerLink", charLimit: "charLimit", className: "className", menuIcon: "menuIcon", tree: "tree", logo: "logo", menuTooltip: "menuTooltip", treeMenu: "treeMenu", nodes: "nodes", defaultIcon: "defaultIcon", expendedIcon: "expendedIcon" }, outputs: { clickMenuNode: "clickMenuNode" }, ngImport: i0, template: "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0\" />\r\n<li [routerLink]=\"routerLink\" routerLinkActive=\"xy-sidebar-item-active\" class=\"ripple\" [ngClass]=\"{'sidebar-header': menuIcon, 'tree' : tree}\" class=\"sidenav-{{this.newLabelClass}}  {{this.className}}\"\r\n  [matTooltip]=\"this.menuTooltip == true && this.label.length > this.charLimit ? this.label: ''\"\r\n>\r\n  <a disabled *ngIf=\"!tree\">\r\n    <div class=\"items\">\r\n      <mat-icon class=\"mat-18 xy-sidenav-icon\" *ngIf=\"icon && !customIcon\">\r\n        {{icon}}\r\n      </mat-icon>\r\n      <span class=\"material-symbols-rounded customIcon\" *ngIf=\"!icon && customIcon\">\r\n        {{customIcon}}\r\n      </span>\r\n      <span class=\"label\" *ngIf=\"label\">{{label}}</span>\r\n      <span class=\"label\" *ngIf=\"!label\">\r\n        <ng-content></ng-content>\r\n      </span>\r\n      <span class=\"logo\" *ngIf=\"logo\">\r\n        <mat-icon class=\"mat-18\">\r\n          {{menuIcon}} \r\n        </mat-icon>\r\n        <span class=\"material-symbols-rounded\">\r\n          {{menuIcon}} \r\n        </span>\r\n      </span>\r\n    </div>\r\n  </a>\r\n  <a *ngIf=\"tree\">\r\n    <ng-content select=\"xy-tree\"></ng-content>\r\n  </a>\r\n</li>\r\n\r\n\r\n\r\n", styles: [".customIcon{margin-right:15px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "directive", type: i4.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: SysSidebarItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'xy-sidebar-item', template: "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0\" />\r\n<li [routerLink]=\"routerLink\" routerLinkActive=\"xy-sidebar-item-active\" class=\"ripple\" [ngClass]=\"{'sidebar-header': menuIcon, 'tree' : tree}\" class=\"sidenav-{{this.newLabelClass}}  {{this.className}}\"\r\n  [matTooltip]=\"this.menuTooltip == true && this.label.length > this.charLimit ? this.label: ''\"\r\n>\r\n  <a disabled *ngIf=\"!tree\">\r\n    <div class=\"items\">\r\n      <mat-icon class=\"mat-18 xy-sidenav-icon\" *ngIf=\"icon && !customIcon\">\r\n        {{icon}}\r\n      </mat-icon>\r\n      <span class=\"material-symbols-rounded customIcon\" *ngIf=\"!icon && customIcon\">\r\n        {{customIcon}}\r\n      </span>\r\n      <span class=\"label\" *ngIf=\"label\">{{label}}</span>\r\n      <span class=\"label\" *ngIf=\"!label\">\r\n        <ng-content></ng-content>\r\n      </span>\r\n      <span class=\"logo\" *ngIf=\"logo\">\r\n        <mat-icon class=\"mat-18\">\r\n          {{menuIcon}} \r\n        </mat-icon>\r\n        <span class=\"material-symbols-rounded\">\r\n          {{menuIcon}} \r\n        </span>\r\n      </span>\r\n    </div>\r\n  </a>\r\n  <a *ngIf=\"tree\">\r\n    <ng-content select=\"xy-tree\"></ng-content>\r\n  </a>\r\n</li>\r\n\r\n\r\n\r\n", styles: [".customIcon{margin-right:15px}\n"] }]
        }], propDecorators: { icon: [{
                type: Input
            }], customIcon: [{
                type: Input
            }], label: [{
                type: Input
            }], routerLink: [{
                type: Input
            }], charLimit: [{
                type: Input
            }], className: [{
                type: Input
            }], menuIcon: [{
                type: Input
            }], tree: [{
                type: Input
            }], logo: [{
                type: Input
            }], menuTooltip: [{
                type: Input
            }], treeMenu: [{
                type: Input
            }], nodes: [{
                type: Input
            }], defaultIcon: [{
                type: Input
            }], expendedIcon: [{
                type: Input
            }], clickMenuNode: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzLXNpZGViYXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi9zeXMtc2lkZWJhci9zeXMtc2lkZWJhci1pdGVtL3N5cy1zaWRlYmFyLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIvc3lzLXNpZGViYXIvc3lzLXNpZGViYXItaXRlbS9zeXMtc2lkZWJhci1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVN2RSxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBd0JXLGdCQUFXLEdBQVksZUFBZSxDQUFDO1FBQ3ZDLGlCQUFZLEdBQVksYUFBYSxDQUFDO1FBRXJDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQVU5QztJQW5CQyxlQUFlO0lBQ2YsQ0FBQztJQUNELFNBQVMsQ0FBQyxNQUFrQixFQUFFLElBQVM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQztJQU1ELFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLGtDQUFrQztJQUNwQyxDQUFDO0lBR0QsV0FBVyxDQUFDLE1BQW1CLEVBQUUsSUFBVTtRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzhHQTlCVSx1QkFBdUI7a0dBQXZCLHVCQUF1QixnYUNUcEMsb3pDQWlDQTs7MkZEeEJhLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSxpQkFBaUI7OEJBS2xCLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQU9HLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRUksYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFh5Tm9kZSB9IGZyb20gJy4uLy4uL3h5LXRyZWUveHktdHJlZS5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAneHktc2lkZWJhci1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3lzLXNpZGViYXItaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3lzLXNpZGViYXItaXRlbS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeXNTaWRlYmFySXRlbUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaWNvbiE6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21JY29uITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvdXRlckxpbmshOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2hhckxpbWl0ITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZSE6IHN0cmluZztcclxuICBASW5wdXQoKSBtZW51SWNvbiE6IHN0cmluZztcclxuICBASW5wdXQoKSB0cmVlITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBsb2dvITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBtZW51VG9vbHRpcCE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdHJlZU1lbnUhOiBYeU5vZGVbXTtcclxuICBuZXdMYWJlbENsYXNzOiBhbnlcclxuICBuZ0FmdGVyVmlld0luaXQoKXtcclxuICB9XHJcbiAgbm9kZUNsaWNrKCRldmVudDogTW91c2VFdmVudCwgbm9kZTogYW55KXtcclxuICAgIG5vZGUuYWN0aW9uLmNhbGwodGhpcylcclxuICB9XHJcbiAgQElucHV0KCkgbm9kZXMhOiBYeU5vZGVbXTtcclxuICBASW5wdXQoKSBkZWZhdWx0SWNvbiA6IHN0cmluZyA9IFwiY2hldnJvbl9yaWdodFwiO1xyXG4gIEBJbnB1dCgpIGV4cGVuZGVkSWNvbiA6IHN0cmluZyA9IFwiZXhwYW5kX21vcmVcIjtcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrTWVudU5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgdG9nZ2xlTm9kZShub2RlOiBYeU5vZGUpIHtcclxuICAgIC8vIG5vZGUuZXhwYW5kZWQgPSAhbm9kZS5leHBhbmRlZDtcclxuICB9XHJcblxyXG5cclxuICBvbkNsaWNrTm9kZSgkZXZlbnQgOiBNb3VzZUV2ZW50LCBub2RlIDogYW55KXtcclxuICAgIG5vZGUuYWN0aW9uLmNhbGwodGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytSb3VuZGVkOm9wc3osd2dodCxGSUxMLEdSQURANDgsNDAwLDEsMFwiIC8+XHJcbjxsaSBbcm91dGVyTGlua109XCJyb3V0ZXJMaW5rXCIgcm91dGVyTGlua0FjdGl2ZT1cInh5LXNpZGViYXItaXRlbS1hY3RpdmVcIiBjbGFzcz1cInJpcHBsZVwiIFtuZ0NsYXNzXT1cInsnc2lkZWJhci1oZWFkZXInOiBtZW51SWNvbiwgJ3RyZWUnIDogdHJlZX1cIiBjbGFzcz1cInNpZGVuYXYte3t0aGlzLm5ld0xhYmVsQ2xhc3N9fSAge3t0aGlzLmNsYXNzTmFtZX19XCJcclxuICBbbWF0VG9vbHRpcF09XCJ0aGlzLm1lbnVUb29sdGlwID09IHRydWUgJiYgdGhpcy5sYWJlbC5sZW5ndGggPiB0aGlzLmNoYXJMaW1pdCA/IHRoaXMubGFiZWw6ICcnXCJcclxuPlxyXG4gIDxhIGRpc2FibGVkICpuZ0lmPVwiIXRyZWVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtc1wiPlxyXG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtMTggeHktc2lkZW5hdi1pY29uXCIgKm5nSWY9XCJpY29uICYmICFjdXN0b21JY29uXCI+XHJcbiAgICAgICAge3tpY29ufX1cclxuICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQgY3VzdG9tSWNvblwiICpuZ0lmPVwiIWljb24gJiYgY3VzdG9tSWNvblwiPlxyXG4gICAgICAgIHt7Y3VzdG9tSWNvbn19XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiICpuZ0lmPVwibGFiZWxcIj57e2xhYmVsfX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIiAqbmdJZj1cIiFsYWJlbFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImxvZ29cIiAqbmdJZj1cImxvZ29cIj5cclxuICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtMThcIj5cclxuICAgICAgICAgIHt7bWVudUljb259fSBcclxuICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCI+XHJcbiAgICAgICAgICB7e21lbnVJY29ufX0gXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2E+XHJcbiAgPGEgKm5nSWY9XCJ0cmVlXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJ4eS10cmVlXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvYT5cclxuPC9saT5cclxuXHJcblxyXG5cclxuIl19