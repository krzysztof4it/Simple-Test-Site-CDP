import {ne} from "@faker-js/faker";
import HomePage from "../../page-objects/homePage";
import InputPage from "../../page-objects/inputPage";
import CheckboxPage from "../../page-objects/checkboxPage";
import HoversPage from "../../page-objects/hoversPage";
import DropdownListPage from "../../page-objects/dropdownListPage";

describe('SimpleTabs - Test simple tabs 1-4', () => {

    beforeEach(() => {
        const home = new HomePage()
        home.visitPage()

    });

    it('Test simple tabs 1-4', () => {
        const homePage = new HomePage()
        const inputTab = new InputPage()
        homePage.clickInputsTab()
        inputTab.typeNumberIntoFiled()
        cy.wait(2000)
        inputTab.typeTextIntoFiled()

    })

    it('Test Checkbox Tab', () => {
        const homePage = new HomePage()
        homePage.clickCheckboxTab()

        const checkboxTab = new CheckboxPage()
        checkboxTab.checkFirstCheckbox()
        checkboxTab.uncheckedLastCheckbox()

    })

    it('Test Dropdown list', () => {
        const homePage = new HomePage()
        homePage.clickDropdownTab()

        const dropDownPage = new DropdownListPage()
        dropDownPage.choseDropdownListFirstOption()
    })

    it.only('Test Hover Tab', () => {
        const homePage = new HomePage()
        homePage.clickHoversHeader()

        const hoversPage = new HoversPage()
        hoversPage.hoverOverElement()

    })

})