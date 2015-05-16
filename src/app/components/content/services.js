(function () {
    'use strict';

    var content = angular.module('content');

    /**
     * @constructor Endpoint
     * @memberof content
     * @description discover API data
     *
     * @method loadInitialData
     *
     */
    content.factory('Endpoint', ['$rootScope', 'Ajax', 'ENV_CONFIG', '$sessionStorage', function ($rootScope, Ajax, ENV_CONFIG, $sessionStorage) {
        return {
            loadInitialData: function getInitialData() {
                function fetchData(response) {
                    if (!$sessionStorage.data) {
                        $sessionStorage.$default({
                            messages: response.data.messages,
                            data: response.data.data
                        });
                    }

                    $rootScope.messages = response.data.messages;
                    $rootScope.data = response.data.data;

                }

                function error() {
                    $rootScope.generalError = true;
                }

                function load() {
                    if ($sessionStorage && $sessionStorage.data) {
                        var response = {
                            data: {
                                messages: $sessionStorage.messages,
                                data: $sessionStorage.data
                            }
                        };
                        fetchData(response);
                    } else {
                        Ajax.get({
                            url: ENV_CONFIG.ENDPOINT.API,
                            success: fetchData,
                            error: error
                        });
                    }

                }

                load();
            }

        };
    }]);
}());