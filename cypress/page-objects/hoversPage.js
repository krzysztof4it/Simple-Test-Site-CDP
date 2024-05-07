/** Doc:
 * @link INVOKE -  https://docs.cypress.io/api/commands/invoke
 * @link TRIGGER - https://docs.cypress.io/api/commands/trigger
 */

const figure = '.figure'
const figcaption = '.figcaption'
class HoversPage{

    hoverOverElement(){
        // cy.get(figure).first().trigger('mouseover') // working for js
        cy.get(figcaption).first().should('be.hidden')
        cy.get(figcaption).first().invoke('show').should('be.visible')
    }
}

export default HoversPage
