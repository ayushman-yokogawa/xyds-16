import { Component, EventEmitter, Input, Output, } from "@angular/core";
import * as i0 from "@angular/core";
export class XyMenuItemComponent {
    set disabled(s) {
        this._disabled = s == true || s == "true" || s == "disabled" || s === "";
    }
    get disabled() {
        return this._disabled;
    }
    set checkable(s) {
        this._checkable = s == true || s == "true" || s == "checkable" || s === "";
    }
    get checkable() {
        return this._checkable;
    }
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.customElement = true;
        this._disabled = false;
        this._checkable = false;
        this.click = new EventEmitter();
    }
    ngOnInit() {
        this.content = this.elementRef.nativeElement.innerHTML;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyMenuItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: XyMenuItemComponent, selector: "xy-menu-item", inputs: { value: "value", icon: "icon", level: "level", customElement: "customElement", disabled: "disabled", checkable: "checkable" }, outputs: { click: "click" }, ngImport: i0, template: "<ng-content></ng-content>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyMenuItemComponent, decorators: [{
            type: Component,
            args: [{ selector: "xy-menu-item", template: "<ng-content></ng-content>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { value: [{
                type: Input
            }], icon: [{
                type: Input
            }], level: [{
                type: Input
            }], customElement: [{
                type: Input
            }], disabled: [{
                type: Input
            }], checkable: [{
                type: Input
            }], click: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktbWVudS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LW1lbnUveHktbWVudS1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LW1lbnUveHktbWVudS1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7O0FBT3ZCLE1BQU0sT0FBTyxtQkFBbUI7SUFNOUIsSUFBYSxRQUFRLENBQUMsQ0FBbUI7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLFVBQVUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNFLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQWEsU0FBUyxDQUFDLENBQW1CO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3RSxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFLRCxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBbkJqQyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUN2QyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBTzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFTbEIsVUFBSyxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO0lBRTlCLENBQUM7SUFFOUMsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3pELENBQUM7OEdBM0JVLG1CQUFtQjtrR0FBbkIsbUJBQW1CLHlOQ2RoQywrQkFDQTs7MkZEYWEsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGNBQWM7aUdBS2YsS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFFTyxRQUFRO3NCQUFwQixLQUFLO2dCQU9PLFNBQVM7c0JBQXJCLEtBQUs7Z0JBUUksS0FBSztzQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwieHktbWVudS1pdGVtXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi94eS1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4veHktbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgWHlNZW51SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdmFsdWUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbiE6IHN0cmluZztcclxuICBASW5wdXQoKSBsZXZlbCE6IG51bWJlcjtcclxuICBASW5wdXQoKSBjdXN0b21FbGVtZW50OiBib29sZWFuID0gdHJ1ZTtcclxuICBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzZXQgZGlzYWJsZWQoczogYm9vbGVhbiB8IHN0cmluZykge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSBzID09IHRydWUgfHwgcyA9PSBcInRydWVcIiB8fCBzID09IFwiZGlzYWJsZWRcIiB8fCBzID09PSBcIlwiO1xyXG4gIH1cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG4gIF9jaGVja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzZXQgY2hlY2thYmxlKHM6IGJvb2xlYW4gfCBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NoZWNrYWJsZSA9IHMgPT0gdHJ1ZSB8fCBzID09IFwidHJ1ZVwiIHx8IHMgPT0gXCJjaGVja2FibGVcIiB8fCBzID09PSBcIlwiO1xyXG4gIH1cclxuICBnZXQgY2hlY2thYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrYWJsZTtcclxuICB9XHJcbiAgY29udGVudDogYW55O1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=