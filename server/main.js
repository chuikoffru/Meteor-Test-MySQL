import { Meteor } from 'meteor/meteor';
//import { console } from 'meteor/tools';

const liveDb = new LiveMysql({
  "host": "216.55.176.76",
  "user": "meteor_test",
  "password": "QFAZ7xMSWN7xQXkapUoO",
  "database": "meteor_test"
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
