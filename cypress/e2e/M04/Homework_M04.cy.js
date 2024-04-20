describe('Homework_M04 + wymień 5 elementów po: ', () => {

    beforeEach(()=>{
        cy.visit("https://fabrykatestow.pl/")
    })

    it('5 elementów - ID', () => {

        // doc -> https://docs.cypress.io/api/commands/get

        cy.log("ID")
        cy.get('#menu-item-923');
        cy.get('#kursy');
        cy.get('#site-footer');
        cy.get('#newsletter');
        cy.get('#custom_html-3');

    })

    it('5 elementów - CLASS', () => {

        cy.get('.brand'); // ikona marki
        cy.get('.elementor-size-xl');
        cy.get('.gallery-item') // galeria zaufanych firm
        cy.get('.elementor-button-text') // buttony np. = "POKAŻ CZEGO SIE NAUCZE"
        cy.get('.elementor-heading-title') // nagłówki


    })

    it('5 elementów - ELEMENT + ATRYBUT', () => {
        cy.get('img[width="768"]')
        cy.get('div[data-id="782c7bd"]')
        cy.get('input[type="search"]')
        cy.get('section[data-element_type="section"]')
        cy.get('a[href="https://fabrykatestow.pl/ciekawostki"]')
        cy.get('div').and('have.class', 'elementor-widget-container')




    })

    it('5 elementów - TEKST', () => {
        // documentation: https://docs.cypress.io/api/commands/contains


        cy.contains('Bądź na bieżąco')
        cy.contains('SZKOŁa ONLINE DLA TESTERÓW') // SZKOŁA ONLINE DLA TESTERÓW' celowa mała literka czy znalazłem błąd? :)
        cy.contains('SZKOŁA ONLINE DLA TESTERÓW', {matchCase:false}) //

        cy.contains('© 2023 Fabryka Testów')
        cy.get('div').contains('SZ').eq(0)
        cy.contains('ZERO RYZYKA')
    })


})
