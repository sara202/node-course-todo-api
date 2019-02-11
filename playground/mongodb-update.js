//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connent to MongoDB server');
  }
  console.log('Connected to MongoDB server');

 db.collection('Todos').findOneAndUpdate({
   _id: new ObjectID('5c60580a09afc015c05d15c8')
 }, {
   $set: {
     completed: true
   }
 }, {
   returnOriginal: false
 }).then((result) => {
   console.log(result)
 })

 db.collection('Users').findOneAndUpdate({
   _id: new ObjectID('5c6049d47a9ff7a1cc0bb52d')
 }, {
   $set: {
     name: 'Sara'
   },
   $inc: {
     age: 1
   }
 }, {
   returnOriginal: false
 }).then((result) => {
   console.log(result)
 })



//  db.close();
});
