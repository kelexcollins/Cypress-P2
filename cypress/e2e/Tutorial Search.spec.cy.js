describe('example to-do app', () => {

    before('',()=> {
        cy.visit('https://tutorialsninja.com/demo')
    })

    it('Verify the user is able to search for product', () => {
        cy.get('.form-control').type('iPhone')
        cy.get('.input-group-btn > .btn').click()
    })   
})
