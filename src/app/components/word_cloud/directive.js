(function () {
    'use strict';

    var wordCloud = angular.module('wordCloud', ['config']);

    wordCloud.directive('cloud', ['CONFIG', '$templateCache', 'Navigation', '$rootScope', function (CONFIG, $templateCache, Navigation, $rootScope) {
        return {
            restrict: 'E',
            replace: true,
            template: $templateCache.get(CONFIG.URL.TEMPLATE.WORD_CLOUD),
            link: function(scope){
                scope.$watch('data', function(newValue, oldValue) {
                    if(newValue === oldValue && !scope.data) {
                        return;
                    }
                    reload(scope);
                }, true);

                function reload(scope) {
                    scope.topics = $rootScope.data.topics;
                }

                scope.selectWord = function(id) {
                    Navigation.navigate(id);
                };
            }
        };
    }]);

})();


