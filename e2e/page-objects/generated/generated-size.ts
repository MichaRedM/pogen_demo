import { by, element, browser, ElementFinder, ElementArrayFinder } from 'protractor';
/**
 * This Page Object was generated automatically.
 * Do not change this file, changes may be overwritten.
 * If you want to extend the functionality of this Page object use the extending page-objects in the parent folder.
 */

export class GeneratedSize {

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

    // ElementType: TR
    getSizeTableRow(): ElementArrayFinder {
        return element.all(by.css('.e2e-sizetablerow'));
    }

    // ElementType: TD
    getSizeTableClo(sizeTableRowIndex: number): ElementArrayFinder {
        return this.getSizeTableRow().get(sizeTableRowIndex).all(by.css('.e2e-sizetableclo'));
    }

    // ElementType: BUTTON
    getSizeTableRowButton(sizeTableRowIndex: number): ElementFinder {
        return this.getSizeTableRow().get(sizeTableRowIndex).element(by.css('.e2e-sizetablerowbutton'));
    }

}
