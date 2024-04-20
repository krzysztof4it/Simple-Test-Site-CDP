describe('Nawigacja', () => {
    it('Nawigacja po stronach', () => {
        cy.visit("https://fabrykatestow.pl/")

        cy.get('a').contains('Darmowe dokumenty').click()

        cy.go("back")
        cy.wait(1000)

        cy.go('forward')
        cy.wait(1000)

        cy.get('#custom_html-3').contains('Regulamin').click()

        cy.go(-2)
        cy.wait(1000)

        cy.go(2)
        cy.wait(1000)

    })
})