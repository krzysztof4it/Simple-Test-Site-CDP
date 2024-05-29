const url200 = 'http://httpstat.us/200'
const url305 = 'https://httpstat.us/305'
const url404 = 'https://httpstat.us/404'
const url500 = 'https://httpstat.us/500'

class StatusCodePage{
    check200Code(){
        cy.request(url200).then((response) => {
            const body = response.body
            cy.log(body)
            expect(response.status).to.eq(200)
        })
    }

    check305Code(){
        cy.request({
            url: url305,
            followRedirect: false,
            failOnStatusCode: false
        },).then((response) => {
            //const body = response.body
            //cy.log(body)
            expect(response.status).to.eq(305)
        })
    }

    check404Code(){
        cy.request({
            url: url404,
            failOnStatusCode: false
        }).then((response) => {
            const body = response.body
            cy.log(body)
            expect(response.status).to.eq(404)
        })
    }

    check500Code(){
        cy.request({
            url: url500,
            failOnStatusCode: false
        }).then((response) => {
            const body = response.body
            cy.log(body)
            expect(response.status).to.eq(500)
        })
    }

}
export default StatusCodePage