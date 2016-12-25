const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database');
  }

  console.log('Successful connected to database');

  // db.collection('Todos').insertOne({
  //   text: 'Some text',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Something error', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Carl',
    age: 21,
    location: 'Cavite'
  }, (err, result) => {
    if (err) {
      return console.log('Something err', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
