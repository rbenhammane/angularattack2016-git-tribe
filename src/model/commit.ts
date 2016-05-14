import {CommitDetails} from './commit-details';
import {User} from './user';
import {ShaUrl} from './shaurl';
export class Commit {
  sha: string;
  commit: CommitDetails;
  author: User;
  committer:User;
  parents:ShaUrl[];
}