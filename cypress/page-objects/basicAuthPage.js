import {faker} from "@faker-js/faker";
const login = 'admin'
const pass = 'admin'
const loginFailed = faker.internet.userName()
const passFailed = faker.internet.password()

class BasicAuthPage{

    login(){
        cy.get('#ba_username').type(login)
        cy.get('#ba_password').type(pass)
        cy.get('button').contains('Login').click();
    }

    checkLogin(){
        cy.get('#loggedInMessage').should('contain.text', 'You are logged in!')
    }
    returnToMain(){
        cy.get('button').should('contain.text', 'Return to main page').click()

    }
    loginFalied(){
        cy.log('Login: ' + loginFailed)
        cy.log('Pass: ' + passFailed)
        cy.get('#ba_username').type(loginFailed)
        cy.get('#ba_password').type(passFailed)
        cy.get('button').contains('Login').click()
        cy.get('#loginFormMessage').should('have.text','Invalid credentials')
    }
}

export default BasicAuthPage