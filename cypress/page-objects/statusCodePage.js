const code200 = '#200siteAnchor'
const code305 = '#305siteAnchor'
const code404 = '#404siteAnchor'
const code500 = '#500siteAnchor'

class StatusCodePage{
    check200Code(){
        cy.get(code200).click()
            cy.then((response) => {
            const  bodyPOST = JSON.stringify(response.body)
            expect(response.status).to.eq(200) // check kode HTTP 201?
            cy.log(bodyPOST) // show message

                //TODO
        })
    }

    check305Code(){

    }

    check404Code(){

    }

    check500Code(){

    }

}
export default StatusCodePage