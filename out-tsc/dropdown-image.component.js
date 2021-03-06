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
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/scan');
require('rxjs/add/operator/startWith');
var DropdownImageComponent = (function () {
    function DropdownImageComponent() {
        this.itemSelected = new core_1.EventEmitter();
        this.noItem = { name: '', image: '' };
    }
    // ------ Lifecycle Hooks ---------------------------------------------------
    DropdownImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedSource = new Subject_1.Subject();
        this.showItemsSource = new Subject_1.Subject();
        this.activeItemSource = new Subject_1.Subject();
        var defaultItem = this.supreDefault
            ? this.supreItems.find(function (item) { return item.name === _this.supreDefault; })
            : this.supreItems[0];
        this.selected$ = this.selectedSource
            .startWith(defaultItem);
        this.showItems$ = this.showItemsSource
            .scan(function (current_state) { return !current_state; }, false)
            .startWith(false);
        this.activeItem$ = this.activeItemSource.startWith(this.noItem);
        this.selected$.distinctUntilChanged().subscribe(function (item) { return _this.itemSelected.emit(item.name); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownImageComponent.prototype, "supreDefault", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DropdownImageComponent.prototype, "supreItems", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DropdownImageComponent.prototype, "itemSelected", void 0);
    DropdownImageComponent = __decorate([
        core_1.Component({
            selector: 'supre-dropdown-image',
            template: require('./dropdown-image.component.html'),
            styles: [require('./dropdown-image.component.css')]
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownImageComponent);
    return DropdownImageComponent;
}());
exports.DropdownImageComponent = DropdownImageComponent;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-dropdown-image/src/dropdown-image.component.js.map