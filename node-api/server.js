const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Resposta ao usuário que fez a requisição');
})

app.listen(3003);

