export class CheckoutPage {

    irAlCheckout(){
        cy.get('.pull-right > .btn').click()
        .should('have.prop', 'href')
        .and('include', '/checkout');
        cy.contains('Checkout').click();
    }
}