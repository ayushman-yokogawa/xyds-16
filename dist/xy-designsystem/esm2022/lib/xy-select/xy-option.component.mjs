import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class XyOptionComponent {
    set disabled(s) {
        this._disabled = (s == true || s == 'true' || s == 'disabled' || s === '');
    }
    get disabled() {
        return this._disabled;
    }
    constructor(elementRef, http) {
        this.elementRef = elementRef;
        this.http = http;
        this._disabled = false;
    }
    ngOnInit() {
        this.content = this.elementRef.nativeElement.innerHTML;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyOptionComponent, deps: [{ token: i0.ElementRef }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: XyOptionComponent, selector: "xy-option", inputs: { value: "value", icon: "icon", displayName: "displayName", id: "id", disabled: "disabled" }, ngImport: i0, template: "<ng-content></ng-content>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyOptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'xy-option', template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.HttpClient }]; }, propDecorators: { value: [{
                type: Input
            }], icon: [{
                type: Input
            }], displayName: [{
                type: Input
            }], id: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LXNlbGVjdC94eS1vcHRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktc2VsZWN0L3h5LW9wdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWdCLFNBQVMsRUFBYyxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7OztBQU9sRixNQUFNLE9BQU8saUJBQWlCO0lBUTVCLElBQWEsUUFBUSxDQUFDLENBQWlCO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLFVBQVUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBR0QsWUFBb0IsVUFBc0IsRUFBVSxJQUFnQjtRQUFoRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVRwRSxjQUFTLEdBQVksS0FBSyxDQUFDO0lBUzZDLENBQUM7SUFFekUsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3pELENBQUM7OEdBcEJVLGlCQUFpQjtrR0FBakIsaUJBQWlCLHVKQ1I5QiwyQkFBeUI7OzJGRFFaLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxXQUFXOzBIQU1aLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxFQUFFO3NCQUFWLEtBQUs7Z0JBR08sUUFBUTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAneHktb3B0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4veHktb3B0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi94eS1vcHRpb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWHlPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZSE6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc3BsYXlOYW1lITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlkITogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IGFueTtcclxuICBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzZXQgZGlzYWJsZWQoczogYm9vbGVhbnxzdHJpbmcpIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gKHMgPT0gdHJ1ZSB8fCBzID09ICd0cnVlJyB8fCBzID09ICdkaXNhYmxlZCcgfHwgcyA9PT0gJycpO1xyXG4gIH1cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG4gXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuICBcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcclxuICB9XHJcblxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=