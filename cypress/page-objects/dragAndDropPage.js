const dataTransfer = new DataTransfer()
const squareA = '#column-a'
const squareB = '#column-b'
const columns = '#columns'
class DragAndDropPage{

    dragA(){
        cy.get(squareA).trigger('dragstart', {dataTransfer})
        cy.get(squareB).trigger('drop', {dataTransfer})
        cy.get(columns).children('.column' ).eq(0).should('have.text', 'B') // check first element
        cy.get(columns).children('.column' ).eq(1).should('have.text', 'A') // check second element

    }

    dragB(){
        cy.get(squareB).trigger('dragstart', {dataTransfer})
        cy.get(squareA).trigger('drop', {dataTransfer})
        cy.get(columns).children('.column' ).eq(0).should('have.text', 'A') // check first element
        cy.get(columns).children('.column' ).eq(1).should('have.text', 'B') // check second element
    }

}
export default DragAndDropPage