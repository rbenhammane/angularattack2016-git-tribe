System.register(['@angular/core', '@angular/router-deprecated', '../login/login.component', '../../services/repo.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, login_component_1, repo_service_1;
    var VillageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (repo_service_1_1) {
                repo_service_1 = repo_service_1_1;
            }],
        execute: function() {
            VillageComponent = (function () {
                function VillageComponent(_repoService, _login) {
                    this._repoService = _repoService;
                    this._login = _login;
                }
                VillageComponent.prototype.routerOnActivate = function (curr) {
                    var _this = this;
                    var branchName = curr.params['name'];
                    this._repoService.loadBranch(this._login.profile.nickname, branchName).subscribe(function (branchs) {
                        _this.branchs = branchs;
                        console.log(_this.branchs);
                    });
                };
                VillageComponent.prototype.ngAfterViewChecked = function () {
                    componentHandler.upgradeDom();
                };
                VillageComponent = __decorate([
                    core_1.Component({
                        templateUrl: './src/components/village/village.component.html',
                        styleUrls: ['./src/components/village/village.component.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [repo_service_1.RepoService, login_component_1.LoginComponent]
                    }), 
                    __metadata('design:paramtypes', [repo_service_1.RepoService, login_component_1.LoginComponent])
                ], VillageComponent);
                return VillageComponent;
            }());
            exports_1("VillageComponent", VillageComponent);
        }
    }
});
