System.register(['@angular/core', '@angular/router-deprecated', 'angular2-jwt'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, angular2_jwt_1;
    var LoginComponent;
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
            }],
        execute: function() {
            let LoginComponent = class LoginComponent {
                constructor(_router) {
                    this._router = _router;
                    this.lock = new Auth0Lock('6VzIODFHRWvGU14nGK0rMTuDwXBqBNmt', 'gittribe.auth0.com');
                    this.profile = JSON.parse(localStorage.getItem('profile'));
                }
                login() {
                    let self = this;
                    this.lock.show((err, profile, id_token) => {
                        if (err) {
                            throw new Error(err);
                        }
                        this.profile = profile;
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                        self.loggedIn();
                    });
                }
                logout() {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    this.loggedIn();
                }
                loggedIn() {
                    return angular2_jwt_1.tokenNotExpired();
                }
                goToWorld() {
                    this._router.navigate(['/World']);
                }
            };
            LoginComponent = __decorate([
                core_1.Component({
                    templateUrl: './src/components/login/login.component.html',
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [router_deprecated_1.Router])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
