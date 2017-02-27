"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SelectFieldComponent = (function () {
    function SelectFieldComponent() {
        this.options = ["daily", "weekly", "monthly"];
        this.fieldName = "Frequency";
    }
    return SelectFieldComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SelectFieldComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SelectFieldComponent.prototype, "fieldName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectFieldComponent.prototype, "value", void 0);
SelectFieldComponent = __decorate([
    core_1.Component({
        moduleId: 'selectfield',
        selector: 'selectfield',
        templateUrl: 'app/components/forms/selectfield/selectfield.component.html'
    }),
    __metadata("design:paramtypes", [])
], SelectFieldComponent);
exports.SelectFieldComponent = SelectFieldComponent;
//# sourceMappingURL=selectfield.component.js.map