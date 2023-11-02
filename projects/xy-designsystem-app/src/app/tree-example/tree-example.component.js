"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TreeExampleComponent = void 0;
var core_1 = require("@angular/core");
var TreeExampleComponent = /** @class */ (function () {
    function TreeExampleComponent() {
        this.TREE_DATA = [
            {
                id: 'Fruit',
                name: 'Fruit',
                expand: true,
                icon: 'construction',
                clickRight: function () { alert('clickRight called'); },
                rightIcon: 'more_vert',
                children: [
                    {
                        id: 'Apple',
                        name: 'Apple',
                        icon: 'construction',
                        action: function () { alert('action called'); },
                        clickRight: function () { alert('clickRight called'); },
                        rightIcon: 'more_vert',
                        clickRight2: function () { alert('clickRight2 called'); },
                        rightIcon2: 'more_vert'
                    },
                    {
                        id: 'Banana',
                        name: 'Banana'
                    },
                    {
                        id: 'Fruit loops',
                        name: 'Fruit loops'
                    }
                ]
            },
            {
                id: 'Vegetables',
                name: 'Vegetables',
                expand: true,
                children: [
                    {
                        id: 'Green',
                        name: 'Green',
                        children: [
                            {
                                id: 'Broccoli',
                                name: 'Broccoli'
                            },
                            {
                                id: 'Brussels sprouts',
                                name: 'Brussels sprouts'
                            }
                        ]
                    },
                    {
                        id: 'Orange',
                        name: 'Orange',
                        children: [
                            {
                                id: 'Pumpkins',
                                name: 'Pumpkins'
                            },
                            {
                                id: 'Carrots',
                                name: 'Carrots'
                            }
                        ]
                    },
                ]
            },
        ];
    }
    TreeExampleComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-tree-example',
            templateUrl: './tree-example.component.html',
            styleUrls: ['./tree-example.component.scss']
        })
    ], TreeExampleComponent);
    return TreeExampleComponent;
}());
exports.TreeExampleComponent = TreeExampleComponent;
