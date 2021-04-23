"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var app = express();
var schoolService_1 = require("./routes/schoolService");
//settings
app.set('port', process.env.PORT || 3000); // definim la variable PORT 
// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
//Routes
app.use('/', schoolService_1["default"]); //Configurem qui sera l'autoritat de les rutes que arribin amb /app
exports["default"] = app;
