const express = require('express');
const app = express();
const port = 3000;
const host = 'http://127.0.0.1';
const path = require('path');


app.use(express.static(path.join(__dirname, 'atvs')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'atvs', 'index.html'))
});

app.get('/produtofinal', (req, res) => {    
    res.sendFile(path.join(__dirname, 'atvs', 'produtofinal.html'));
  });

  app.get('/jogoDaVelhaGPT', (req, res) => {    
    res.sendFile(path.join(__dirname, 'atvs', 'jogoDaVelhaGPT.html'));
  });
  app.get('/jogoDaVelha', (req, res) => {    
    res.sendFile(path.join(__dirname, 'atvs', 'jogoDaVelhaGPT.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${host}:${port}`)
});