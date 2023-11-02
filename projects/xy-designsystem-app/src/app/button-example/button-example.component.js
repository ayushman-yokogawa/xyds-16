"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ButtonExampleComponent = void 0;
var core_1 = require("@angular/core");
var ButtonExampleComponent = /** @class */ (function () {
    function ButtonExampleComponent() {
    }
    ButtonExampleComponent.prototype.ngOnInit = function () {
    };
    ButtonExampleComponent.prototype.onClick = function ($event, name) {
        // alert(name + ' is clicked.');
    };
    ButtonExampleComponent.prototype.onClick2 = function ($event, target) {
        // target.focus();
    };
    ButtonExampleComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-button-example',
            templateUrl: './button-example.component.html',
            styleUrls: ['./button-example.component.scss']
        })
    ], ButtonExampleComponent);
    return ButtonExampleComponent;
}());
exports.ButtonExampleComponent = ButtonExampleComponent;
