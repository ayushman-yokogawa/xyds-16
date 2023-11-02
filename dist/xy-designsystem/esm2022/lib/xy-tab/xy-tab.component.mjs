import { Component, EventEmitter, Input, Output, } from "@angular/core";
import * as i0 from "@angular/core";
export class XyTabComponent {
    set disabled(s) {
        this._disabled = s == true || s == "true" || s == "disabled" || s === "";
    }
    get disabled() {
        return this._disabled;
    }
    constructor(element) {
        this.element = element;
        this.active = false;
        this.myEvent = new EventEmitter();
        this._disabled = false;
    }
    preTab() {
        this.hide = !this.hide;
    }
    ngOnInit() {
        this.CustomEle = this.CustomElement;
    }
    ngAfterViewInit() {
        const self = this;
        self.content = self.element.nativeElement.innerHTML;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTabComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: XyTabComponent, selector: "xy-tab", inputs: { label: "label", active: "active", icon: "icon", hide: "hide", controls: "controls", disabled: "disabled", CustomElement: "CustomElement", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"] }, outputs: { myEvent: "myEvent" }, ngImport: i0, template: "<!-- <ng-content></ng-content> -->\r\n\r\n<div [hidden]=\"!active\" class=\"pane\"  (click)=\"myEvent.emit()\" >\r\n    <ng-content></ng-content>\r\n</div>", styles: [".pane{padding:0 1px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTabComponent, decorators: [{
            type: Component,
            args: [{ selector: "xy-tab", template: "<!-- <ng-content></ng-content> -->\r\n\r\n<div [hidden]=\"!active\" class=\"pane\"  (click)=\"myEvent.emit()\" >\r\n    <ng-content></ng-content>\r\n</div>", styles: [".pane{padding:0 1px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { label: [{
                type: Input
            }], active: [{
                type: Input
            }], icon: [{
                type: Input
            }], hide: [{
                type: Input
            }], controls: [{
                type: Input
            }], myEvent: [{
                type: Output
            }], disabled: [{
                type: Input
            }], CustomElement: [{
                type: Input
            }], ariaLabel: [{
                type: Input,
                args: ["aria-label"]
            }], ariaLabelledby: [{
                type: Input,
                args: ["aria-labelledby"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LXRhYi94eS10YWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktdGFiL3h5LXRhYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUdQLE1BQU0sZUFBZSxDQUFDOztBQU92QixNQUFNLE9BQU8sY0FBYztJQVN6QixJQUFhLFFBQVEsQ0FBQyxDQUFtQjtRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLElBQUksVUFBVSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0UsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBVUQsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQXRCOUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUlkLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFpQmUsQ0FBQztJQUUzQyxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDdEQsQ0FBQzs4R0FyQ1UsY0FBYztrR0FBZCxjQUFjLG9VQ2pCM0IsNkpBSU07OzJGRGFPLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsUUFBUTtpR0FLVCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNO2dCQUdNLFFBQVE7c0JBQXBCLEtBQUs7Z0JBT0csYUFBYTtzQkFBckIsS0FBSztnQkFHZSxTQUFTO3NCQUE3QixLQUFLO3VCQUFDLFlBQVk7Z0JBQ08sY0FBYztzQkFBdkMsS0FBSzt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ4eS10YWJcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3h5LXRhYi5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi94eS10YWIuY29tcG9uZW50LnNjc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYeVRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgbGFiZWwhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWNvbiE6IHN0cmluZztcclxuICBASW5wdXQoKSBoaWRlITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjb250cm9scyE6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIG15RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgZWxlbWVudFJlZjogYW55O1xyXG4gIEBJbnB1dCgpIHNldCBkaXNhYmxlZChzOiBzdHJpbmcgfCBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHMgPT0gdHJ1ZSB8fCBzID09IFwidHJ1ZVwiIHx8IHMgPT0gXCJkaXNhYmxlZFwiIHx8IHMgPT09IFwiXCI7XHJcbiAgfVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIEN1c3RvbUVsZW1lbnQhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEN1c3RvbUVsZSE6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dChcImFyaWEtbGFiZWxcIikgYXJpYUxhYmVsITogc3RyaW5nO1xyXG4gIEBJbnB1dChcImFyaWEtbGFiZWxsZWRieVwiKSBhcmlhTGFiZWxsZWRieSE6IHN0cmluZztcclxuXHJcbiAgY29udGVudCE6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBwcmVUYWIoKSB7XHJcbiAgICB0aGlzLmhpZGUgPSAhdGhpcy5oaWRlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLkN1c3RvbUVsZSA9IHRoaXMuQ3VzdG9tRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5jb250ZW50ID0gc2VsZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xyXG4gIH1cclxufSIsIjwhLS0gPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiAtLT5cclxuXHJcbjxkaXYgW2hpZGRlbl09XCIhYWN0aXZlXCIgY2xhc3M9XCJwYW5lXCIgIChjbGljayk9XCJteUV2ZW50LmVtaXQoKVwiID5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+Il19