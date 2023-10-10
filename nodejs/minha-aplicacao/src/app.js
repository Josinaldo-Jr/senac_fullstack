const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

// Configurações do Knex para acessar o banco de dados
const db = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'senac@1',
    database: 'minha_aplicacao'
  }
});

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', './views');
app.set('view engine', 'ejs');

// Rotas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Rota de redirecionamento após o login
app.get('/redirecionamento', (req, res) => {
  // Implemente a lógica de redirecionamento aqui
  // Verifique se o usuário está autenticado e redirecione-o conforme necessário
  res.render('redirecionamento', { username: 'Nome do Usuário' });
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
