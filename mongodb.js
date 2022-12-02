// CRUD
// Create, Read, Update, Delete

const { MongoClient, ObjectId, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
// mongodb will automatically create this database, when we ask for it
const dataBaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
   // ensure that code only runs if an error does not exist.
   if (error) {
      return console.log('Unable to connect to database!');
   }

   console.log('connected correctly');
   const db = client.db(dataBaseName);




// message

});

// find out more about mongodb at the online documentation
