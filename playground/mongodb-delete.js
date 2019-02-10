//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connent to MongoDB server');
  }
  console.log('Connected to MongoDB server');

 //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

 //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

// db.collection('Users').deleteMany({name: 'Sara'}).then((result) => {
//   console.log(result);
// })

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5c604b1604d8f77f807dc5b7')
}).then((results) => {
  console.log('Users');
  console.log(JSON.stringify(results, undefined, 2));
}, (err) => {
  console.log('Unable to delete user', err);
});


//  db.close();
});
