import { IUser } from '../interfaces/IUser';

const users: IUser[] = [];

export const MyDatabaseModule = {
  addUser(user: IUser): void {
    users.push(user);
  },
  removeUser(index: number): void {
    users.splice(index, 1);
  },
  showUser(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
