const express = require('express');

const app = express();

//Templates com ejs:
app.set('view engine', 'ejs');

//Usando arquivo estatico
app.use(express.static('public'));

// Para analisar dados de formulário
app.use(express.urlencoded({ extended: false }));

// Para analisar dados JSON
app.use(express.json());

//Rotas:
//Rota para favicon
app.get('/LogoIcone.png', (req, res) => {
	res.sendFile(__dirname + '/public/img/LogoIcone.png');
  });
  
//Rota para raiz
app.get('/', (req, res) => {
	res.render("index", {titulo:"Início"});
});

//Rota para sobre
app.get('/sobre', (req, res) => {
	res.render("sobre", {titulo:"Sobre"});
});

//Rota para my learns
app.get('/mylearns', (req, res) => {
	res.render("mylearns", {titulo:"My Learns"});
});

//Rota para atv1
app.get('/atv1', (req, res) => {
	res.render("atv1", {titulo:"Atividade 01"});
});

//Rota para atv2
app.get('/atv2', (req, res) => {
	res.render("atv2", {titulo:"Atividade 02"});
});

//Rota para atv3
app.get('/atv3', (req, res) => {
	res.render("atv3", {titulo:"Atividade 03"});
});

//Rota para login
app.get('/login', (req, res) => {
	res.render("login", {titulo:"Login"});
});

//Rota para cadastro
app.get('/cadastro', (req, res) => {
	res.render("cadastro", {titulo:"Cadastro do Usuário"});
});

//Rota para cadastro bem sucediado
app.get('/add', (req, res) => {
	res.render("add", {titulo:"Usuário Cadastrado"});
});

//Rota para receber os dados cadastrados
app.post('/add', (req, res) => {
	res.send(req.body.nome);
});

//Rota para esqueceu a senha
app.get('/esqueceu_senha', (req, res) => {
	res.render("esqueceu_senha", {titulo:"Esqueci a Senha"});
});


// Cria um servidor 
app.listen(3000, () => console.log('server is running'));