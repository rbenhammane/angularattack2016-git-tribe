import {Component, bind} from '@angular/core';
import {RouteConfig, Router, APP_BASE_HREF, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {WorldComponent} from '../world/world.component';


@Component({
  templateUrl: './src/components/login/login.component.html',
	directives: [ROUTER_DIRECTIVES]
})
//@CanActivate(() => tokenNotExpired())
export class LoginComponent {
	
	lock = new Auth0Lock('6VzIODFHRWvGU14nGK0rMTuDwXBqBNmt', 'gittribe.auth0.com');

	profile: any;

	constructor(private _router: Router) {
		this.profile = JSON.parse(localStorage.getItem('profile'));
	}

  login() {
    let self = this;
    this.lock.show((err: string, profile: string, id_token: string) => {
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
    return tokenNotExpired();
  }

  goToWorld() {
  	this._router.navigate(['/World']);
  }

}
