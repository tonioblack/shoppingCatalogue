/*globals shoppingCatalogue*/
(function () {
    'use strict';
    var ctrl = function (qtyModifier,  items) {
        var self = this;

        self.viewState = {
            filter: ""
        };
        self.items = items;
        /*itemsListService.subscribeToItemsChange({
            func: function (it) {
                self.items = it;
            }
        });*/

        this.modifyQty = function (config) {
            qtyModifier.modifyQty(config);
        };

    };

    shoppingCatalogue.app
        .controller("itemsController", ["qtyModifier", "items", ctrl]);

}());