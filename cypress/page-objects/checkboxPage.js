const checkbox = 'input[type="checkbox"]'

class CheckboxPage{
    checkFirstCheckbox(){
        cy.get(checkbox).first().check().should('be.checked')
    }
    uncheckedLastCheckbox(){
        cy.get(checkbox).eq(1).uncheck().should('not.be.checked')
    }
}
export default CheckboxPage