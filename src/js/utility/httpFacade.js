/*globals angular, shoppingCatalogue*/
(function () {
    'use strict';
    var srvc = function ($http, $q) {
        var getData = function (config) {
                var def = $q.defer(),
                    settings = angular.extend({
                        serviceUrl: shoppingCatalogue.settings.baseUrl + "/service.json"
                    }, config);

                $http({
                    method: "GET",
                    url: settings.serviceUrl
                })
                    .success(function (data, status, headers, config) {
                        def.resolve(data);
                    }).
                    error(function (data, status, headers, config) {
                        def.reject();
                    });

                return def.promise;
            },
            setData = function (config) {

            };
        return {
            getData: getData,
            setData: setData
        };
    };
    angular.module("utility")
        .factory("httpFacade", ["$http", "$q", srvc]);
}());