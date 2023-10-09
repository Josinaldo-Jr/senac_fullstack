// carrega dotenv e sua configuração
require('dotenv').config();

// carrega db.js
const db = require("./db");

// carrega a biblioteca express
const express = require('express'); 

// cria uma aplicação chamando o express como função
const app = express();

// para reconhecer arquivo json
app.use(express.json());

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.deleteUser(id);
    res.sendStatus(204);
})

app.patch('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = req.body;
    db.updateUser(id, user);
    res.sendStatus(200);
})

app.post('/users', (req, res) => {
    const user = req.body;
    db.insertUser(user);
    res.sendStatus(201);
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(db.selectUsers(id));
})

app.get('/users', (req, res) => {
    res.json(db.selectUser());   
})

// rota onde fornece informação (get)
app.get('/', (req, res) => {
    res.json({
        message: "It's alive!"
    })
})

// inicia a aplicação (toda aplicação web precisa entrar em uma porta)
app.listen(process.env.PORT, () => {
    console.log("App now is running! Port 3000");
});