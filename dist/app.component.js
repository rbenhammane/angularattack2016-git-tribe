System.register(['@angular/core', '@angular/router-deprecated', 'angular2-jwt', 'rxjs/Rx', './components/login/login.component', './components/world/world.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, angular2_jwt_1, login_component_1, world_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (_1) {},
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (world_component_1_1) {
                world_component_1 = world_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this.title = 'Git Tribe Viewer';
                    this.lock = new Auth0Lock('6VzIODFHRWvGU14nGK0rMTuDwXBqBNmt', 'gittribe.auth0.com');
                    this.profile = JSON.parse(localStorage.getItem('profile'));
                }
                AppComponent.prototype.ngAfterViewChecked = function () {
                    componentHandler.upgradeDom();
                };
                AppComponent.prototype.login = function () {
                    var _this = this;
                    var self = this;
                    this.lock.show(function (err, profile, id_token) {
                        if (err) {
                            throw new Error(err);
                        }
                        _this.profile = profile;
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                        self.loggedIn();
                    });
                };
                AppComponent.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    this.loggedIn();
                };
                AppComponent.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'git-tribe',
                        template: "\n    <div class=\"demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100\">\n      <header class=\"demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800\">\n          <div class=\"mdl-layout__header-row\">\n          <div class=\"logo\">\n            <h3 class=\"logoText\"> {{ title }}</h3>\n            <span>Visually github like a game</span>\n          </div>\n          <div class=\"mdl-layout-spacer\"></div>\n            <div class=\"snippet-demo-container demo-button demo-button__raised-ripple\">\n            <button *ngIf=\"!loggedIn()\" class=\"help mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\n              Help\n            </button>\n            </div>\n           <button *ngIf=\"!loggedIn()\" (click)=\"login()\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored\">\n              Sign in\n           </button>\n\n            <div *ngIf=\"loggedIn()\">\n      \n            <img id=\"signout\"  src=\"{{ profile.picture }}\" width=\"60\" class=\"mdl-button mdl-js-button mdl-button--icon\">\n    \n    <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\"\n        for=\"signout\">\n      <li class=\"mdl-menu__item\">Help</li>\n    <li class=\"mdl-menu__item\" (click)=\"logout()\" >Sign out</li>\n    </ul>\n           </div>\n        </div>\n      </header>\n      <main class=\"demo-main mdl-layout__content\">\n        <div class=\"demo-container mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone\"></div>\n          <div class=\"demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n       \n      </main>\n    </div>\n    ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/world', name: 'World', component: world_component_1.WorldComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
