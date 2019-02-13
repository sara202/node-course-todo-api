const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');
//
// var id = '5c64281e777e63010c27a24611';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By id', todo);
// }).catch((e) => console.log(e));

var userId = '5c607600102af4b0288fc0b1';

User.findById(userId).then((user) => {
if (!user) {
  return console.log('User not found');
}
console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
