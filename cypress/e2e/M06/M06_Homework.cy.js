/**
 * @TODO W ramach pracy domowej dodaj test metody HTTP
 *
 *1) PUT
 *2) DELETE
 * @Add Asercje do każdej z metod
 * @host https://jsonplaceholder.typicode.com/

 */
import {faker} from "@faker-js/faker";
const  url = "https://jsonplaceholder.typicode.com/posts/1"
const randomTitle = faker.word.words(3);
const randomBody = faker.word.words(10);

describe('TEST Request PUT and DELETE', () => {
    it('TEST Method PUT', () => {

        cy.log(randomTitle)
        cy.log(randomBody)

        cy.wait(2000)
        cy.request({
            method: 'PUT',
            url: url,
            body: JSON.stringify({
                userId: '2',
                title: randomTitle,
                body: randomBody
            }),
            headers: {'Content-type': 'application/json'}
        }).then((response) => {
            const  bodyPUT = JSON.stringify(response.body)
            expect(response.status).to.eq(200) // check HTTP code
            expect(response.headers).to.have.property('content-type').and.include('application/json') //check headres == JSON
            expect(response.body.userId).to.eq('2')
            expect(response.body.title).to.eq(randomTitle)
            expect(response.body.body).to.eq(randomBody)
            cy.log(bodyPUT) // show send message
        })
    })

    it('TEST Method DELETE ', () => {
        cy.request({
            method: 'DELETE',
            url: url
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000) // check duration answer < 1000ms
            expect(response.headers).to.have.property('content-type').and.include('application/json')

        })
    })
})