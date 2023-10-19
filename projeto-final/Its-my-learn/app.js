// if (process.env.NODE_ENV !== "production") {
// 	require("dotenv").config()
// }

// import { fastify } from "fastify";
// import { DatabasePostgres } from './database-postgres.js';
// import { request, response } from "express";

const express = require('express');
// const app = fastify();
const app = express();
const bcrypt = require("bcrypt");

// const initializePassport = require("./passport-config");

// const flash = require("express-flash");
// const session = require("express-session");


// initializePassport(
// 	passport,
// 	email => usuarios.find(usuario => usuario.email === email)
// );

// const database = new DatabasePostgres();

const usuarios = [];

//Templates com ejs:
app.set('view engine', 'ejs');

//Usando arquivo estatico
app.use(express.static('public'));

// Para analisar dados de formulário
app.use(express.urlencoded({ extended: false }));

// Para analisar dados JSON
app.use(express.json());

// app.use(flash());

// app.use(session({
// 	secret: process.env.SESSION_SECRET,
// 	resave: false, //resalva a sessão variavel se nada for mudado
// 	saveUninitialized: false
// }));

// app.use(passport.initialize());

// app.use(passport.session());

//----------------------------Rotas:
//Rota para favicon
app.get('/LogoIcone.png', (req, res) => {
	res.sendFile(__dirname + '/public/img/LogoIcone.png');
});

//Rota para raiz
app.get('/', (req, res) => {
	res.render("index", { titulo: "Início" });
});

//Rota para sobre
app.get('/sobre', (req, res) => {
	res.render("sobre", { titulo: "Sobre" });
});

//Rota para my learns
app.get('/mylearns', (req, res) => {
	res.render("mylearns", { titulo: "My Learns" });
});

//Rota para atv1
app.get('/atv1', (req, res) => {
	res.render("atv1", { titulo: "Atividade 01" });
});

//Rota para atv2
app.get('/atv2', (req, res) => {
	res.render("atv2", { titulo: "Atividade 02" });
});

//Rota para atv3
app.get('/atv3', (req, res) => {
	res.render("atv3", { titulo: "Atividade 03" });
});

//Rota para login
app.get('/login', (req, res) => {
	res.render("login", { titulo: "Login" });
});

// //Rota para entrada via login
// app.post('/login', passport.authenticate("local", {

// 	sucessRedirect: "/",
// 	failureRedirect: "/login",
// 	failureFlash: true

// }));

//Rota para cadastro
app.get('/cadastro', (req, res) => {
	res.render("cadastro", { titulo: "Cadastro do Usuário" });
});

//Rota para cadastro bem sucediado
app.get('/add', (req, res) => {
	res.render("add", { titulo: "Usuário Cadastrado" });
});

//Rota para receber os dados cadastrados
app.post('/cadastro', async (req, res) => {
	try {
		const hashedSenha = await bcrypt.hash(req.body.senha, 10)
		usuarios.push({
			nome: req.body.nome,
			email: req.body.email,
			senha: hashedSenha
		})
		return response.status(201).send();
		// Mostra os Usuários
		console.log(usuarios);
		res.redirect("/add")
	} catch (e) {

		console.log(e);
		res.redirect("/cadastro");
	}

});

// app.post('/cadastro', async (request, response) => {
//     const { nome, email, senha } = request.body;

//     await database.create ({
//         nome,
//         email,
//         senha,
//     });

//     return response.status(201).send();
// });


//Rota para esqueceu a senha
app.get('/esqueceu_senha', (req, res) => {
	res.render("esqueceu_senha", { titulo: "Esqueci a Senha" });
});
//----------------------------Fim das Rotas:


// Cria um servidor 
app.listen(3000, () => console.log('server is running'));