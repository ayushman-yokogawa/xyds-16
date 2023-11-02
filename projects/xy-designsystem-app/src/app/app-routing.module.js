"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var example_component_1 = require("./example/example.component");
var tree_example_component_1 = require("./tree-example/tree-example.component");
var home_component_1 = require("./home/home.component");
var button_example_component_1 = require("./button-example/button-example.component");
var slide_toggle_example_component_1 = require("./slide-toggle-example/slide-toggle-example.component");
var checkbox_example_component_1 = require("./checkbox-example/checkbox-example.component");
var radio_example_component_1 = require("./radio-example/radio-example.component");
var container_example_component_1 = require("./container-example/container-example.component");
var input_example_component_1 = require("./input-example/input-example.component");
var select_example_component_1 = require("./select-example/select-example.component");
var typography_example_component_1 = require("./typography-example/typography-example.component");
var card_example_component_1 = require("./card-example/card-example.component");
var elevation_example_component_1 = require("./elevation-example/elevation-example.component");
var dialog_example_component_1 = require("./dialog-example/dialog-example.component");
var button_toggle_example_component_1 = require("./button-toggle-example/button-toggle-example.component");
var routes = [
    { path: 'inbox', component: home_component_1.HomeComponent },
    { path: 'products', component: home_component_1.HomeComponent },
    { path: 'invoices', component: home_component_1.HomeComponent },
    { path: 'customers', component: home_component_1.HomeComponent },
    { path: 'chat_room', component: home_component_1.HomeComponent },
    { path: 'calendar', component: home_component_1.HomeComponent },
    { path: 'help_center', component: home_component_1.HomeComponent },
    { path: 'setting', component: home_component_1.HomeComponent },
    { path: '',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: 'dashboard',
                component: example_component_1.ExampleComponent
            },
            {
                path: 'button',
                component: button_example_component_1.ButtonExampleComponent
            },
            {
                path: 'button_toggle',
                component: button_toggle_example_component_1.ButtonToggleExampleComponent
            },
            {
                path: 'slide-toggle',
                component: slide_toggle_example_component_1.SlideToggleExampleComponent
            },
            {
                path: 'checkbox',
                component: checkbox_example_component_1.CheckboxExampleComponent
            },
            {
                path: 'radio',
                component: radio_example_component_1.RadioExampleComponent
            },
            {
                path: 'container',
                component: container_example_component_1.ContainerExampleComponent
            },
            {
                path: 'input',
                component: input_example_component_1.InputExampleComponent
            },
            {
                path: 'select',
                component: select_example_component_1.SelectExampleComponent
            },
            {
                path: 'typography',
                component: typography_example_component_1.TypographyExampleComponent
            },
            {
                path: 'card',
                component: card_example_component_1.CardExampleComponent
            },
            {
                path: 'dialog',
                component: dialog_example_component_1.DialogExampleComponent
            },
            {
                path: 'elevation',
                component: elevation_example_component_1.ElevationExampleComponent
            },
            {
                path: 'tree',
                component: tree_example_component_1.TreeExampleComponent
            }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes, {
                    enableTracing: false,
                    paramsInheritanceStrategy: 'always'
                }),
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
