"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SelectExampleComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SelectExampleComponent = /** @class */ (function () {
    function SelectExampleComponent() {
        this.toppings = new forms_1.FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectExampleComponent.prototype.ngOnInit = function () {
    };
    SelectExampleComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-select-example',
            templateUrl: './select-example.component.html',
            styleUrls: ['./select-example.component.scss']
        })
    ], SelectExampleComponent);
    return SelectExampleComponent;
}());
exports.SelectExampleComponent = SelectExampleComponent;
