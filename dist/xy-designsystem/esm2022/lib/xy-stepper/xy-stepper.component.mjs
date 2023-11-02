import { Component, ContentChildren, EventEmitter, Input, Output, } from "@angular/core";
import { XyStepComponent } from "./xy-step/xy-step.component";
import * as i0 from "@angular/core";
export class XyStepperComponent {
    constructor() {
        this.currentStep = 2;
        this.counter = 1;
        this.counterChange = new EventEmitter();
        this._vertical = false;
    }
    ngOnChanges() {
        this.currentStep = this.counter;
        if (this.internalSteps) {
            this.setChildSteps();
        }
    }
    set stepsContent(steps) {
        if (steps) {
            this.internalSteps = steps;
            this.internalSteps.last.isLast = true;
            this.internalSteps.first.isFirst = true;
            this.registerSteps();
        }
    }
    nextStep() {
        this.counter++;
        this.counterChange.emit(this.counter);
    }
    prevStep() {
        this.counter--;
        this.counterChange.emit(this.counter);
    }
    setStep(step) {
        this.counterChange.emit(step);
    }
    registerSteps() {
        this.internalSteps
            .toArray()
            .forEach((step, idx) => {
            step.currentStep = this.currentStep;
            step.stepNumber = idx + 1;
        });
    }
    setChildSteps() {
        this.internalSteps
            .toArray()
            .forEach((step, idx) => {
            step.currentStep = this.currentStep;
        });
    }
    set vertical(b) {
        this._vertical = b == "true" || b == "";
    }
    styleClass() {
        if (this._vertical) {
            return "vertical-stepper";
        }
        return "";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyStepperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: XyStepperComponent, selector: "xy-stepper", inputs: { counter: "counter", _vertical: "_vertical", vertical: "vertical" }, outputs: { counterChange: "counterChange" }, queries: [{ propertyName: "stepsContent", predicate: XyStepComponent }], usesOnChanges: true, ngImport: i0, template: "<div class=\"xy-stepper\" [class]=\"styleClass()\">\r\n   <ng-content></ng-content>\r\n</div>\r\n", styles: [".xy-stepper{display:flex}.vertical-stepper{display:block!important}:host-context(.dark-theme) ::ng-deep .vertical-stepper{display:block!important}:host-context(.dark-theme) ::ng-deep .vertical-stepper .grid .line{background-color:#fff!important}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyStepperComponent, decorators: [{
            type: Component,
            args: [{ selector: "xy-stepper", template: "<div class=\"xy-stepper\" [class]=\"styleClass()\">\r\n   <ng-content></ng-content>\r\n</div>\r\n", styles: [".xy-stepper{display:flex}.vertical-stepper{display:block!important}:host-context(.dark-theme) ::ng-deep .vertical-stepper{display:block!important}:host-context(.dark-theme) ::ng-deep .vertical-stepper .grid .line{background-color:#fff!important}\n"] }]
        }], propDecorators: { counter: [{
                type: Input
            }], counterChange: [{
                type: Output
            }], stepsContent: [{
                type: ContentChildren,
                args: [XyStepComponent]
            }], _vertical: [{
                type: Input
            }], vertical: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktc3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS1zdGVwcGVyL3h5LXN0ZXBwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktc3RlcHBlci94eS1zdGVwcGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBRVQsZUFBZSxFQUVmLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxHQU1QLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFROUQsTUFBTSxPQUFPLGtCQUFrQjtJQU4vQjtRQU9VLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3ZCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUEwQzVDLGNBQVMsR0FBWSxLQUFLLENBQUM7S0FrQnJDO0lBMURDLFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxJQUNJLFlBQVksQ0FBQyxLQUFpQztRQUNoRCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQXdCO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxhQUFhO2FBQ2YsT0FBTyxFQUFFO2FBQ1QsT0FBTyxDQUFDLENBQUMsSUFBcUIsRUFBRSxHQUFXLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdPLGFBQWE7UUFDbkIsSUFBSSxDQUFDLGFBQWE7YUFDZixPQUFPLEVBQUU7YUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFxQixFQUFFLEdBQVcsRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxJQUFhLFFBQVEsQ0FBQyxDQUF3QjtRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixPQUFPLGtCQUFrQixDQUFDO1NBQzNCO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzhHQWhFVSxrQkFBa0I7a0dBQWxCLGtCQUFrQiwwTUFjWixlQUFlLGtEQ3pDbEMsbUdBR0E7OzJGRHdCYSxrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0UsWUFBWTs4QkFTYixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0ksYUFBYTtzQkFBdEIsTUFBTTtnQkFVSCxZQUFZO3NCQURmLGVBQWU7dUJBQUMsZUFBZTtnQkFpQ3ZCLFNBQVM7c0JBQWpCLEtBQUs7Z0JBUU8sUUFBUTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFh5U3RlcENvbXBvbmVudCB9IGZyb20gXCIuL3h5LXN0ZXAveHktc3RlcC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInh5LXN0ZXBwZXJcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3h5LXN0ZXBwZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4veHktc3RlcHBlci5jb21wb25lbnQuc2Nzc1wiXSxcclxuICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFh5U3RlcHBlckNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBjdXJyZW50U3RlcDogbnVtYmVyID0gMjtcclxuICBwcml2YXRlIGludGVybmFsU3RlcHMhOiBRdWVyeUxpc3Q8WHlTdGVwQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgY291bnRlciA9IDE7XHJcbiAgQE91dHB1dCgpIGNvdW50ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gdGhpcy5jb3VudGVyO1xyXG4gICAgaWYgKHRoaXMuaW50ZXJuYWxTdGVwcykge1xyXG4gICAgICB0aGlzLnNldENoaWxkU3RlcHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oWHlTdGVwQ29tcG9uZW50KVxyXG4gIHNldCBzdGVwc0NvbnRlbnQoc3RlcHM6IFF1ZXJ5TGlzdDxYeVN0ZXBDb21wb25lbnQ+KSB7XHJcbiAgICBpZiAoc3RlcHMpIHtcclxuICAgICAgdGhpcy5pbnRlcm5hbFN0ZXBzID0gc3RlcHM7XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxTdGVwcy5sYXN0LmlzTGFzdCA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxTdGVwcy5maXJzdC5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZWdpc3RlclN0ZXBzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0U3RlcCgpIHtcclxuICAgIHRoaXMuY291bnRlcisrO1xyXG4gICAgdGhpcy5jb3VudGVyQ2hhbmdlLmVtaXQodGhpcy5jb3VudGVyKTtcclxuICB9XHJcblxyXG4gIHByZXZTdGVwKCkge1xyXG4gICAgdGhpcy5jb3VudGVyLS07XHJcbiAgICB0aGlzLmNvdW50ZXJDaGFuZ2UuZW1pdCh0aGlzLmNvdW50ZXIpO1xyXG4gIH1cclxuXHJcbiAgc2V0U3RlcChzdGVwOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuY291bnRlckNoYW5nZS5lbWl0KHN0ZXApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlclN0ZXBzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnRlcm5hbFN0ZXBzXHJcbiAgICAgIC50b0FycmF5KClcclxuICAgICAgLmZvckVhY2goKHN0ZXA6IFh5U3RlcENvbXBvbmVudCwgaWR4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzdGVwLmN1cnJlbnRTdGVwID0gdGhpcy5jdXJyZW50U3RlcDtcclxuICAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpZHggKyAxO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIF92ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgc2V0Q2hpbGRTdGVwcygpOiB2b2lkIHtcclxuICAgIHRoaXMuaW50ZXJuYWxTdGVwc1xyXG4gICAgICAudG9BcnJheSgpXHJcbiAgICAgIC5mb3JFYWNoKChzdGVwOiBYeVN0ZXBDb21wb25lbnQsIGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc3RlcC5jdXJyZW50U3RlcCA9IHRoaXMuY3VycmVudFN0ZXA7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBASW5wdXQoKSBzZXQgdmVydGljYWwoYjogXCJ0cnVlXCIgfCBcImZhbHNlXCIgfCBcIlwiKSB7XHJcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IGIgPT0gXCJ0cnVlXCIgfHwgYiA9PSBcIlwiO1xyXG4gIH1cclxuICBzdHlsZUNsYXNzKCkge1xyXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsKSB7XHJcbiAgICAgIHJldHVybiBcInZlcnRpY2FsLXN0ZXBwZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInh5LXN0ZXBwZXJcIiBbY2xhc3NdPVwic3R5bGVDbGFzcygpXCI+XHJcbiAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==