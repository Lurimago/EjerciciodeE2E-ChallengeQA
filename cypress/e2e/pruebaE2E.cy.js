///<reference types="cypress"/>
describe('Prueba E2E', () => {
    it("First Test With Mocha", () => {
        cy.visit("http://opencart.abstracta.us/")
        cy.wait(3000)
        cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').click();
        cy.get('#button-cart').click();
        cy.get('h1 > a').click();
        cy.get(':nth-child(4) > .product-thumb > .image > a > .img-responsive').click();
        cy.get('#input-option226').select("Red");
        cy.get('#button-cart').click();
        cy.get('.btn-inverse').click();
        cy.get('[href="http://opencart.abstracta.us:80/index.php?route=checkout/cart"] > strong').click();
        cy.get('.pull-right > .btn').click()
        .should('have.prop', 'href')
        .and('include', '/checkout');
        
    });
});