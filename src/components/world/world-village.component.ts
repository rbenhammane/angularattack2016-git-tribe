import {Component, Input, OnInit} from '@angular/core';
import {RouteConfig, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

import { ConstService } from '../../services/const.service'

@Component({
  selector: 'world-village',
  templateUrl: './src/components/world/world-village.component.html',
  styleUrls: ['./src/components/world/world-village.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@CanActivate(() => tokenNotExpired())
export class WorldVillageComponent implements OnInit {

  @Input() x: int;
  @Input() y: int;
  @Input() diameter: int;
  @Input() repo: any;

  constructor() {}

  ngOnInit() {
     // console.log(this.x);
  }

  getWorldRadius: int () {
    return this.diameter / 2 - 20;
  }

}