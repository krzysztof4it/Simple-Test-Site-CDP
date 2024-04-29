class Urls{
    visitHomePage(){
        const url = '/' // def homepage in congig
        cy.visit(url)
    }
    visitTestPage(){
        const url = '/test'
        cy.visit(url) // go to def www+/test
    }

}
export default Urls