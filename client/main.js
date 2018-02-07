import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './main.html';

//Подписываемся на обновления поступающие из БД MySQL
users = new MysqlSubscription('users');
emails =  new MysqlSubscription('emails');

//Создаем хелпер - реактивный список пользователей
Template.hello.helpers({
  users: () => users.reactive()
});

//Создаем два хелпера, реактивный список емайлов, и проверку соответствия определенного емайла пользователю
Template.listEmail.helpers({
  emails: () => emails.reactive(),
  aliasExists : (email, id) => email.hash.email.user_id == email.hash.id
});