import { by, element, browser, ElementFinder } from 'protractor';
/**
 * This Page Object was generated automatically.
 * Do not change this file, changes may be overwritten.
 * If you want to extend the functionality of this Page object use the extending page-objects in the parent folder.
 */

export class GeneratedPasswordStep {

    constructor() {
    }


    // ElementType: DIV
    getStep2(): ElementFinder {
        return element(by.css('.e2e-step2'));
    }

    // ElementType: INPUT
    getInput(): ElementFinder {
        return this.getStep2().element(by.css('.e2e-input'));
    }

}
