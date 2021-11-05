const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { tasks } = require('./routes');

app.use(bodyParser.json());

const port = 3001;

app.use('/tasks', tasks);


app.listen(port, () => console.log(`Backend rodando aqui na porta ${port}!`));