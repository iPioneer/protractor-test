var StartPage = require('../pages/startPage.js');
var page = new StartPage();

describe('Rozetka start page', function () {
    it('should be opened', function () {
        browser.waitForAngularEnabled(false);
        page.open();
        page.wait();
        expect(page.logo.isDisplayed()).toBe(true);

    });

    it('then user goes to "Notebooks" category', function () {
        browser.waitForAngularEnabled(false);
        page.hover(page.notebooksListItem);
        page.hover(page.notebooksCategory).click();
        page.wait(6000);
        expect(page.notebooksPageTitle.isDisplayed()).toBe(true);
    });

    it('then user goes to "Notebooks with SSD" category', function () {
        browser.waitForAngularEnabled(false);
        page.hover(page.notebooksWithSsdListItem).click();
        page.wait();
        expect(page.ssdFilter.isDisplayed()).toBe(true);
    });

    it('then choses 2 first notebooks with SSD', function () {
        browser.waitForAngularEnabled(false);
        page.hover(page.compareFirstNotebook).click();
        page.hover(page.compareSecondNotebook).click();
        page.wait();
        expect(page.compareCount.getText()).toEqual('2');
    });

    it('then open comparison page', function () {
        browser.waitForAngularEnabled(false);
        page.hover(page.comparisonButton).click();
        page.wait();
        expect(page.comparisonTable.count()).toBeGreaterThan(0);
        page.hover(page.compareProductsButton).click();
        page.wait();
        expect(page.comparisonTitle.isDisplayed()).toBe(true);
    });

    it('then calculate number of differencies', function () {
        browser.waitForAngularEnabled(false);
        page.wait();
        page.compare();
        page.hover(page.onlyDifferencesButton).click();
        page.differentPropertiesCounter = page.onlyDifferencesArray.count();
        expect(page.counter).toEqual(page.differentPropertiesCounter);
    });

});


