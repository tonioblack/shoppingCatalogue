/*globals shoppingCatalogue*/
(function () {
    'use strict';

    var config = function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('itemsList', {
                url: "/",
                templateUrl: "js/itemsList/itemsList.html",
                controller: "itemsController",
                controllerAs: "c",
                resolve: {
                    items: ["itemsListService", function (itemsListService) {
                        return itemsListService.getItems()
                            .then(function (items) {
                                return items;
                            });
                    }]
                }
            })
            .state('cart', {
                url: "/cart",
                templateUrl: "js/cart/cart.html",
                controller: "cartController",
                controllerAs: "c"
            });
    };

    shoppingCatalogue.app
        .config(["$stateProvider", "$urlRouterProvider", config]);
}());