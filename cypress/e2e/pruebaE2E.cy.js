///<reference types="cypress"/>
import {HomePage} from '../support/pages/HomePage'
import {CarritoPage} from '../support/pages/CarritoPage'
import {CheckoutPage} from '../support/pages/CheckoutPage'
import 'cypress-xpath'
describe('Agregar 2 productos al carrito', () => {
    const homePage = new HomePage()
    const carritoPage = new CarritoPage()
    const checkoutPage = new CheckoutPage()

    before("before", () => {
        cy.visit("http://opencart.abstracta.us/");
    })
    it("Debería agregar los dos productos al carrito", () => {
        homePage.agregarPrimerProductoAlCarrito();
        homePage.agregarSegundoProductoAlCarrito();
        carritoPage.verCarrito();
        checkoutPage.irAlCheckout();
        
    });
});
