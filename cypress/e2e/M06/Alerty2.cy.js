/**
 * site to test: https://testpages.herokuapp.com/styled/alerts/alert-test.html
 * @todo
 * Alert Box- OK
 * Alert Confirm Box
 * Alert propmt box
 *
 */

    const url = 'https://testpages.herokuapp.com/styled/alerts/alert-test.html'

describe('Alerty', () => {
    it('Test alerts on site', () => {
        cy.visit(url)
        cy.get('#alertexamples').click()
        cy.on('window:alert', (t) => {
            expect(t).contain('I am an alert box')
        })
        cy.wait(2000)

        cy.get('#confirmexample').click()
        cy.on('window:confirm', (t) => {
            expect(t).contain('I am a confirm alert')
        })
        cy.on('window:confirm', (t) => false)
        cy.wait(2000)

        cy.get('#promptexample').click()

        /*
        cy.window().then( win => {
            cy.stub(win, 'confirm').returns(false)
        })

         */

    })
})