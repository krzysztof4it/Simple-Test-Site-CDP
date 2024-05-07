import {ne} from "@faker-js/faker";
import HomePage from "../../page-objects/homePage";
import InputPage from "../../page-objects/inputPage";
import CheckboxPage from "../../page-objects/checkboxPage";

describe('SimpleTabs - Test simple tabs 1-4', () => {

    beforeEach(() => {
        const home = new HomePage()
        home.visitPage()

    });

    it('Test simple tabs 1-4', () => {
        const tab = new HomePage()
        const inputTab = new InputPage()
        tab.clickInputsTab()
        inputTab.typeNumberIntoFiled()
        cy.wait(2000)
        inputTab.typeTextIntoFiled()

    })

    it.only('Test Checkbox Tab', () => {
        const tab = new HomePage()
        const checkboxTab = new CheckboxPage()

        tab.clickCheckboxTab()
        checkboxTab.checkFirstCheckbox()
        checkboxTab.uncheckedLastCheckbox()

    })

})