import { IUser } from '../interfaces/IUser';

export const MyDatabaseFunctions = (function () {
  const users: IUser[] = [];

  return {
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
})();
