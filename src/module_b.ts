import { MyDatabaseFunctions } from './db/my-database-functions';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunctions;
myDatabaseClassic.addUser({ age: 20, name: 'Maria' });
myDatabaseClassic.addUser({ age: 22, name: 'Jose' });
myDatabaseClassic.showUser();

console.log(MyDatabaseFunctions === myDatabaseClassicFromModuleA);
