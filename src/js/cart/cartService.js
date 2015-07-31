/*globals shoppingCatalogue, angular, $timeout*/
(function () {
    'use strict';
    var srvc = function () {
        var items = [];
        return {
            modifyQty : function (config) {
                var settings = angular.extend({
                    items: items,
                    item: null,
                    propertyName: "Qta",
                    qty: 1,
                    addRemove: true,
                    modifyList: true
                }, config);

            }
        };
    };
    shoppingCatalogue.app
        .factory("cartService", [srvc]);
}());