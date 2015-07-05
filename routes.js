/*globals setTimeout*/

(function () {
    'use strict';

    var configRoutes,
        fs = require('fs'),
        url = require('url'),
        Items,

        Items = eval("(function(){return" + fs.readFileSync('testData/items.json') + ";})();");


    configRoutes = function (app) {
        app.get('/', function (request, response) {
            response.redirect('src/index.html');
        });

        app.post('/service.json', function (request, response) {
            switch (request.query.action) {
                case 'price':
                    setTimeout(function () {
                        response.send(Price);
                    }, 20);
                    break;
                case 'availability':
                    setTimeout(function () {
                        response.send(Availability);
                    }, 20);
                    break;
                case 'getchars':
                    setTimeout(function () {
                        response.send(Chars);
                    }, 20);
                    break;
            }
        });

        app.get('/service.json', function (request, response) {
            setTimeout(function () {
                response.send(Items);
            }, 0);
        });


    };

    module.exports = {configRoutes: configRoutes};
}());
