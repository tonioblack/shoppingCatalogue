/*globals shoppingCatalogue*/
(function () {
    'use strict';
    var ctrl = function (itemsListService, items) {
        var self = this;

        self.viewState = {
            filter: ""
        };
        self.items = items;
        itemsListService.subscribeToItemsChange({
            func: function (it) {
                self.items = it;
            }
        });

    };

    shoppingCatalogue.app
        .controller("itemsController", ["itemsListService", "items", ctrl]);

}());