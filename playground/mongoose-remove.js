const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({id: '5c645c63e5e6b26b8f795fd2'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5c645c63e5e6b26b8f795fd2').then((todo) => {
  console.log(todo);
});
