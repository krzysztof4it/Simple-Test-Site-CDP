import {faker} from "@faker-js/faker";

const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
class FormPage{

    fillFormSuccess(){
        cy.log('Fill inputs: First name = ' + firstName + ", LastName = " + lastName)
        cy.get('#fname').clear().type(firstName).should('contain.text', '')
        cy.get('#lname').clear().type(firstName).type(lastName).should('contain.text', '')
        cy.get('#formSubmitButton').click()
        cy.on('window:alert', (t) => {
            expect(t).contain('success')
        })
    }
}
export default FormPage