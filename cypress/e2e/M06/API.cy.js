
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
            cy.log(bodyJSON) // wyświetla wszystkie dane
        })

    })
})