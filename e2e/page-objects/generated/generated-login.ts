import { by, element, browser, ElementFinder } from 'protractor';
import { UsernameStep } from '../usernamestep';
import { PasswordStep } from '../passwordstep';
/**
 * This Page Object was generated automatically.
 * Do not change this file, changes may be overwritten.
 * If you want to extend the functionality of this Page object use the extending page-objects in the parent folder.
 */

export class GeneratedLogin {
    public usernameStep: UsernameStep;
    public passwordStep: PasswordStep;

    constructor() {
        this.usernameStep = new UsernameStep();
        this.passwordStep = new PasswordStep();
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

    // ElementType: BUTTON
    getNextButton(): ElementFinder {
        return element(by.css('.e2e-nextbutton'));
    }

}
