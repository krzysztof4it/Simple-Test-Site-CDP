const addButton = '.example > button'
const removeButton = '#elements > button'

class AddRemoveElement{
    testAddElement(){
    cy.get(addButton).click()
    cy.get(removeButton).should('exist')

    }
    removeElement(){
        cy.get(removeButton).click()
        cy.get(removeButton).should('not.exist')
    }
}
export default AddRemoveElement