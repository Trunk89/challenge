(function () {
    'use strict';

    var details = angular.module('details');

    /**
     * @constructor Balance
     * @memberof details
     * @description Creates a word object
     */
    details.factory('Word', ['$rootScope', function ($rootScope) {
        return {
            /**
             * @method create
             * @description Handles creating a new word object by given index
             * @memberof details.Word
             * @param {int} index - index of the chosen word
             */
            create: function create(index) {
                var topics = $rootScope.data.topics,
                    word = {},
                    sentiment = {};

                if (topics[index]) {
                    word.label = topics[index].label;
                    word.volume = topics[index].volume;

                    sentiment.positive = topics[index].sentiment.positive || 0;
                    sentiment.neutral = topics[index].sentiment.neutral || 0;
                    sentiment.negative = topics[index].sentiment.negative || 0;

                    word.sentiment = sentiment;

                    word.error = false;
                } else {
                    word.error = true;
                }

                return word;
            }
        };
    }]);

}());