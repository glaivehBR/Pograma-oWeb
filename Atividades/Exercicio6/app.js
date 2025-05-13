const express = require('express');
const app = express();
const port = 3000;

// Middleware para poder lidar com JSON
app.use(express.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Página inicial!');
});

// /about - GET
app.get('/about', (req, res) => {
  res.send('Sobre nós');
});

// /data - POST
app.post('/data', (req, res) => {
  const body = req.body;
  res.send(`Dados recebidos com sucesso: ${JSON.stringify(body)}`);
});

// /users - GET
app.get('/users', (req, res) => {
  res.send('Lista de usuários');
});

// /users/:userid - GET
app.get('/users/:userid', (req, res) => {
  const userId = req.params.userid;
  res.send(`Informações do usuário com ID: ${userId}`);
});

// /users/signin - GET
app.get('/users/signin', (req, res) => {
  res.send('Página de login');
});

// /users/signup - GET
app.get('/users/signup', (req, res) => {
  res.send('Página de cadastro');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});