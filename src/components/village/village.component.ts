import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {RouteConfig, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {CanActivate,OnActivate,ComponentInstruction } from '@angular/router-deprecated';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

import { LoginComponent } from '../login/login.component';
import { RepoService } from '../../services/repo.service';
import { Coordinate } from '../../model/coordinate';
import { Repo } from '../../model/repo';
import { Branch } from '../../model/branch';

declare var componentHandler;

@Component({
  templateUrl: './src/components/village/village.component.html',
  styleUrls: ['./src/components/village/village.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [RepoService, LoginComponent]
})
// @CanActivate(() => tokenNotExpired())
export class VillageComponent implements OnActivate, AfterViewChecked{

  branchs: Branch[];
  
  constructor(private _repoService: RepoService, private _login: LoginComponent) {}

  routerOnActivate(curr: ComponentInstruction ): void {
    let branchName = curr.params['name'];
    this._repoService.loadBranch(this._login.profile.nickname,branchName).subscribe(branchs => {
      this.branchs = branchs;
      console.log(this.branchs);
    });
  }

  ngAfterViewChecked() {
    componentHandler.upgradeDom();
  }



}