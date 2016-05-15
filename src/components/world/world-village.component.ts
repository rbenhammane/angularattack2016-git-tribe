import {Component, Input} from '@angular/core';
import {RouteConfig, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

import { ConstService } from '../../services/const.service';
import { Repo } from '../../model/repo';

@Component({
  selector: 'world-village',
  templateUrl: './src/components/world/world-village.component.html',
  styleUrls: ['./src/components/world/world-village.component.css']
})
@CanActivate(() => tokenNotExpired())
export class WorldVillageComponent {

  @Input() i: number;
  @Input() x: number;
  @Input() y: number;
  @Input() diameter: number;
  @Input() repo: Repo;

  constructor(private _router: Router) {}

  getWorldRadius () {
    return this.diameter / 2 + 20;
  }

  getDate (date: string) {
    return new Date(date);
  }

  goToVillage(repo: Repo) {
    this._router.navigate(['/Village', {name:repo.name}]);
  }
  
  


}