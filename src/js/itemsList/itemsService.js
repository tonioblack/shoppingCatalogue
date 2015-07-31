/*globals shoppingCatalogue, angular, $timeout*/
(function () {
    'use strict';
    var srvc = function (httpFacade, $q, $timeout) {
        var items = [],
            observers = [],
            triggerItemsChange = function () {
                observers.forEach(function (x) {
                    x(items);
                });
            };

        return {
            modifyQty: function (config) {
                var settings = angular.extend({
                    item: null,
                    propertyName: "Qta",
                    qty: 1,
                }, config);
                settings.item[settings.propertyName] = settings.item[settings.propertyName] + settings.qty;
            },
            subscribeToItemsChange: function (config) {
                var settings = angular.extend({
                    func: null
                }, config);
                if (typeof settings.func === "function") {
                    observers.push(settings.func);
                }
            },
            getItems: function (config) {
                var def = $q.defer(),
                    settings = angular.extend({
                        refresh: false
                    }, config);
                $timeout(function () {

                    var items = [
                        {
                            "Codice" : "Art 3",
                            "Descrizione" : "latte",
                            "Prezzo" : "80.98",
                            "Reparto" : "Alimentari",
                            "Offerta" : "False"
                        },
                        {
                            "Codice" : "Art 2",
                            "Descrizione" : "pane",
                            "Prezzo" : "70.00",
                            "Reparto" : "Alimentari",
                            "Offerta" : "True"
                        },
                        {
                            "Codice" : "8001940000077",
                            "Descrizione" : "mele",
                            "Prezzo" : "75,12",
                            "Reparto" : "Frutta",
                            "Offerta" : "False"
                        },
                        {
                            "Codice" : "Art 1",
                            "Descrizione" : "mozzarella",
                            "Prezzo" : "77.11",
                            "Reparto" : "Banco",
                            "Offerta" : "False"
                        }
                    ];

                    def.resolve(items);
                   /* if (items.length === 0 || settings.refresh === true) {
                        httpFacade.getData()
                            .then(function (data) {
                                if (data && data.length && data.length > 0) {
                                    data.forEach(function (x) {
                                        x.Offerta = (x.Offerta === "True" || x.Offerta === "true" || x.Offerta === true);
                                    });
                                }
                                items = data;
                                triggerItemsChange(items);
                                def.resolve(items);

                            }, function (error) {
                                def.reject(error);
                            });
                    } else {
                        def.resolve(items);
                    }*/
                });
                return def.promise;
            }
        };
        // };
    };
    shoppingCatalogue.app
        .factory("itemsListService", ["httpFacade", "$q", "$timeout", srvc]);
}());