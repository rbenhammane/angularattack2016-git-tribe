System.register(['@angular/core', '@angular/router', 'angular2-jwt'], function(exports_1, context_1) {
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
    var core_1, router_1, angular2_jwt_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            let AppComponent_1;
            let AppComponent = AppComponent_1 = class AppComponent {
                constructor() {
                    this.title = 'Git Village Viewer';
                    this.lock = new Auth0Lock('6VzIODFHRWvGU14nGK0rMTuDwXBqBNmt', 'gittribe.auth0.com');
                }
                login() {
                    let self = this;
                    this.lock.show((err, profile, id_token) => {
                        if (err) {
                            throw new Error(err);
                        }
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                        console.log();
                        self.loggedIn();
                    });
                }
                logout() {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                }
                loggedIn() {
                    return angular2_jwt_1.tokenNotExpired();
                }
            };
            AppComponent = AppComponent_1 = __decorate([
                core_1.Component({
                    selector: 'git-village',
                    template: `
    <h1>Welcome to Angular2 with Auth0</h1>
    <button *ngIf="!loggedIn()" (click)="login()">Login</button>
    <button *ngIf="loggedIn()" (click)="logout()">Logout</button>
    	<a [routerLink]="['UserForm']"><h1>{{title}}</h1></a>
	    <router-outlet></router-outlet>
    `,
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [router_1.ROUTER_PROVIDERS]
                }),
                router_1.Routes([
                    { path: '/d', component: AppComponent }
                ]), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
