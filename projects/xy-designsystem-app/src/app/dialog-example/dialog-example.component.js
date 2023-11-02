"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DialogExampleDialog = exports.DialogExampleComponent = void 0;
var core_1 = require("@angular/core");
var DialogExampleComponent = /** @class */ (function () {
    function DialogExampleComponent(dialog) {
        this.dialog = dialog;
    }
    DialogExampleComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
        });
    };
    DialogExampleComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-dialog-example',
            templateUrl: './dialog-example.component.html',
            styleUrls: ['./dialog-example.component.scss']
        })
    ], DialogExampleComponent);
    return DialogExampleComponent;
}());
exports.DialogExampleComponent = DialogExampleComponent;
var DialogExampleDialog = /** @class */ (function () {
    function DialogExampleDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogExampleDialog.prototype.onClickOK = function ($event) {
        this.dialogRef.close();
    };
    DialogExampleDialog.prototype.onClickCancel = function ($event) {
        this.dialogRef.close();
    };
    DialogExampleDialog = __decorate([
        (0, core_1.Component)({
            selector: 'dialog-example-dialog',
            templateUrl: 'dialog-example-dialog.html'
        })
    ], DialogExampleDialog);
    return DialogExampleDialog;
}());
exports.DialogExampleDialog = DialogExampleDialog;
