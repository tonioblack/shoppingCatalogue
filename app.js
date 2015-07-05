'use strict';
var
    cors = require("cors"),
    http = require('http'), ///dipendenza di express
    express = require('express'), ///framework per server web
    app = express(), //
    server = http.createServer(app),
    routes = require('./routes');/// Oggetto Custom che gestisce la navigazione tra le pagine e le chiamate ai WS
///---------->FINE DICHIARAZIONI  <-----------///



app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    //app.use(express['static'](__dirname + '/AngularApp'));
    //app.use(express['static'](__dirname + '/dist'));
    app.use(express['static'](__dirname ));
    app.use(app.router);
    app.use(cors());
});



routes.configRoutes(app);

server.listen(3000);