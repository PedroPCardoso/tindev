const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const server = express();
mongoose.connect('mongodb+srv://pedroAdmin:macarao08@cluster0-o8exh.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser:true}
);

server.use(express.json());
server.use(routes);
server.listen(3333);