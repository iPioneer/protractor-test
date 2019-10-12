module.exports = class StartPage {
    constructor() {
        this.url = '/';
        this.logo = $('a.header__logo[href="https://rozetka.com.ua"]');
        this.notebooksListItem = $('.menu-categories_type_main a.menu-categories__link[href*="computers-notebooks"]');
        this.notebooksCategory = $('a.menu__link.menu__link_background_gray[href*="https://rozetka.com.ua/notebooks/c80004/"]');
        this.notebooksPageTitle = $('header.title-page .pab-h1');
        this.notebooksWithSsdListItem = $('.pab-h4 a[href="https://rozetka.com.ua/notebooks/c80004/filter/preset=653/"]');
        this.ssdFilter = $('#reset_filter2173293');
        this.firstNotebook = $$('.g-i-tile.g-i-tile-catalog').get(0);
        this.secondNotebook = $$('.g-i-tile.g-i-tile-catalog').get(1);
        this.compareFirstNotebook = this.firstNotebook.element(by.name('comparison_new_catalog'));
        this.compareSecondNotebook = this.secondNotebook.element(by.name('comparison_new_catalog'));
        this.compareCount = $('.hub-i-count');
        this.comparisonButton = $('#comparison');
        this.comparisonTable = $$('.c-section-g-i.clearfix');
        this.compareProductsButton = $('.btn-link-to-compare .btn-link');
        this.comparisonTitle = $('.comparison-title-text');
        this.firstNotebookPropertyArray = $$('.comparison-t-cell:nth-child(even) .chars-value-inner, .comparison-t-cell:nth-child(even) .safe-merchant-label-title');
        this.secondNotebookPropertyArray = $$('.comparison-t-cell:nth-child(odd) .chars-value-inner, .comparison-t-cell:nth-child(odd) .safe-merchant-label-title');

        this.firstFinalArray = [];
        this.secondFinalArray = [];

        this.onlyDifferencesButton = $('[href = "#only-different"]');
        this.onlyDifferencesArray = $$('.comparison-t-row[name="different"]');
        this.counter = 0;
        this.differentPropertiesCounter;

    };

    open() {
        browser.get(this.url, 4000);
    }

    wait(value) {
        browser.sleep(value | 2000);
    };

    hover(element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(() => {
                browser.actions().mouseMove(element).perform();
            });
        }
        return element;
    }

    compare() {

        this.getTextValuesEven = (() => {
            let length = this.firstNotebookPropertyArray.count();
            for (let i = 0; i < length; i++) {
                this.firstFinalArray.push(this.firstNotebookPropertyArray.get(i).getText()
                );
            }
        })();

        this.getTextValuesOdd = (() => {
            let length = this.secondNotebookPropertyArray.count();
            for (let i = 0; i < length; i++) {
                this.secondFinalArray.push(this.secondNotebookPropertyArray.get(i).getText()
                );

            }
        })();

        for (let i = 0; i < this.firstFinalArray.length; i++) {
            for (let j = 0; j < this.secondFinalArray.length; j++) {
                if (this.firstFinalArray[i] !== this.secondFinalArray[j]) {
                    this.counter++;
                }
            }
        }
    };

};
