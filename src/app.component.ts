import {Component, bind, AfterViewChecked} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Router} from '@angular/router-deprecated';
import {Location} from '@angular/common';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import 'rxjs/Rx'; 

import {LoginComponent} from './components/login/login.component';
import {WorldComponent} from './components/world/world.component';
import {HelpComponent} from './components/help/help.component';
import {VillageComponent} from './components/village/village.component';
 

declare var componentHandler;

@Component({
    selector: 'git-tribe',
    template: `
    <div class="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
      <header class="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
          <div class="mdl-layout__header-row">
          <div class="logo" (click)="goHome()">
            <h3 class="logoText" > {{ title }}</h3>
            <span>Visually github like a game</span>
          </div>
          <div class="mdl-layout-spacer"></div>
            <div class="snippet-demo-container demo-button demo-button__raised-ripple">
            <button *ngIf="loggedIn()" (click)="goWorld()" class="help mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              My world
            </button>
            </div>
           <button *ngIf="!loggedIn()" (click)="login()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
              Sign in
           </button>

            <div *ngIf="loggedIn()">
      
            <img id="signout"  src="{{ profile.picture }}" width="60" class="mdl-button mdl-js-button mdl-button--icon">
    
    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        for="signout">
      <li class="mdl-menu__item" (click)="goHelp()">Help</li>
    <li class="mdl-menu__item" (click)="logout()" >Sign out</li>
    </ul>
           </div>
        </div>
      </header>
      <main class="demo-main mdl-layout__content">
        <div class="demo-container mdl-grid">
          <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
          <div class="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
            <router-outlet></router-outlet>
          </div>
        </div>
       
      </main>
    </div>
    `,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/',      name: 'Login',  component: LoginComponent },
  { path: '/world', name: 'World',  component: WorldComponent },
  { path: '/help', name: 'Help',  component: HelpComponent },
  {path: '/village/:name', name:'Village',component: VillageComponent}
])
export class AppComponent implements AfterViewChecked {

  ngAfterViewChecked() {
     componentHandler.upgradeDom();

  }

	title: string = 'Git Tribe Viewer';
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
        this._router.navigate(["World"]);
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

  goHome(){
    this._router.navigate(["Login"]);
  }

  goHelp(){
    this._router.navigate(["Help"]);
  }

  goWorld(){
    this._router.navigate(["World"]);
  }
}
