const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api/produtos', (req, res) => {
  fs.readFile('./shared/produtos.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao carregar os produtos.');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
