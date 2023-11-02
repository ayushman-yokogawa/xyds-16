"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ButtonToggleExampleComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ButtonToggleExampleComponent = /** @class */ (function () {
    function ButtonToggleExampleComponent() {
        this.formGroup = new forms_1.FormGroup({
            'singleForm': new forms_1.FormControl('', []),
            'multipleForm': new forms_1.FormControl('', [])
        });
    }
    Object.defineProperty(ButtonToggleExampleComponent.prototype, "singleFormValue", {
        get: function () {
            return this.singleField.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonToggleExampleComponent.prototype, "multipleFormValue", {
        get: function () {
            return this.multipleField.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonToggleExampleComponent.prototype, "singleField", {
        get: function () {
            return this.formGroup.get('singleForm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonToggleExampleComponent.prototype, "multipleField", {
        get: function () {
            return this.formGroup.get('multipleForm');
        },
        enumerable: false,
        configurable: true
    });
    ButtonToggleExampleComponent.prototype.ngOnInit = function () {
    };
    ButtonToggleExampleComponent.prototype.onChange = function ($event) {
        this.singleChangedValue = $event.value;
    };
    ButtonToggleExampleComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-button-toggle-example',
            templateUrl: './button-toggle-example.component.html',
            styleUrls: ['./button-toggle-example.component.scss']
        })
    ], ButtonToggleExampleComponent);
    return ButtonToggleExampleComponent;
}());
exports.ButtonToggleExampleComponent = ButtonToggleExampleComponent;
