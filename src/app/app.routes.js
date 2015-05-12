(function () {
    'use strict';

    var router = angular.module('router', ['common']);

    router.config(['$routeProvider', 'CONFIG', function($routeProvider, CONFIG) {
        $routeProvider.
            when('/', {
                templateUrl: CONFIG.URL.ROUTE.MAIN
            }).
            when('/:id', {
                templateUrl: CONFIG.URL.ROUTE.MAIN,
                controller: 'DetailsController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

}());