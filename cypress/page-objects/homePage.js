import Urls from "./urls";
import {ne} from "@faker-js/faker";
const checkboxHeader = '#checkbox-header'
const datePickerHeader = '#datepicker-header'
const hoversHeader = '#hovers-header'
const inputsHeader = '#inputs-header'
const basicAuthHeader = '#basicauth-header'
const formHeader = '#form-header'
const dropdownListHeader = '#dropdownlist-header'
const keyPressesHeader = '#keypresses-header'
const dropAndDropHeader = '#draganddrop-header'
const addRemoveElementsHeader = '#addremoveelements-header'
const statusCodesHeader = '#statuscodes-header'
const iframeHeader = '#iframe-header'



class HomePage{
    /** Metody do klikania po zakładkach
     *
     *
     *
     */

    clickCheckboxTab(){
        cy.get(checkboxHeader).click()
    }

    clickDatePickerTab(){
        cy.get(datePickerHeader).click()
    }
    clickHoversHeader(){
        cy.get(hoversHeader).click()
    }

    clickInputsTab(){
        cy.get(inputsHeader).click()
    }

    clickBasicAuthTab(){
        cy.get(basicAuthHeader).click()
    }
    clickFormTab(){
        cy.get(formHeader).click()
    }

    clickDropdownTab(){
        cy.get(dropdownListHeader).click()
    }

    clickKeyPressesTab(){
        cy.get(keyPressesHeader).click()
    }

    clickDragAndDropTab(){
        cy.get(dropAndDropHeader).click()
    }

    clickAddRemoveElementsTab(){
        cy.get(addRemoveElementsHeader).click()
    }

    clickStatusCodesTab(){
        cy.get(statusCodesHeader).click()
    }

    clickIFrameTab(){
        cy.get(iframeHeader).click()
    }

    visitPage(){
        const url = new Urls() // def class Url
        url.visitHomePage() //method open visitHP
    }
}
export default HomePage;
