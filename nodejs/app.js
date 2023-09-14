const express = require('express');
const app = express();
const port = 3000;
const host = 'http://127.0.0.1';
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.html'));
});

// Aula 01:
app.get('/aula01', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/Aula01', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/Aula01', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/Aula01', 'contact.html'));
});
// --------------------------

// Aula 02:
app.use(express.static(path.join(__dirname, 'views/Aula02/atvs')));

app.get('/aula02', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/Aula02', 'index.html'))
});

app.get('/forca', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/Aula02/atvs', 'forca.html'))
});

app.get('/produtofinal', (req, res) => {    
    res.sendFile(path.join(__dirname,  'views/Aula02/atvs', 'produtofinal.html'));
  });

  app.get('/jogoDaVelhaGPT', (req, res) => {    
    res.sendFile(path.join(__dirname,  'views/Aula02/atvs', 'jogoDaVelhaGPT.html'));
  });
// --------------------------

// Aula 03:
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/aula03', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/Aula03', 'index.html'))
});

app.post('/parabens', (req, res) => {
  app.use(express.static(path.join(__dirname, 'views/Aula03')));
  res.sendFile(path.join(__dirname, 'views/Aula03', 'parabens.html'))
});
// --------------------------
app.listen(port, () => {
  console.log(`Example app listening on port ${host}:${port}`)
});