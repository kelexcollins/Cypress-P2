describe('example to-do app', () => {

    beforeEach('',()=> {
        cy.visit('https://tutorialsninja.com/demo')
    })

    it('Verify the user is able to login with valid credentials', () => {
        //cy.log("Testing beforeEach Hook 1")
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('#input-email').type('kelechi.agaaogwu.ghc@gmail.com')
        cy.get('#input-password').type('Hichiamaka.07')
        cy.get('[value="Login"]').click()
    })

    it('Verify the user is unable to login with invaild credentials', () => {
        //cy.log("Testing beforeEach Hook 2")
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('#input-email').type('kelexcollins@gmail.com')
        cy.get('#input-password').type('hichimaka')
        cy.get('[value="Login"]').click()
    })

    it('Verify the user is unable to login with empty fields', () => {
        //cy.log("Testing beforeEach Hook 3")
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('[value="Login"]').click()
    })      
    
    it('Verify the user is able to reset password', () => {
        cy.log("Testing beforeEach Hook 4")
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('#input-email').type('kelexcollins@gmail.com')
        cy.get('#input-password').type('hichimaka')
        cy.contains('Forgotten Password').click()
        cy.get('#input-email').type('kelexcollins@gmail.com')
        cy.get('[value="Continue"]').click()
        cy.get('.alert').should('have.text', "An email with a confirmation link has been sent your email address.")
    })
})