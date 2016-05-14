import {Committer} from './committer';
import {ShaUrl} from './shaurl';
export class CommitDetails {
  author: Committer;
  committer: Committer;
  message: string;
  tree:ShaUrl;
  comment_count:number;
  url:string;
}