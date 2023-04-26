describe('compras spec', () => {

  beforeEach(() => {
    // Visitar la página de inicio de la tienda
    cy.visit('https://www.demoblaze.com/')
  })

  it('Flujo de compras', () => {

    //encontrar primera imagen y dar click en el enlace
    cy.get('.card-img-top.img-fluid').first().click()
    
    //añadir producto al carrito
    cy.contains('Add to cart').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    })

    //esperar dos segundos (solo para visualizar)
    cy.wait(2000)


    //regresar a la página inicial
    cy.visit('https://www.demoblaze.com/')

    //seleccionar segunda imagen y dar click en el enlace
    cy.get('.card-img-top.img-fluid').eq(1).click()
    
    //añadir segundo producto al carrito
    cy.contains('Add to cart').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    })

    //esperar dos segundos (solo para visualizar)
    cy.wait(2000)


    

    //visualizar carrito de compras
    cy.visit('https://www.demoblaze.com/cart.html')

    //esperar dos segundos (solo para visualizar)
    cy.wait(2000)
    // Buscar el botón para pagar y hacer clic en él
    cy.get('.btn-success').contains('Place Order').click();



    //llenado del formulario
    cy.get('#name').type('María José Cobeña'); // Llenar el campo de nombre
    cy.get('#country').type('Ecuador'); // Llenar el campo de país
    cy.get('#city').type('Quevedo'); // Llenar el campo de ciudad
    cy.get('#card').type('1234567890123456'); // Llenar el campo de tarjeta de crédito
    cy.get('#month').type('05'); // Llenar el campo de mes de expiración con "05"
    cy.get('#year').type('2023'); // Llenar el campo de año de expiración con "2024"

    // Buscar el botón y hacer clic en él
    cy.get('.btn-primary').contains('Purchase').click();
  })
})