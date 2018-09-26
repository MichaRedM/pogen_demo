import { by, element, browser, ElementFinder } from 'protractor';
/**
 * This Page Object was generated automatically.
 * Do not change this file, changes may be overwritten.
 * If you want to extend the functionality of this Page object use the extending page-objects in the parent folder.
 */

export class GeneratedDashboard {

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

    // ElementType: H2
    getTitle(): ElementFinder {
        return element(by.css('.e2e-title'));
    }

    // ElementType: BUTTON
    getClosePopup(): ElementFinder {
        return element(by.css('.e2e-closepopup'));
    }

    // ElementType: P
    getPopup(): ElementFinder {
        return element(by.css('.e2e-popup'));
    }

}
