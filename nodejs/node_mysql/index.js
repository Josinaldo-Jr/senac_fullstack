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

app.delete('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await db.deleteUser(id);
    res.sendStatus(204);
})

app.patch('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const user = req.body;
    await db.updateUser(id, user);
    res.sendStatus(200);
})

app.post('/users', async (req, res) => {
    const user = req.body;
    await db.insertUser(user);
    res.sendStatus(201);
})

app.get('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const results = await db.selectUsers(id);
    res.json(results);
})

app.get('/users', async (req, res) => {
    const results = await db.selectUser();
    res.json(results);   
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