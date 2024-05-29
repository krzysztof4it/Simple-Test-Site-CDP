import {faker} from "@faker-js/faker";
/** format data
 * @url https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format

 */
const dataInput = '#start'
const dataRandom = faker.date.between('2020-01-01', '2020-12-31').toLocaleDateString('en-CA')

class DataPickerPage{

    checkData(){
        cy.log(dataRandom)
        cy.get(dataInput).type('2020-05-05')
        cy.get(dataInput).type(dataRandom)
        cy.get(dataInput).should('have.value', dataRandom)
    }
}
export default DataPickerPage