System.register(['@angular/core', '@angular/router-deprecated', './world.helper', './world-village.component', '../login/login.component', '../../services/repo.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, world_helper_1, world_village_component_1, login_component_1, repo_service_1;
    var WorldComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (world_helper_1_1) {
                world_helper_1 = world_helper_1_1;
            },
            function (world_village_component_1_1) {
                world_village_component_1 = world_village_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (repo_service_1_1) {
                repo_service_1 = repo_service_1_1;
            }],
        execute: function() {
            WorldComponent = (function () {
                function WorldComponent(_repoService, _login) {
                    this._repoService = _repoService;
                    this._login = _login;
                    this.mousex = 0;
                    this.mousey = 0;
                    this.worldtop = 0;
                    this.worldleft = 0;
                }
                WorldComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._repoService.loadRepoByUser(this._login.profile.nickname).subscribe(function (repos) {
                        _this.repos = repos;
                        _this.coordinates = world_helper_1.WorldHelper.generateVillagesCoords(_this.repos);
                        _this.worldtop = (600 - _this.getDiameter()) / 2;
                        _this.worldleft = (600 - _this.getDiameter()) / 2;
                        _this.lakesCoordinates = world_helper_1.WorldHelper.generateLakesCoords(_this.coordinates);
                        _this.forestsCoordinates = world_helper_1.WorldHelper.generateForestsCoordinates(_this.coordinates, _this.lakesCoordinates);
                        _this.treesCoordinates = world_helper_1.WorldHelper.generateTreesCoordinates(_this.coordinates, _this.lakesCoordinates, _this.forestsCoordinates);
                        _this.stonesCoordinates = world_helper_1.WorldHelper.generateStonesCoordinates(_this.coordinates, _this.lakesCoordinates, _this.forestsCoordinates, _this.treesCoordinates);
                    });
                };
                WorldComponent.prototype.ngAfterViewChecked = function () {
                    componentHandler.upgradeDom();
                };
                WorldComponent.prototype.floor = function (val) {
                    return Math.floor(val);
                };
                WorldComponent.prototype.getDiameter = function () {
                    return (600 * (2 * Math.floor((world_helper_1.WorldHelper.rotationRadius + 7) / 15) + 1));
                };
                WorldComponent.prototype.getWorldRadius = function () {
                    return this.getDiameter() / 2 + 20;
                };
                WorldComponent.prototype.move = function (event) {
                    if (event.buttons === 1) {
                        if (this.mousex !== 0 && this.mousey !== 0) {
                            this.worldtop += event.y - this.mousey;
                            this.worldleft += event.x - this.mousex;
                            if (this.worldtop < 600 - this.getDiameter()) {
                                this.worldtop = 600 - this.getDiameter();
                            }
                            if (this.worldleft < 600 - this.getDiameter()) {
                                this.worldleft = 600 - this.getDiameter();
                            }
                            if (this.worldtop > 0) {
                                this.worldtop = 0;
                            }
                            if (this.worldleft > 0) {
                                this.worldleft = 0;
                            }
                        }
                        this.mousex = event.x;
                        this.mousey = event.y;
                    }
                };
                WorldComponent.prototype.reset = function () {
                    this.mousex = 0;
                    this.mousey = 0;
                };
                WorldComponent = __decorate([
                    core_1.Component({
                        templateUrl: './src/components/world/world.component.html',
                        styleUrls: ['./src/components/world/world.component.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, world_village_component_1.WorldVillageComponent],
                        providers: [repo_service_1.RepoService, login_component_1.LoginComponent]
                    }), 
                    __metadata('design:paramtypes', [repo_service_1.RepoService, login_component_1.LoginComponent])
                ], WorldComponent);
                return WorldComponent;
            }());
            exports_1("WorldComponent", WorldComponent);
        }
    }
});
