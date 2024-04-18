describe('Lokatory', () => {

    beforeEach(()=>{
        cy.visit("https://fabrykatestow.pl/")
    })

    it('Check locator on website', () => {
        cy.log("START")

        // tagi
        cy.log('atrybut <a>')
        cy.get('a').contains('Przejdź do treści').click({force:true});

        //identyfikatory



        // klasy


        // atrybuty



    })
})