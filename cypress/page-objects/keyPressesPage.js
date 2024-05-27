import {faker} from "@faker-js/faker";

/*
 Generate  A-Z characters + 0-9
 */
const pressedKey = faker.string.alphanumeric({length: 1}).toUpperCase()

class KeyPressesPage {

    checkPreess(){
        cy.log('Pressed random button: ' + pressedKey)
        cy.get('#target').type(pressedKey)
        cy.get('#keyPressResult').should('contain.text', 'You entered: ' + pressedKey)

    }
}

export default KeyPressesPage