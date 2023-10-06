module.exports = {
    development: {
      client: 'mysql2',
      connection: {
        host: 'localhost',
        user: 'root',
        password: 'senac@1',
        database: 'minha_aplicacao'
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './src/migrations'
      }
    }
  };
  