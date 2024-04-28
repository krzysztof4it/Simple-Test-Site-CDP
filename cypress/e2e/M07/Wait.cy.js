const url = 'https://simpletestsite.fabrykatestow.pl/'

describe('Function Wait', () => {

    beforeEach(()=>{
        cy.get('button').invoke('text').as('button') // add alias to element
    })

    it('Access to text?', () => {
        //this.button // odwołanie do aliasu
        cy.get('table').find('tr').as('rows') //give alias to rows for <tr>
        cy.get('@rows').first().click()

        cy.wait('@rows') // watit for element

    })
})