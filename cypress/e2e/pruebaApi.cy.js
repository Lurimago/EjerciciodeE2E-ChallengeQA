///<reference types="cypress"/>
describe('Prueba Api', () => {

    it("Crear nuevo usuaro", () => {
        cy.request({
            url: 'https://petstore.swagger.io/v2/user',
            method: 'POST',
            body: {
                    "id": 1000,
                    "username": "Luristring1",
                    "firstName": "string",
                    "lastName": "string",
                    "email": "string",
                    "password": "string",
                    "phone": "string",
                    "userStatus": 1
            }
        }).then((respuesta) => {
            cy.log(respuesta)
        })
    })
    it("Traer al usuario creado", () => {
        cy.request({
            url: 'https://petstore.swagger.io/v2/user/Luristring1',
            method: 'GET',
        }).then((respuesta) => {
            cy.log(respuesta)
        })
    })

    it("Actualizar el usuario", () => {
        cy.request({
            url: 'https://petstore.swagger.io/v2/user/Luristring1',
            method: 'PUT',
            body: {
                "id": 1000,
                "username": "Luristring2",
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 1
        }
    }).then((respuesta) => {
        cy.log(respuesta)
    })
    })


});