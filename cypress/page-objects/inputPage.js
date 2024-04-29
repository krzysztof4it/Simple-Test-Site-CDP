import {faker} from "@faker-js/faker";

const input = 'input[type="number"]'

class InputPage{

    typeNumberIntoFiled(){
        const number = faker.number.int(3)
        cy.log(number)
        cy.get(input).clear()
        cy.get(input).type(number).should('have.value', number)
        //cy.get(input).type('123').should('have.value', '123')

    }
    typeTextIntoFiled(){
        cy.get(input).clear()
        cy.get(input).type('TEST TEKST').should('not.have.value', 'TEST TEKST')
    }
}
export default InputPage