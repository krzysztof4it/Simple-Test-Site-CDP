require('cypress-iframe')
const iframeButton1 = '#simpleButton1'
const iframeButton2 = '#simpleButton2'
const message = '#whichButtonIsClickedMessage'

class IFramePage{

    checkButton1(){

        cy.iframe().find(iframeButton1).should('be.visible').click()
        cy.iframe().find(message).should('have.text', 'Button 1 was clicked!')

    }

    checkButton2(){

        cy.iframe().find(iframeButton2).click()
        cy.iframe().find(message).should('have.text','Button 2 was clicked!')

    }

}
export default IFramePage