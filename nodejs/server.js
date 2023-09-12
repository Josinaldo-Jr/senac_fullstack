const http = require('http');
const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

// Responde com "hello world" quando uma requisição GET é feita na página inicial.
// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'about.html'));
// });

// app.get('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname, 'contact.html'));
// });

app.listen(port, () => {
  console.log(`App de Exemplo escutando na porta ${port}!
  http://${hostname}:${port}`);
});
