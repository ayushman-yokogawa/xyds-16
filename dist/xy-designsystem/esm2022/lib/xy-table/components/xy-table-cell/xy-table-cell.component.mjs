import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
import * as i3 from "../../../xy-button/xy-button.component";
export class XyTableCellComponent {
    constructor(componentFactoryResolver, _sanitizer) {
        this.componentFactoryResolver = componentFactoryResolver;
        this._sanitizer = _sanitizer;
    }
    ngOnInit() {
        if (this.columnDef.cellDef.type === 'image' && this.data.icon) {
            this.imageSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.data.icon.fileUrl);
        }
    }
    ngAfterViewInit() {
        this.loadDynamicComponent();
    }
    get isRenderingXyComponent() {
        return this.columnDef.cellDef.type === 'component';
    }
    loadDynamicComponent() {
        if (!this.isRenderingXyComponent) {
            return;
        }
        const { type: componentType, inputs: inputsFn } = this.columnDef.cellDef.value;
        const componentFacotry = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.container.clear();
        const componentRef = this.container.createComponent(componentFacotry);
        const componentInputs = inputsFn(this.data);
        Object.keys(componentInputs).forEach(key => {
            componentRef.instance[key] = componentInputs[key];
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTableCellComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: XyTableCellComponent, selector: "xy-table-cell", inputs: { columnDef: "columnDef", data: "data" }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "\r\n<ng-container>\r\n  <ng-container *ngIf=\"columnDef.cellDef.type != 'image'\">\r\n    {{columnDef.cellDef.value(data)}}\r\n  </ng-container>\r\n  <ng-container *ngIf=\"columnDef.cellDef.type === 'image'\">\r\n    <img [src]=\"columnDef.cellDef.value(data)\" width=\"30\" alt=\"\">\r\n  </ng-container>\r\n  <ng-container *ngIf=\"columnDef.cellDef.type === 'btn'\">\r\n    <xy-button standard-button color=\"accent\">{{columnDef.cellDef.value(data)}}</xy-button>\r\n  </ng-container>\r\n</ng-container>", styles: [""], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.XyButtonComponent, selector: "xy-button", inputs: ["type", "id", "name", "button-type", "color", "disableRipple", "disabled", "aria-label", "default-focus", "tabindex", "text-button", "light-weight-button", "standard-button", "icon-button", "cdkFocusInitial", "icon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTableCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'xy-table-cell', template: "\r\n<ng-container>\r\n  <ng-container *ngIf=\"columnDef.cellDef.type != 'image'\">\r\n    {{columnDef.cellDef.value(data)}}\r\n  </ng-container>\r\n  <ng-container *ngIf=\"columnDef.cellDef.type === 'image'\">\r\n    <img [src]=\"columnDef.cellDef.value(data)\" width=\"30\" alt=\"\">\r\n  </ng-container>\r\n  <ng-container *ngIf=\"columnDef.cellDef.type === 'btn'\">\r\n    <xy-button standard-button color=\"accent\">{{columnDef.cellDef.value(data)}}</xy-button>\r\n  </ng-container>\r\n</ng-container>" }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i1.DomSanitizer }]; }, propDecorators: { container: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef }]
            }], columnDef: [{
                type: Input
            }], data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktdGFibGUtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS10YWJsZS9jb21wb25lbnRzL3h5LXRhYmxlLWNlbGwveHktdGFibGUtY2VsbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS10YWJsZS9jb21wb25lbnRzL3h5LXRhYmxlLWNlbGwveHktdGFibGUtY2VsbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBMEIsS0FBSyxFQUFRLFNBQVMsRUFBQyxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFVekgsTUFBTSxPQUFPLG9CQUFvQjtJQU8vQixZQUFtQix3QkFBa0QsRUFBVSxVQUF3QjtRQUFwRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBYztJQUFHLENBQUM7SUFDM0csUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUM3RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEY7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLHNCQUFzQjtRQUN4QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxXQUFXLENBQUM7SUFDckQsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUVELE1BQU0sRUFDSixJQUFJLEVBQUUsYUFBYSxFQUNuQixNQUFNLEVBQUUsUUFBUSxFQUNqQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUVqQyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FDNUUsYUFBYSxDQUNkLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUNqRCxnQkFBZ0IsQ0FDakIsQ0FBQztRQUVGLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQTdDVSxvQkFBb0I7a0dBQXBCLG9CQUFvQiwwTEFDQyxnQkFBZ0IsNkJDWGxELDJmQVdlOzsyRkRERixvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UsZUFBZTswSUFLMkIsU0FBUztzQkFBNUQsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBRXpDLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCxDb21wb25lbnQsQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLElucHV0LE9uSW5pdCxWaWV3Q2hpbGQsVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgWHlUYWJsZUNvbHVtbkRlZiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMveHktdGFibGUtY29sdW1uLmludGVyZmFjZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd4eS10YWJsZS1jZWxsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4veHktdGFibGUtY2VsbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4veHktdGFibGUtY2VsbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYeVRhYmxlQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGNvbnRhaW5lciE6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbHVtbkRlZiE6IFh5VGFibGVDb2x1bW5EZWY7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG4gIGltYWdlU3JjITogU2FmZVVybDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbHVtbkRlZi5jZWxsRGVmLnR5cGUgPT09ICdpbWFnZScgJiYgdGhpcy5kYXRhLmljb24pIHtcclxuICAgICAgdGhpcy5pbWFnZVNyYyA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodGhpcy5kYXRhLmljb24uZmlsZVVybCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmxvYWREeW5hbWljQ29tcG9uZW50KCk7XHJcbiAgfVxyXG4gXHJcbiAgZ2V0IGlzUmVuZGVyaW5nWHlDb21wb25lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5EZWYuY2VsbERlZi50eXBlID09PSAnY29tcG9uZW50JztcclxuICB9XHJcblxyXG4gIGxvYWREeW5hbWljQ29tcG9uZW50KCkge1xyXG4gICAgaWYgKCF0aGlzLmlzUmVuZGVyaW5nWHlDb21wb25lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgdHlwZTogY29tcG9uZW50VHlwZSxcclxuICAgICAgaW5wdXRzOiBpbnB1dHNGblxyXG4gICAgfSA9IHRoaXMuY29sdW1uRGVmLmNlbGxEZWYudmFsdWU7XHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50RmFjb3RyeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxyXG4gICAgICBjb21wb25lbnRUeXBlXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQ8dHlwZW9mIGNvbXBvbmVudFR5cGU+KFxyXG4gICAgICBjb21wb25lbnRGYWNvdHJ5XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudElucHV0cyA9IGlucHV0c0ZuKHRoaXMuZGF0YSk7XHJcbiAgICBPYmplY3Qua2V5cyhjb21wb25lbnRJbnB1dHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0gPSBjb21wb25lbnRJbnB1dHNba2V5XTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJcclxuPG5nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uRGVmLmNlbGxEZWYudHlwZSAhPSAnaW1hZ2UnXCI+XHJcbiAgICB7e2NvbHVtbkRlZi5jZWxsRGVmLnZhbHVlKGRhdGEpfX1cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uRGVmLmNlbGxEZWYudHlwZSA9PT0gJ2ltYWdlJ1wiPlxyXG4gICAgPGltZyBbc3JjXT1cImNvbHVtbkRlZi5jZWxsRGVmLnZhbHVlKGRhdGEpXCIgd2lkdGg9XCIzMFwiIGFsdD1cIlwiPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW5EZWYuY2VsbERlZi50eXBlID09PSAnYnRuJ1wiPlxyXG4gICAgPHh5LWJ1dHRvbiBzdGFuZGFyZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj57e2NvbHVtbkRlZi5jZWxsRGVmLnZhbHVlKGRhdGEpfX08L3h5LWJ1dHRvbj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+Il19