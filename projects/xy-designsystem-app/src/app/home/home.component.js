"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSelectSpacing = function (spacing) {
        var body = document.querySelector('body');
        if (body) {
            var len = body.classList.length;
            for (var i = len - 1; i >= 0; i--) {
                var cl = body.classList.item(i);
                if (cl) {
                    if (cl.startsWith('spacing-')) {
                        body.classList.remove(cl);
                    }
                }
            }
            body.classList.add('spacing-' + spacing);
        }
    };
    HomeComponent.prototype.onSelectFontSize = function (fontSize) {
        var html = document.querySelector('html');
        var size = '16px';
        if (html) {
            switch (fontSize) {
                case 'x-small':
                    size = '12.32px';
                    break;
                case 'small':
                    size = '14.08px';
                    break;
                case 'medium':
                    size = '16px';
                    break;
                case 'large':
                    size = '17.92px';
                    break;
                case 'x-large':
                    size = '24px';
                    break;
            }
            html.style.fontSize = size;
        }
    };
    HomeComponent.prototype.onClickDashboard = function () {
        alert('Dashboard menu clicked!');
    };
    HomeComponent.prototype.onClickInbox = function () {
        alert('Inbox menu clicked!');
    };
    HomeComponent.prototype.onClickInbox2 = function () {
        alert('Inbox menu item #2 clicked!');
    };
    HomeComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
