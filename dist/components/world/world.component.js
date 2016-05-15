System.register(['@angular/core', '@angular/router-deprecated', 'angular2-jwt', './world.helper', './world-village.component', '../../services/const.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, router_deprecated_2, angular2_jwt_1, world_helper_1, world_village_component_1, const_service_1;
    var WorldComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
                router_deprecated_2 = router_deprecated_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (world_helper_1_1) {
                world_helper_1 = world_helper_1_1;
            },
            function (world_village_component_1_1) {
                world_village_component_1 = world_village_component_1_1;
            },
            function (const_service_1_1) {
                const_service_1 = const_service_1_1;
            }],
        execute: function() {
            WorldComponent = (function () {
                function WorldComponent(_consts) {
                    var _this = this;
                    this._consts = _consts;
                    this.mousex = 0;
                    this.mousey = 0;
                    this.worldtop = 0;
                    this.worldleft = 0;
                    this.getWorldRadius = function () {
                        return _this.getDiameter() / 2 + 20;
                    };
                }
                WorldComponent.prototype.ngOnInit = function () {
                    this.repos = this._consts.repos;
                    this.coordinates = world_helper_1.WorldHelper.generateVillagesCoords(this.repos);
                    this.worldtop = (600 - this.getDiameter()) / 2;
                    this.worldleft = (600 - this.getDiameter()) / 2;
                    this.lakesCoordinates = world_helper_1.WorldHelper.generateLakesCoords(this.coordinates);
                    this.forestsCoordinates = world_helper_1.WorldHelper.generateForestsCoordinates(this.coordinates, this.lakesCoordinates);
                    this.treesCoordinates = world_helper_1.WorldHelper.generateTreesCoordinates(this.coordinates, this.lakesCoordinates, this.forestsCoordinates);
                    this.stonesCoordinates = world_helper_1.WorldHelper.generateStonesCoordinates(this.coordinates, this.lakesCoordinates, this.forestsCoordinates, this.treesCoordinates);
                };
                WorldComponent.prototype.floor = function (val) {
                    return Math.floor(val);
                };
                WorldComponent.prototype.getDiameter = function () {
                    return (600 * (2 * Math.floor((world_helper_1.WorldHelper.rotationRadius + 7) / 15) + 1));
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
                        providers: [const_service_1.ConstService]
                    }),
                    router_deprecated_2.CanActivate(function () { return angular2_jwt_1.tokenNotExpired(); }), 
                    __metadata('design:paramtypes', [const_service_1.ConstService])
                ], WorldComponent);
                return WorldComponent;
            }());
            exports_1("WorldComponent", WorldComponent);
        }
    }
});
