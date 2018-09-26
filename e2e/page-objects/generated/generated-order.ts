import { by, element, browser, ElementFinder } from 'protractor';
/**
 * This Page Object was generated automatically.
 * Do not change this file, changes may be overwritten.
 * If you want to extend the functionality of this Page object use the extending page-objects in the parent folder.
 */

export class GeneratedOrder {

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

    // ElementType: INPUT
    getFirstName(): ElementFinder {
        return element(by.css('.e2e-firstname'));
    }

    // ElementType: INPUT
    getLastName(): ElementFinder {
        return element(by.css('.e2e-lastname'));
    }

    // ElementType: INPUT
    getStreet(): ElementFinder {
        return element(by.css('.e2e-street'));
    }

    // ElementType: INPUT
    getStreetNumber(): ElementFinder {
        return element(by.css('.e2e-streetnumber'));
    }

    // ElementType: INPUT
    getZip(): ElementFinder {
        return element(by.css('.e2e-zip'));
    }

    // ElementType: INPUT
    getCity(): ElementFinder {
        return element(by.css('.e2e-city'));
    }

    // ElementType: INPUT
    getCountry(): ElementFinder {
        return element(by.css('.e2e-country'));
    }

    // ElementType: INPUT
    getTelefon(): ElementFinder {
        return element(by.css('.e2e-telefon'));
    }

    // ElementType: BUTTON
    getSubmit(): ElementFinder {
        return element(by.css('.e2e-submit'));
    }

}
