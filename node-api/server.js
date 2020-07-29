const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o Database
mongoose.connect("mongodb://localhost:27017/nodeapi", { useUnifiedTopology: true , useNewUrlParser: true});
require('./src/models/Product'); //Registrando o Model na nossa aplicação.


app.use('/api', require('./src/routes'));

app.listen(3003);

