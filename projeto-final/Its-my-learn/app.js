const express = require('express');

const app = express();

//Templates com ejs:
app.set('view engine', 'ejs');

//Usando arquivo estatico
app.use(express.static('public'));


//Rotas:
//Rota para raiz
app.get('/', (req, res) => {
	res.render("index", {titulo:"Início"});
});

//Rota para sobre
app.get('/sobre', (req, res) => {
	res.render("sobre", {titulo:"Sobre"});
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

// Cria um servidor 
app.listen(3000, () => console.log('server is running'));