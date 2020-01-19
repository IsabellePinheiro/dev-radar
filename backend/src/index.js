const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const {setupWebsocket} = require('./websocket');
const app = express();

const server = http.Server(app);
setupWebsocket(server);
mongoose.connect('mongodb+srv://isabelle:omnistack@cluster0-z5uau.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json())
app.use(routes);
server.listen(3333);


// METODOS HTTP: GTE, POST, UT, DELETE

//Query Params: Fltro, paginação, ordenação - request.query

//Route Params: Identificar um recurso na alteração ou remoção de um dado (deletar, editar) - request.params

//Body: Dados para criação ou  alteraçao de um registro - request.body

