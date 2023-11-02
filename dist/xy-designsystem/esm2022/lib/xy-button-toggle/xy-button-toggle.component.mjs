import { Component, Input, ViewChild, } from "@angular/core";
import * as i0 from "@angular/core";
export class XyButtonToggleComponent {
    set disabled(s) {
        this._disabled = s == true || s == "true" || s == "disabled" || s === "";
    }
    get disabled() {
        return this._disabled;
    }
    constructor() {
        this.content = "";
        this._disabled = false;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.content = this.contentWrapper.nativeElement.innerHTML;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyButtonToggleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: XyButtonToggleComponent, selector: "xy-button-toggle", inputs: { value: "value", icon: "icon", disabled: "disabled" }, viewQueries: [{ propertyName: "contentWrapper", first: true, predicate: ["contentWrapper"], descendants: true }], ngImport: i0, template: "<div #contentWrapper><ng-content></ng-content></div>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyButtonToggleComponent, decorators: [{
            type: Component,
            args: [{ selector: "xy-button-toggle", template: "<div #contentWrapper><ng-content></ng-content></div>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { contentWrapper: [{
                type: ViewChild,
                args: ["contentWrapper"]
            }], value: [{
                type: Input
            }], icon: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS1idXR0b24tdG9nZ2xlL3h5LWJ1dHRvbi10b2dnbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktYnV0dG9uLXRvZ2dsZS94eS1idXR0b24tdG9nZ2xlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsS0FBSyxFQUVMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQzs7QUFPdkIsTUFBTSxPQUFPLHVCQUF1QjtJQVFsQyxJQUFhLFFBQVEsQ0FBQyxDQUFtQjtRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLElBQUksVUFBVSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0UsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7UUFkQSxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBTXJCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFRWixDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDO0lBRWIsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQzdELENBQUM7OEdBckJVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLDBPQ2RwQywwREFDQTs7MkZEYWEsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLGtCQUFrQjswRUFNQyxjQUFjO3NCQUExQyxTQUFTO3VCQUFDLGdCQUFnQjtnQkFFbEIsS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFHTyxRQUFRO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInh5LWJ1dHRvbi10b2dnbGVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3h5LWJ1dHRvbi10b2dnbGUuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4veHktYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQuc2Nzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFh5QnV0dG9uVG9nZ2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBjb250ZW50OiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBWaWV3Q2hpbGQoXCJjb250ZW50V3JhcHBlclwiKSBjb250ZW50V3JhcHBlciE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb24hOiBzdHJpbmc7XHJcblxyXG4gIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNldCBkaXNhYmxlZChzOiBzdHJpbmcgfCBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHMgPT0gdHJ1ZSB8fCBzID09IFwidHJ1ZVwiIHx8IHMgPT0gXCJkaXNhYmxlZFwiIHx8IHMgPT09IFwiXCI7XHJcbiAgfVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnRXcmFwcGVyLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICNjb250ZW50V3JhcHBlcj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XHJcbiJdfQ==