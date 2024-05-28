const iFrame = 'iframe'
const iframeButton1 = '#simpleButton1'
const iframeButton2 = '#simpleButton2'


class IFramePage{


    checkButton1(){
        //TODO zmiana na zmienną
        const iframeTest =  cy.get(iFrame)
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

        iframeTest.find(iframeButton1).should('be.visible').click() // ok
        iframeTest.find('#whichButtonIsClickedMessage').should('have.text','Button 1 was clicked!')

        /** TODO
         * Expected:  Button 1 was clicked!
         * index-b28d6e1f.js:133631 Message:
         * expected #whichButtonIsClickedMessage to have text Button 1 was clicked!, but the text was ''
         *
         */
    }

    checkButton2(){
        const iframeTest =  cy.get(iFrame)
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

            iframeTest.find('#simpleButton2').click()
            iframeTest.find('#whichButtonIsClickedMessage').should('have.text','Button 2 was clicked!')
    }

}
export default IFramePage