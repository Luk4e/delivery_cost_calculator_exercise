describe('Delivery fee calculation app', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8080');
    cy.contains('Delivery Fee Calculator');
    cy.contains('Cart Value (€)');
    cy.contains('Delivery distance (m.)');
    cy.contains('Amount of items');
    cy.contains('Time');
    cy.contains('Delivery Price:');
  })

  it('Calculation button can be pushed', function() {
    cy.contains('Calculate delivery price');
    cy.get('#cartvalue').type(8);
    cy.get('#distancevalue').type(1005);  
    cy.get('#itemsnumber').type(7);
    cy.get('#dateinput').type('2022-06-10');
    cy.get('#timeinput').type('17:50');
    cy.get('#calculateprice').click();

    cy.contains('Delivery Price: 7.15 €')
  })
})