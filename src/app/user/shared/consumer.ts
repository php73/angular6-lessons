import {User} from './user';
import {Customer} from './customer';

export class Consumer extends User {
  public birthDate: Date;
  public enterDate: Date;
  public leaveDate: Date;
  public customer: Customer | null;
}
