import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Branch}           from '../model/branch';
import {Repo}           from '../model/repo';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class RepoService {
  constructor(private http: Http) {}

  loadRepoByUser(user: string) {
    // let urlRepos = 'https://api.github.com/users/' + user + '/repos';
    let urlRepos = 'https://api.github.com/users/johnpapa/repos';
    return this.http.get(urlRepos)
      .map(this.extractData)
      .catch(this.handleError);
  }

  loadBranch(user: string, repo: string): Observable < Branch[] > {
    let urlRepos = 'https://api.github.com/repos/' + user + '/' + repo + '/branches';
    return this.http.get(urlRepos)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.json() || {};
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}