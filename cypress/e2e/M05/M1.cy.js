/*
visit fabryka testów
click newsletter
check url
doc https://docs.cypress.io/api/table-of-contents
 */

describe('Test FT', () => {
    it('Visit main page and click top menu button', () => {
        cy.visit("https://fabrykatestow.pl/")
        cy.get('a').contains('Newsletter').click();
        cy.url().should('contain', 'https://fabrykatestow.pl/ciekawostki/')

        cy.visit("https://fabrykatestow.pl/")

        cy.contains('SZKOLENIA').first()
        cy.contains('SZKOLENIA').last()
        cy.get('#menu-item-923').contains('Newsletter').eq(0)
        cy.get('.row').eq(2)
        cy.get('.row').eq(5)

        cy.url().should('eq', 'https://fabrykatestow.pl/')
        cy.log("Czekaj 2 sekundy")
        cy.wait(2000)
        cy.request('http://fabrykatestow.pl?')


    })
})
