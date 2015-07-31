/*globals shoppingCatalogue, angular, $timeout*/
(function () {
    'use strict';
    var srvc = function (itemsListService, cartService) {
        return {
            modifyQty: function (config) {
                var settings = angular.extend({
                        items: [],
                        item: null,
                        propertyName: "Qta",
                        qty: 0,
                        addRemove: true
                    }, config),
                    itemIndex;
                itemsListService.modifyQty(settings);

                /*if (settings.item[settings.propertyName] === undefined ||
                 settings.item[settings.propertyName] === null) {
                 settings.item[settings.propertyName] = 0;
                 }

                 settings.item[settings.propertyName] = settings.item[settings.propertyName] + settings.qty;

                 if (settings.addRemove) {
                 itemIndex = settings.items.indexOf(settings.item);
                 if (itemIndex === 0 &&
                 settings.item[settings.propertyName] > 0) {
                 settings.items.push(settings.item);
                 }
                 if (itemIndex > 0 &&
                 settings.item[settings.propertyName] === 0) {
                 settings.items.splice(itemIndex, 0);
                 }
                 }*/
            }

        };
    };
    shoppingCatalogue.app
        .factory("qtyModifier", ["itemsListService", "cartService", srvc]);
}());