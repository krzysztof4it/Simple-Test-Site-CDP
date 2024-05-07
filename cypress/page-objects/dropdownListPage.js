const dropDownList = '#dropdown'

class DropdownListPage{
    choseDropdownListFirstOption(){
        //cy.get(dropDownList).select('Option 1').should('be.selected')
        cy.get(dropDownList).select('Option 1').should('have.value',1)
    }

}
export default DropdownListPage