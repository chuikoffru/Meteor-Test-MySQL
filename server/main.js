import { Meteor } from 'meteor/meteor';
//import { console } from 'meteor/tools';

const liveDb = new LiveMysql({
  "host": "",
  "user": "",
  "password": "",
  "database": ""
});

Meteor.publish('emails', () => {
  return liveDb.select(
    'SELECT * FROM emails',
    [ { table: 'emails' } ]
  );
})


Meteor.publish('users', () => {

  return liveDb.select(
    'SELECT * FROM users',
    [ { table: 'users' } ]
  )

});

Meteor.startup(() => {
  console.log(Meteor.settings);  
});
