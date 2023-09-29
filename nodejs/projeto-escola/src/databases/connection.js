const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'senac@1',
      database : 'escola'
    }
  });

  module.exports = knex; 



