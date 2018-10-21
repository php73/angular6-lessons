import {User} from './user';
import {Consumer} from './consumer';

export class Executor extends User {
  public consumers: Consumer[];
}
