const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3000,
      user : 'sa',
      password : 'sa',
      database : 'escola'
    }
  });

  module.exports = knex; 