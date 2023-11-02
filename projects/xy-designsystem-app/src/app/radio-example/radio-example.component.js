"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RadioExampleComponent = void 0;
var core_1 = require("@angular/core");
var RadioExampleComponent = /** @class */ (function () {
    function RadioExampleComponent() {
        this.basicChecked = false;
        this.primaryChecked = false;
        this.secondaryChecked = false;
        this.accentChecked = false;
        this.criticalChecked = false;
        this.errorChecked = false;
        this.warningChecked = false;
        this.attentionChecked = false;
        this.safaNormalChecked = false;
        this.disabledChecked = false;
    }
    RadioExampleComponent.prototype.ngOnInit = function () {
    };
    RadioExampleComponent.prototype.onChange = function (event) {
        // alert(event.value + ' is checked.');
    };
    RadioExampleComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-radio-example',
            templateUrl: './radio-example.component.html',
            styleUrls: ['./radio-example.component.scss']
        })
    ], RadioExampleComponent);
    return RadioExampleComponent;
}());
exports.RadioExampleComponent = RadioExampleComponent;
