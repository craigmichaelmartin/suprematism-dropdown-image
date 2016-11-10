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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var common_1 = require('@angular/common');
var dropdown_image_component_1 = require('./dropdown-image.component');
var core_1 = require('@angular/core');
__export(require('./dropdown-image.component'));
var DropdownImageModule = (function () {
    function DropdownImageModule() {
    }
    DropdownImageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            declarations: [
                dropdown_image_component_1.DropdownImageComponent,
            ],
            exports: [
                dropdown_image_component_1.DropdownImageComponent,
            ],
            entryComponents: [
                dropdown_image_component_1.DropdownImageComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownImageModule);
    return DropdownImageModule;
}());
exports.DropdownImageModule = DropdownImageModule;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-dropdown-image/src/index.js.map