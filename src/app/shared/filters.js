(function () {
    'use strict';

    var formatter = angular.module('formatter', []);

    formatter.filter('quote', [function() {
        return function(unformattedType) {

            return ['"', unformattedType, '"'].join('');
        };
    }]);



}());