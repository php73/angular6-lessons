export class User {
  private _id: number;
  public family: string;
  public name: string;
  public surname: string;
  public phone: string;

  constructor(id: number, family: string, name: string, surname: string = '') {
    this._id = id;
    this.family = family;
    this.name = name;
    this.surname = surname;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    if (this._id) {
      return;
    }
    this._id = value;
  }
}
