describe("[details services]", function () {

    beforeEach(
        module('details')
    );

    describe("Word", function () {
        var Word;

        beforeEach(inject(function(_Word_){
            Word = _Word_;
        }));

        it('contains create() method', function() {
            expect(Word.create).to.exist;
        });

        it('should return a Word object and be valid', function() {
            var topic = {label: "Word", sentiment: { positive: "5", neutral: 0, negative: "5"}, volume: "10"},
                word = Word.create(topic);

            expect(word).to.be.eql({label: "Word", volume: "10", sentiment: { positive: "5", neutral: 0, negative: "5"}, error: false});

            topic = {label: "Word Two", volume: "0", sentiment: { }};
            word = Word.create(topic);

            expect(word).to.be.eql({label: 'Word Two', volume: '0', sentiment: {positive: 0, neutral: 0, negative: 0}, error: false});
        });

        it('should return a Word object with error if it does not have a label or volume', function() {
            var topic = {sentiment: { positive: "5", neutral: "5", negative: "5"}, volume: "50"},
                word = Word.create(topic);

            expect(word).to.be.eql({error: true});

            topic = {label: "Word Two", sentiment: { positive: "5", neutral: "5", negative: "5"}};
                word = Word.create(topic);

            expect(word).to.be.eql({error: true});

        });

        it('should return a Word object with error if topic is not an object', function() {
            var topic = 'label',
                word = Word.create(topic);

            expect(word).to.be.eql({error: true});

        });
    });

});