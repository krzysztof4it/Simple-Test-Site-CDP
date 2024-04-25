/**
 * site to test: https://register.rediff.com/register/register.php?FormName=user_details
 * @todo
 * Alert - OK
 * Alet - Confirm
 *
 *
 */

    const url = 'https://register.rediff.com/register/register.php?FormName=user_details'

describe('Alerty', () => {
    it('Test alerts on site', () => {
        cy.visit(url)
        cy.get('#Register').click()
        cy.on('window:alert', (t) => {
            expect(t).contain('Your full name')
        })

    })
})