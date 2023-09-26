import { openDB } from 'idb';

async function createDB() {
  // Using https://github.com/jakearchibald/idb
  const db = await openDB('cookbook', 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
      // Switch over the oldVersion, *without breaks*, to allow the database to be incrementally upgraded.
    switch(oldVersion) {
     case 0:
       // Placeholder to execute when database is created (oldVersion is 0)
     case 1:
       // Create a store of objects
       const store = db.createObjectStore('recipes', {
         // The `id` property of the object will be the key, and be incremented automatically
           autoIncrement: true,
           keyPath: 'id'
       });
       // Create an index called `name` based on the `type` property of objects in the store
       store.createIndex('type', 'type');
     }
   }
  });
}