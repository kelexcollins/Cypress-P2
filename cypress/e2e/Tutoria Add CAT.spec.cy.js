describe('example to-do app', () => {

    before('',()=> {
        cy.visit('https://tutorialsninja.com/demo')
    })

    it('Verify the user is able to add product to the cart', () => {
        cy.contains('iPhone').click()
        cy.get('#button-cart').click()
        cy.get('.alert').contains("Success: You have added iPhone to your shopping cart!")
    })
})


