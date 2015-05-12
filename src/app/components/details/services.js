(function () {
    'use strict';

    var details = angular.module('details');

    /**
     * @constructor Word
     * @memberof details
     * @description Creates a word object
     */
    details.factory('Word', [function () {
        return {
            /**
             * @method create
             * @description Handles creating a new word object by given index
             * @memberof details.Word
             * @param {object} topic - topic with word name, popularity and sentiment
             *      @param {string} label - word name
             *      @param {string}
             */
            create: function create(topic) {
                var word = {},
                    sentiment = {};

                if (topic && topic.label && topic.volume) {
                    word.label = topic.label;
                    word.volume = topic.volume;

                    sentiment.positive = topic.sentiment.positive || 0;
                    sentiment.neutral = topic.sentiment.neutral || 0;
                    sentiment.negative = topic.sentiment.negative || 0;

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