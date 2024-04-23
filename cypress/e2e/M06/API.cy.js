
/* strona do testów API: https://jsonplaceholder.typicode.com/
    Resource
    Routes: adresy do testów API
    * GET - https://jsonplaceholder.typicode.com/posts
    * POST

 */


const  url = "https://jsonplaceholder.typicode.com/posts" // zapis do zmiennej


describe('API', () => {
    it('Shoud test JSON PLACE HOLDER  API', () => {

        cy.request(url) // wywołanie API
        cy.request(url).then((response) => {
            const body = response.body
            cy.log(body) // wyświetl body// zawartość => wyświetla - Array[100]
            const bodyJSON = JSON.stringify(response.body)
            expect(response.status).to.eq(200) // spr czy kod odp 200 - OK
            cy.log(bodyJSON) // wyświetla wszystkie dane
        })

        cy.log('Wysyłamy dane do API metodą POST')  // ==> https://jsonplaceholder.typicode.com/posts
        cy.request(
            {
                method: 'POST',
                url: url,
                body: JSON.stringify({
                    title: 'FOO',
                    userId: '101',
                    body: 'ESSA essa',
                }),
                headers: {'Content-type': 'application/json'} // nagłówek z typem danych for JSON
            }
        ).then((response) => {
            const  bodyPOST = JSON.stringify(response.body)
            expect(response.status).to.eq(201) // check kode HTTP 201?
            cy.log(bodyPOST) // show message
        })


    })
})