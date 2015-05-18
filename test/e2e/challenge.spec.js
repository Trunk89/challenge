describe( 'E2E: challenge', function() {

    var headerTitle = element(by.css('.header .title')),
        wordList = element.all(by.repeater('topic in topics')),
        details = element(by.css('.details__container .details')),
        detailsText = element.all(by.css('.details .text')),
        detailsWord = element(by.css('.details .details__word')),
        detailsTotalMentions = element(by.css('.details .details__mentions')),
        detailsNegative = element(by.css('.details .negative')),
        detailsPositive = element(by.css('.details .positive')),
        detailsNeutral = element(by.css('.details .neutral'));

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get( '/challenge/min/' );
        browser.sleep(500);
    });

    it( 'should have the expected title', function () {
        var title='Challenge';

        expect(browser.getTitle()).toBe(title);
    });

    it( 'should show details of the word on click', function () {

    });

    it( 'should show details of the word on url change', function () {

    });

    it( 'details page should contain expected elements', function () {

    });


    it( 'should not show details of the word on the root level', function () {

        expect(details.);
        /*var firstHistory = historyList.get(0),
            secondHistory = historyList.get(1);

        expect(noItemsMessage.isDisplayed()).toBeTruthy();

        addInput.sendKeys('123');
        removeInput.sendKeys('123');

        addSubmit.click();
        removeSubmit.click();

        expect(firstHistory.isDisplayed()).toBeTruthy();
        expect(secondHistory.isDisplayed()).toBeTruthy();*/

    });

    it( 'should show error when the word index is invalid', function () {

        expect(noItemsMessage.isDisplayed()).toBeTruthy();
        expect(errorRemove.isDisplayed()).toBeFalsy();

        removeInput.sendKeys('123');

        removeSubmit.click();

        expect(errorRemove.isDisplayed()).toBeTruthy();

    });

});