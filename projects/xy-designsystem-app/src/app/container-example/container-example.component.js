"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContainerExampleComponent = void 0;
var core_1 = require("@angular/core");
var ContainerExampleComponent = /** @class */ (function () {
    function ContainerExampleComponent() {
        this.direction = 'horizontal';
        this.align = 'left';
        this.valign = 'top';
        this.spacing = 'm';
        this.wrap = 'nowrap';
    }
    ContainerExampleComponent.prototype.ngOnInit = function () {
    };
    ContainerExampleComponent.prototype.onChangeDirection = function (event) {
        this.direction = event.source.value;
    };
    ContainerExampleComponent.prototype.onChangeAlign = function (event) {
        this.align = event.source.value;
    };
    ContainerExampleComponent.prototype.onChangeVerticalAlign = function (event) {
        this.valign = event.source.value;
    };
    ContainerExampleComponent.prototype.onChangeSpacing = function (event) {
        this.spacing = event.source.value;
    };
    ContainerExampleComponent.prototype.onChangeWrap = function (event) {
        this.wrap = event.source.value;
    };
    ContainerExampleComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-container-example',
            templateUrl: './container-example.component.html',
            styleUrls: ['./container-example.component.scss']
        })
    ], ContainerExampleComponent);
    return ContainerExampleComponent;
}());
exports.ContainerExampleComponent = ContainerExampleComponent;
