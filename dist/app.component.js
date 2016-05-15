System.register(['@angular/core', '@angular/router-deprecated', 'rxjs/Rx', './components/login/login.component', './components/world/world.component', './components/test/test.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, login_component_1, world_component_1, test_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (_1) {},
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (world_component_1_1) {
                world_component_1 = world_component_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Git Tribe Viewer';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'git-tribe',
                        template: "\n    <div class=\"demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100\">\n      <header class=\"demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800\">\n        <div class=\"mdl-layout__header-row\">\n          <span class=\"mdl-layout-title\">{{ title }}</span>\n          <div class=\"mdl-layout-spacer\"></div>\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\">\n\n          </div>\n        </div>\n      </header>\n      <div class=\"demo-ribbon\"></div>\n      <main class=\"demo-main mdl-layout__content\">\n        <div class=\"demo-container mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone\"></div>\n          <div class=\"demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n        <footer class=\"demo-footer mdl-mini-footer\">\n          <div class=\"mdl-mini-footer--left-section\">\n            <ul class=\"mdl-mini-footer--link-list\">\n              <li><a href=\"#\">Help</a></li>\n              <li><a href=\"#\">Privacy and Terms</a></li>\n              <li><a href=\"#\">User Agreement</a></li>\n            </ul>\n          </div>\n        </footer>\n      </main>\n    </div>\n    ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/world', name: 'World', component: world_component_1.WorldComponent },
                        { path: '/test', name: 'Test', component: test_component_1.TestComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
