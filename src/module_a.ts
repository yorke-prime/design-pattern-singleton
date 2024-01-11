import { MyDatabaseFunctions } from './db/my-database-functions';

// const myDatabaseClassic = MyDatabaseClassic.instance;
// const myDatabaseClassic = MyDatabaseModule;
const myDatabaseClassic = MyDatabaseFunctions;
myDatabaseClassic.addUser({ age: 20, name: 'Ana' });
myDatabaseClassic.addUser({ age: 22, name: 'Luciano' });
// myDatabaseClassic.removeUser(1);
myDatabaseClassic.showUser();

export { myDatabaseClassic };
