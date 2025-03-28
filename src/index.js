const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('CORINTHIANS CAMPEÃO PAULISTA 2025');
});

app.get('/api/test', (req, res) => {
  res.send({ message: 'Endpoint de teste na branch master com merge conflito teste'});
});

app.get('/api/test-2', (req, res) => {
  res.send({ message: 'Branch master endpoint teste 2'});
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});

module.exports = app;
