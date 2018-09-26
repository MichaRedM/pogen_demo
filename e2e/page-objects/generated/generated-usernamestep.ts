import { by, element, browser, ElementFinder } from 'protractor';
/**
 * This Page Object was generated automatically.
 * Do not change this file, changes may be overwritten.
 * If you want to extend the functionality of this Page object use the extending page-objects in the parent folder.
 */

export class GeneratedUsernameStep {

    constructor() {
    }


    // ElementType: DIV
    getStep1(): ElementFinder {
        return element(by.css('.e2e-step1'));
    }

    // ElementType: INPUT
    getInput(): ElementFinder {
        return this.getStep1().element(by.css('.e2e-input'));
    }

}
