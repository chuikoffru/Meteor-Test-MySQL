import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './main.html';

users = new MysqlSubscription('users');
emails =  new MysqlSubscription('emails');

Template.hello.helpers({
  users: () => {
    return users.reactive();
  }
});

Template.listEmail.helpers({
  emails: () => {
    return emails.reactive();
  },
  aliasExists : (email, id) => {
    return email.hash.email.user_id == email.hash.id
  }
});