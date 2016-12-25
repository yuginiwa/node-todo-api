const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database');
  }

  console.log('Successful connected to database');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Sleep'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Sleep'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({text: 'Sleep'}).then((result) => {
    console.log(result);
  });
  // db.close();
});
