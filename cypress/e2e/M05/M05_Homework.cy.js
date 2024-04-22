describe('M05_Homework', () => {
    it('Praca domowa', () => {
        cy.visit("/")
        cy.get('.elementor-button').contains('POKAŻ CZEGO SIĘ NAUCZĘ').eq(0).click()
        cy.contains('Kto nauczy Cię testów automatycznych?').scrollIntoView()

        cy.wait(2000) // czekaj na załadowanie obrazka
        cy.screenshot( {
            capture: 'viewport'
        })
        //screenshot domyślnie zapisany w folderze screenshots

    })
})