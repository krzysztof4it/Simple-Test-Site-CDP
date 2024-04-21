describe('M6_Pobieranie Danych', () => {
    it('Pobieranie danych z strony ', () => {
        cy.visit("/") // baser url - fabryka testów

        cy.getCookie('_gid') // konkretna nazwa cookie -> F12 -> Aplikacja -> Pliki Cookie - nazwa cookie
        cy.getCookies() //all
        cy.getAllCookies()
        cy.getAllLocalStorage()

        const cookieFT = cy.getCookie('_ga') // zapis do zmiennej

        cy.log(cookieFT)

    })
})