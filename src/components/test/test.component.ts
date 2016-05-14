import {Component} from '@angular/core';
import {Repo} from '../../model/repo';
import {Branch} from '../../model/branch';
import {RepoService} from '../../services/repo.service';
import {OnInit} from '@angular/core';


@Component({
    selector: 'my-test',
    template: `
    		  <div class="col-md-6">
    		  <div>
    		  	<input #term (keyup)="loadRepoByUser(term.value)" placeholder="userName"/>
    		  </div>
    		   <h2>Repos</h2>
              <ul class="heroes">
                <li *ngFor="let repo of repos">
                  <span class="badge">{{repo.full_name}}</span> {{repo.full_name}}
                </li>
              </ul>
              </div>
          <div>
          <input #branch (keyup)="loadBranch(term.value,branch.value)" placeholder="branch"/>
          </div>
               `,
  providers: [RepoService]
})
export class TestComponent implements OnInit { 
   repos : Repo[];
   branchs:Branch[];
   errorMessage: string;
   userName: string;
   branch:string;
  constructor(private _repoService: RepoService) {console.log('test OK'); }

  loadRepoByUser (term: string) {
  this.userName=term;
    this._repoService.loadRepoByUser(term)
                     .subscribe(
                       repos => this.repos = repos,
                       error =>  this.errorMessage = <any>error);
  }

  loadBranch (term: string,branch:string) {
  this.userName=term;
    this._repoService.loadBranch(term,branch)
                     .subscribe(
                       branchs => this.branchs = branchs,
                       error =>  this.errorMessage = <any>error);
                     console.log(this.branchs);
  }

  ngOnInit() {
   // this.getHeroes();
  }
}

