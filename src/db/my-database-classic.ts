import { IUser } from '../interfaces/IUser';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: IUser[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  addUser(user: IUser): void {
    this.users.push(user);
  }

  removeUser(index: number): void {
    this.users.splice(index, 1);
  }

  showUser(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
