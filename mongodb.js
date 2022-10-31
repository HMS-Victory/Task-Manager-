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






   // HOW TO UPDATE DATA IN MONGODB
   // db.collection('users').updateOne({
   // filter the item to update
   //    _id: new ObjectID("633ee51f0c956e516137af32")
   // }, {
   // how to update the item
   //    $inc: {
   //       age: 1
   //    }
   //    // this syntax, makes far more sense to me
   // }).then((result) => {
   //    console.log(result)
   // }).catch((error) => {
   //    console.log(error);
   // });;

   // Update large chunks of data at once
   // db.collection('tasks').updateMany({
   // filter the ones to change
   //    completed: false
   // }, {
   // changing the data
   //    $set: {
   //       completed: true
   //    }
   // }).then((result) => {
   //    console.log(result.modifiedCount);
   // }).catch((error) => {
   //    console.log(error);
   // });

   // db.collection('tasks').deleteMany({
   //    completed: true

   // }).then((result) => {
   //    console.log(result);
   // }).catch((error) => {
   //    console.log(error);
   // });

   // db.collection('users').deleteOne({
   //    _id: new ObjectId('633da8790df419904762248a')
   // }).then((result) => {
   //    console.log(result);
   // }).catch((error) => {
   //    console.log(error);
   // });
});

// find out more about mongodb at the online documentation
