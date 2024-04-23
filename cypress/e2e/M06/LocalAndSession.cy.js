

/**
  * install addon from
  * @link  https://www.npmjs.com/package/cypress-localstorage-commands
  * @example command
  * npm i --save-dev cypress-localstorage-commands
 */

import "cypress-localstorage-commands";

const acceptCookies = 'button[data-cy="accept-cookies"]'

describe('LocalAndSession', () => {
    beforeEach(() => {


        cy.visit("https://www.strava.com/dashboard");

    });

    it('Work with LocalStorage', () => {

        cy.clearAllLocalStorage() // clear all locastorage
        cy.clearLocalStorage('test') // clear storage with name test
        cy.getLocalStorage('test')
        cy.get(acceptCookies).click()
        cy.wait(2000);
        cy.setLocalStorage('test', '1') // add data to local storage
        cy.clearLocalStorage('rc::a')
    })


    it('Work with Session', () => {
        cy.clearAllSessionStorage() // clear session
        cy.getAllSessionStorage()
        cy.getLocalStorage('test')

        cy.wait(2000);
        cy.setLocalStorage('test', '1') // add data to local storage

        cy.get(acceptCookies).click()
        cy.wait(1000)


    })
})