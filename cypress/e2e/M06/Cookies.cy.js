describe('Cookies', () => {

    beforeEach('open defalult site', () => {
        cy.visit('/')
        cy.clearCookies()
    })

    it('Manage cookies', () => {

        const newCookie = 'cookiefooo'
        cy.clearCookie(newCookie)
        cy.setCookie(newCookie, 'new cookie data')
        cy.getCookies() // get all cookies from domain - fabryka testów
        cy.getCookie(newCookie) // get cookie ()

        cy.getAllCookies()
    })
})