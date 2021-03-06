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
var _about_1 = require('./+about');
var router_1 = require('@angular/router');
var _contact_1 = require('./+contact');
var _home_1 = require('./+home');
var EffectiveFunicularAppComponent = (function () {
    function EffectiveFunicularAppComponent() {
        this.title = 'Effective Funicular Demo SPA';
    }
    EffectiveFunicularAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'effective-funicular-app',
            templateUrl: 'effective-funicular.component.html',
            styleUrls: ['effective-funicular.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/', component: _home_1.HomeComponent },
            { path: '/about', component: _about_1.AboutComponent },
            { path: '/contact', component: _contact_1.ContactComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], EffectiveFunicularAppComponent);
    return EffectiveFunicularAppComponent;
}());
exports.EffectiveFunicularAppComponent = EffectiveFunicularAppComponent;
//# sourceMappingURL=effective-funicular.component.js.map