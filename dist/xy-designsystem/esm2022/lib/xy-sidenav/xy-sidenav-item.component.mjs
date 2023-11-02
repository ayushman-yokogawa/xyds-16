import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class XySidenavItemComponent {
    constructor(element) {
        this.element = element;
        this.clickRightEvent = new EventEmitter();
        this.clickRight2Event = new EventEmitter();
    }
    ngOnInit() {
    }
    onClickRight($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.clickRightEvent.emit($event);
    }
    onClickRight2($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.clickRight2Event.emit($event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySidenavItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: XySidenavItemComponent, selector: "xy-sidenav-item", inputs: { closeByClick: "closeByClick", icon: "icon", name: "name", rightIcon: ["right-icon", "rightIcon"], rightIcon2: ["right-icon2", "rightIcon2"], clickRight: ["click-right", "clickRight"], clickRight2: ["click-right2", "clickRight2"], routerLink: "routerLink", class: "class", routerLinkActive: "routerLinkActive" }, outputs: { clickRightEvent: "clickRightEvent", clickRight2Event: "clickRight2Event" }, ngImport: i0, template: "", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XySidenavItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'xy-sidenav-item', template: "" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { closeByClick: [{
                type: Input
            }], icon: [{
                type: Input
            }], name: [{
                type: Input
            }], rightIcon: [{
                type: Input,
                args: ['right-icon']
            }], rightIcon2: [{
                type: Input,
                args: ['right-icon2']
            }], clickRight: [{
                type: Input,
                args: ['click-right']
            }], clickRight2: [{
                type: Input,
                args: ['click-right2']
            }], routerLink: [{
                type: Input
            }], class: [{
                type: Input
            }], routerLinkActive: [{
                type: Input
            }], clickRightEvent: [{
                type: Output
            }], clickRight2Event: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktc2lkZW5hdi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LXNpZGVuYXYveHktc2lkZW5hdi1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3h5LWRlc2lnbnN5c3RlbS9zcmMvbGliL3h5LXNpZGVuYXYveHktc2lkZW5hdi1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7O0FBUXBHLE1BQU0sT0FBTyxzQkFBc0I7SUFjakMsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUg3QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDakQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUVqQixDQUFDO0lBRTVDLFFBQVE7SUFDUixDQUFDO0lBR0QsWUFBWSxDQUFDLE1BQWtCO1FBQzdCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUFrQjtRQUM5QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs4R0E5QlUsc0JBQXNCO2tHQUF0QixzQkFBc0IsZ2RDUm5DLEVBQUE7OzJGRFFhLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxpQkFBaUI7aUdBS2xCLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDZSxTQUFTO3NCQUE3QixLQUFLO3VCQUFDLFlBQVk7Z0JBQ0csVUFBVTtzQkFBL0IsS0FBSzt1QkFBQyxhQUFhO2dCQUNFLFVBQVU7c0JBQS9CLEtBQUs7dUJBQUMsYUFBYTtnQkFDRyxXQUFXO3NCQUFqQyxLQUFLO3VCQUFDLGNBQWM7Z0JBQ1osVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNJLGVBQWU7c0JBQXhCLE1BQU07Z0JBQ0csZ0JBQWdCO3NCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3h5LXNpZGVuYXYtaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3h5LXNpZGVuYXYtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4veHktc2lkZW5hdi1pdGVtLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFh5U2lkZW5hdkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNsb3NlQnlDbGljayE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaWNvbiE6IHN0cmluZztcclxuICBASW5wdXQoKSBuYW1lITogc3RyaW5nO1xyXG4gIEBJbnB1dCgncmlnaHQtaWNvbicpIHJpZ2h0SWNvbiE6IHN0cmluZztcclxuICBASW5wdXQoJ3JpZ2h0LWljb24yJykgcmlnaHRJY29uMiE6IHN0cmluZztcclxuICBASW5wdXQoJ2NsaWNrLXJpZ2h0JykgY2xpY2tSaWdodD86IEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgnY2xpY2stcmlnaHQyJykgY2xpY2tSaWdodDI/OiBGdW5jdGlvbjtcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBhbnk7XHJcbiAgQElucHV0KCkgY2xhc3M6IGFueTtcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rQWN0aXZlOiBhbnk7XHJcbiAgQE91dHB1dCgpIGNsaWNrUmlnaHRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgY2xpY2tSaWdodDJFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG4gXHJcblxyXG4gIG9uQ2xpY2tSaWdodCgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5jbGlja1JpZ2h0RXZlbnQuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1JpZ2h0MigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5jbGlja1JpZ2h0MkV2ZW50LmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiIl19