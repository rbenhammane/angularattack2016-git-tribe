import {Component, bind} from '@angular/core';
import {RouteConfig, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';


@Component({
  templateUrl: './src/components/world/world.component.html',
  styleUrls: ['./src/components/world/world.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@CanActivate(() => tokenNotExpired())
export class WorldComponent {

}
