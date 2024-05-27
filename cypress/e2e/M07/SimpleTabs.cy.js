import {ne} from "@faker-js/faker";
import HomePage from "../../page-objects/homePage";
import InputPage from "../../page-objects/inputPage";
import CheckboxPage from "../../page-objects/checkboxPage";
import HoversPage from "../../page-objects/hoversPage";
import DropdownListPage from "../../page-objects/dropdownListPage";
import BasicAuthPage from "../../page-objects/basicAuthPage";
import FormPage from "../../page-objects/formPage";
import KeyPressesPage from "../../page-objects/keyPressesPage";

describe('SimpleTabs - Test simple tabs 1-4', () => {

    beforeEach(() => {
        const home = new HomePage()
        home.visitPage()

    });

    it('1. Test Checkboxs', () => {
        const homePage = new HomePage()
        homePage.clickCheckboxTab()

        const checkboxTab = new CheckboxPage()
        checkboxTab.checkFirstCheckbox()
        checkboxTab.uncheckedLastCheckbox()

    })

    it('2. Date pickier', () => {
        const homePage = new HomePage()


    })

    it('3. Test Hover Tab', () => {
        const homePage = new HomePage()
        homePage.clickHoversHeader()

        const hoversPage = new HoversPage()
        hoversPage.hoverOverElement()

    })

    it('4. Test Inputs', () => {
        const homePage = new HomePage()
        const inputTab = new InputPage()
        homePage.clickInputsTab()
        inputTab.typeNumberIntoFiled()
        cy.wait(2000)
        inputTab.typeTextIntoFiled()

    })

    it('5. Test Basic auth', ()=>{
        const homePage = new HomePage()
        homePage.clickBasicAuthTab()

        const basicAuthPage = new BasicAuthPage()

        basicAuthPage.login()
        basicAuthPage.checkLogin()
        basicAuthPage.returnToMain()

        homePage.clickBasicAuthTab() // click Tab
        basicAuthPage.loginFalied()
    })

    it('6. Test Form', () => {
        const homePage = new HomePage()
        homePage.clickFormTab()

        const formTab = new FormPage()
        formTab.fillFormSuccess()
    })

    it('7. Test Dropdown list', () => {
        const homePage = new HomePage()
        homePage.clickDropdownTab()

        const dropDownPage = new DropdownListPage()
        dropDownPage.choseDropdownListFirstOption()
    })

    it.only('8. Test Key presses', () => {
        const homePage = new HomePage()
        homePage.clickKeyPressesTab()

        const pressesPage = new KeyPressesPage()
        pressesPage.checkPreess()

    })




})