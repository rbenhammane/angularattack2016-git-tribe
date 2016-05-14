import {Component, bind} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {Location} from '@angular/common';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

declare var Auth0Lock;

@Component({
    selector: 'git-village',
    template: `
    <h1>Welcome to Angular2 with Auth0</h1>
    <button *ngIf="!loggedIn()" (click)="login()">Login</button>
    <button *ngIf="loggedIn()" (click)="logout()">Logout</button>
    	<a [routerLink]="['UserForm']"><h1>{{title}}</h1></a>
	    <router-outlet></router-outlet>
    `,
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})
@Routes([
  { path: '/d',  component: AppComponent }
])
export class AppComponent {
	private title: string = 'Git Village Viewer';

  lock = new Auth0Lock('6VzIODFHRWvGU14nGK0rMTuDwXBqBNmt', 'gittribe.auth0.com');


  login() {
    let self = this;
    this.lock.show((err: string, profile: string, id_token: string) => {
        if (err) {
          throw new Error(err);
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', id_token);

        console.log(
          // this.jwtHelper.decodeToken(id_token),
          // this.jwtHelper.getTokenExpirationDate(id_token),
          // this.jwtHelper.isTokenExpired(id_token)
        );

        self.loggedIn();
      });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
