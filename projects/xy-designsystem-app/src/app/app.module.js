"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var button_example_component_1 = require("./button-example/button-example.component");
var material_module_1 = require("./material.module");
var input_example_component_1 = require("./input-example/input-example.component");
var select_example_component_1 = require("./select-example/select-example.component");
var forms_1 = require("@angular/forms");
var checkbox_example_component_1 = require("./checkbox-example/checkbox-example.component");
var radio_example_component_1 = require("./radio-example/radio-example.component");
var typography_example_component_1 = require("./typography-example/typography-example.component");
var card_example_component_1 = require("./card-example/card-example.component");
var dialog_example_component_1 = require("./dialog-example/dialog-example.component");
var slide_toggle_example_component_1 = require("./slide-toggle-example/slide-toggle-example.component");
var elevation_example_component_1 = require("./elevation-example/elevation-example.component");
var example_component_1 = require("./example/example.component");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var tree_example_component_1 = require("./tree-example/tree-example.component");
var home_component_1 = require("./home/home.component");
var container_example_component_1 = require("./container-example/container-example.component");
var yds_module_1 = require("../../../../dist/yds-components/lib/yds.module");
var button_toggle_example_component_1 = require("./button-toggle-example/button-toggle-example.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                button_example_component_1.ButtonExampleComponent,
                input_example_component_1.InputExampleComponent,
                select_example_component_1.SelectExampleComponent,
                checkbox_example_component_1.CheckboxExampleComponent,
                radio_example_component_1.RadioExampleComponent,
                typography_example_component_1.TypographyExampleComponent,
                card_example_component_1.CardExampleComponent,
                dialog_example_component_1.DialogExampleComponent,
                dialog_example_component_1.DialogExampleDialog,
                slide_toggle_example_component_1.SlideToggleExampleComponent,
                elevation_example_component_1.ElevationExampleComponent,
                example_component_1.ExampleComponent,
                tree_example_component_1.TreeExampleComponent,
                home_component_1.HomeComponent,
                container_example_component_1.ContainerExampleComponent,
                button_toggle_example_component_1.ButtonToggleExampleComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                forms_1.ReactiveFormsModule,
                yds_module_1.XyModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
