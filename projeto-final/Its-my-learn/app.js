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

// Cria um servidor 
app.listen(3000, () => console.log('server is running'));