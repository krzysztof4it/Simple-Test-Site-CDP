// wtyczka https://www.npmjs.com/package/cypress-iframe

//def zmiennych:
const url = "https://simpletestsite.fabrykatestow.pl/"
const ifrmeHeder = '#iframe-header'
const iframe = 'iframe' // only 1 element with iframe one test site
const iframeButton = '#simpleButton1'

describe('IFrame', () => {
    it('TEST IFRAME ', () => {
        cy.visit(url);

        cy.get(ifrmeHeder).click();

        const iframeTest = cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframeTest.find(iframeButton).click()

    })
})