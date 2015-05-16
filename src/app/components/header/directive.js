(function () {
    'use strict';

    var header = angular.module('header',  ['config']);

    header.directive('mainHeader', ['CONFIG', '$templateCache', 'Messages', function (CONFIG, $templateCache, Messages) {
        return {
            restrict: 'E',
            replace: true,
            template: $templateCache.get(CONFIG.URL.TEMPLATE.HEADER),
            link: function(scope) {
                scope.$watch('messages', function(newValue, oldValue) {
                    if(newValue === oldValue && !scope.messages) {
                        return;
                    }
                    reload(scope);
                }, true);

                function reload(scope) {
                    scope.messages = Messages.get();
                }
            }

        };
    }]);

})();


