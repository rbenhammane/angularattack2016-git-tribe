import {Component, bind} from '@angular/core';
import {RouteConfig, Router, APP_BASE_HREF, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';


@Component({
  selector: 'world',
  template: `
    World
  `,
  directives: [ROUTER_DIRECTIVES]
})
//@CanActivate(() => tokenNotExpired())
export class WorldComponent {

}
