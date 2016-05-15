import {Component, OnInit} from '@angular/core';
import {RouteConfig, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

import { WorldHelper } from './world.helper';
import { WorldVillageComponent } from './world-village.component';
import { ConstService } from '../../services/const.service'

@Component({
  templateUrl: './src/components/world/world.component.html',
  styleUrls: ['./src/components/world/world.component.css'],
  directives: [ROUTER_DIRECTIVES, WorldVillageComponent],
  providers: [ConstService]
})
@CanActivate(() => tokenNotExpired())
export class WorldComponent implements OnInit {

  mousex: int = 0;
  mousey: int = 0;

  worldtop: int = 0;
  worldleft: int = 0;

  rotationRadius: int;
  repos: any;
  coordinates: Coordinate[];
  lakesCoordinates: Coordinate[];
  forestsCoordinates: Coordinate[];
  treesCoordinates: Coordinate[];
  stonesCoordinates: Coordinate[];

  constructor(private _consts: ConstService) {
  }

  ngOnInit() {
    this.repos = this._consts.repos;
    this.coordinates = WorldHelper.generateVillagesCoords(this.repos);
    this.worldtop = (600 - this.getDiameter()) / 2;
    this.worldleft = (600 - this.getDiameter()) / 2;

    this.lakesCoordinates = WorldHelper.generateLakesCoords(this.coordinates);
    this.forestsCoordinates = WorldHelper.generateForestsCoordinates(this.coordinates, this.lakesCoordinates);
    this.treesCoordinates = WorldHelper.generateTreesCoordinates(this.coordinates, this.lakesCoordinates, this.forestsCoordinates);
    this.stonesCoordinates = WorldHelper.generateStonesCoordinates(this.coordinates, this.lakesCoordinates, this.forestsCoordinates, this.treesCoordinates);
  }

  floor(val: number) {
    return Math.floor(val);
  }

  getDiameter() {
    return (600 * (2 * Math.floor((WorldHelper.rotationRadius + 7) / 15) + 1));
  }

  getWorldRadius: int () {
    return this.getDiameter() / 2 + 20;
  }

  move(event) {

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
  }

  reset () {
    this.mousex = 0;
    this.mousey = 0;
  }

}