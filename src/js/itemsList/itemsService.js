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
                    if (items.length === 0 || settings.refresh === true) {
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
                    }
                });
                return def.promise;
            }
        };
        // };
    };
    shoppingCatalogue.app
        .factory("itemsListService", ["httpFacade", "$q", "$timeout", srvc]);
}());