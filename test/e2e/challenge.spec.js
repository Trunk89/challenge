var helper = require('./helper.spec.js');

describe( 'E2E: challenge', function() {

    var headerTitle = element(by.css('.header .title')),
        wordList = element.all(by.repeater('topic in topics')),
        details = element(by.css('.details__container .details')),
        detailsTexts = element.all(by.css('.details .text')),
        detailsWord = element(by.css('.details .details__word')),
        detailsTotalMentions = element(by.css('.details .details__mentions')),
        detailsNegative = element(by.css('.details .negative')),
        detailsPositive = element(by.css('.details .positive')),
        detailsNeutral = element(by.css('.details .neutral')),
        detailsError = element(by.css('.details .details__error'));

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get( '/challenge/min/' );
        browser.sleep(500);
    });

    it( 'should have the expected title', function () { console.log(helper);
        var title='Challenge';

        expect(browser.getTitle()).toBe(title);
    });

    it( 'should contain expected elements for page header', function () {
        expect(headerTitle.isDisplayed()).toBeTruthy();
    });

    it( 'should show details of the word on click', function () {
        expect(helper.hasClass(details, 'ng-hide')).toBeTruthy();

        var randomWord = wordList.get(2);
        randomWord.click();

        expect(helper.hasClass(details, 'ng-hide')).toBeFalsy();
        expect(details.isDisplayed()).toBeTruthy();
    });

    it( 'should show details of the word on url change', function () {
        expect(helper.hasClass(details, 'ng-hide')).toBeTruthy();

        browser.get( '/challenge/min/#/7' );

        expect(helper.hasClass(details, 'ng-hide')).toBeFalsy();
        expect(details.isDisplayed()).toBeTruthy();
    });

    it( 'should contain expected elements for details page', function () {
        browser.get( '/challenge/min/#/4' );

        expect(detailsTexts.count()).toEqual(5);
        expect(detailsWord.isDisplayed()).toBeTruthy();
        expect(detailsNegative.isDisplayed()).toBeTruthy();
        expect(detailsNeutral.isDisplayed()).toBeTruthy();
        expect(detailsPositive.isDisplayed()).toBeTruthy();
        expect(detailsTotalMentions.isDisplayed()).toBeTruthy();
    });

    it( 'should not show details of the word on the root level', function () {
        expect(helper.hasClass(details, 'ng-hide')).toBeTruthy();
    });

    it( 'should show error when the word index is invalid', function () {
        browser.get( '/challenge/min/#/text' ); //invalid index number

        expect(detailsError.isDisplayed()).toBeTruthy();
    });

});