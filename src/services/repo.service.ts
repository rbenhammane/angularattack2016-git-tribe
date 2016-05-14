import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Branch}           from '../model/branch';
import {Repo}           from '../model/repo';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class RepoService {
	  constructor (private http: Http) {}

      loadRepoByUser (term: string): Repo[] {
        let urlRepos='https://api.github.com/users/'+term+'/repos';
      return this.http.get(urlRepos)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

        loadBranch (term: string, repo:string): Observable<Branch[]> {
        let urlRepos='https://api.github.com/repos/'+term+'/'+repo+'/branches';
      return this.http.get(urlRepos)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

    private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}