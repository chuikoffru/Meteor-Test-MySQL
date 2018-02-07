import { Meteor } from 'meteor/meteor'

//Создаем новое подключение к БД MySQL
const liveDb = new LiveMysql({
  "host": "",
  "user": "",
  "password": "",
  "database": ""
})

//Отправляем изменения в таблице emails подписчикам
Meteor.publish('emails', () => {
  
  return liveDb.select(
    'SELECT * FROM emails',
    [
      { table: 'emails' } 
    ]
  )

})

//Отправляем изменения в таблице users подписчикам
Meteor.publish('users', () => {

  return liveDb.select(
    'SELECT * FROM users',
    [ 
      { table: 'users' } 
    ]
  )

})
