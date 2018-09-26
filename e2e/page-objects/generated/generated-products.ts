import { by, element, browser, ElementFinder } from 'protractor';
/**
 * This Page Object was generated automatically.
 * Do not change this file, changes may be overwritten.
 * If you want to extend the functionality of this Page object use the extending page-objects in the parent folder.
 */

export class GeneratedProducts {

    constructor() {
    }


    // ElementType: BUTTON
    getOpenPopup(): ElementFinder {
        return element(by.css('.e2e-openpopup'));
    }

    // ElementType: UL
    getNavigation(): ElementFinder {
        return element(by.css('.e2e-navigation'));
    }

    // ElementType: A
    getNavigationDashboard(): ElementFinder {
        return this.getNavigation().element(by.css('.e2e-navigationdashboard'));
    }

    // ElementType: A
    getNavigationProdukte(): ElementFinder {
        return this.getNavigation().element(by.css('.e2e-navigationprodukte'));
    }

    // ElementType: A
    getNavigationBestellen(): ElementFinder {
        return this.getNavigation().element(by.css('.e2e-navigationbestellen'));
    }

    // ElementType: A
    getNavigationSize(): ElementFinder {
        return this.getNavigation().element(by.css('.e2e-navigationsize'));
    }

    // ElementType: APP-PRODUCT
    getProduct1(): ElementFinder {
        return element(by.css('.e2e-product1'));
    }

    // ElementType: BUTTON
    getProduct1Order(): ElementFinder {
        return this.getProduct1().element(by.css('.e2e-order'));
    }

    // ElementType: APP-PRODUCT
    getProduct2(): ElementFinder {
        return element(by.css('.e2e-product2'));
    }

    // ElementType: BUTTON
    getProduct2Order(): ElementFinder {
        return this.getProduct2().element(by.css('.e2e-order'));
    }

}
