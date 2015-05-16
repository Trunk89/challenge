describe('[filters]', function () {
    'use strict';

    var quoteFilter;

    beforeEach(function () {
        module('formatter');

        inject(function (_quoteFilter_) {
            quoteFilter = _quoteFilter_;
        });
    });

    it('should add quotes to a string', function () {
        expect(quoteFilter('hello')).to.eql('"hello"');
        expect(quoteFilter('hello world')).to.eql('"hello world"');
    });
});