import { getGreeting } from '../support/app.po';

describe('vakers', () => {
  it('Add reward to car', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > vaki-challenge-reward > .mat-card > .mat-focus-indicator').should('exist');
    cy.get(':nth-child(1) > vaki-challenge-reward > .mat-card > .mat-focus-indicator').click();
    cy.wait(500);

    cy.contains('.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content', '1');
  });

  it('Add reward to car', () => {
    cy.wait(1000);
    cy.get('vaki-challenge-cart-status').click();
  });

  it('Verify reward in cart', () => {
    cy.wait(1000);

    cy.get('vaki-challenge-cart-status').click();
    cy.wait(500);
    cy.get('.cart_item_container').should('exist');
  });

  it('Increase quantity', () => {
    cy.wait(1000);

    cy.get('#increase').click();
    cy.get('#increase').click();
    cy.wait(500);
    cy.get('.cart_item_container').should('exist');
  });

  it('Decrease quantity', () => {
    cy.wait(1000);

    cy.get('#decrease').click();
    cy.wait(500);
    cy.get('.cart_item_container').should('exist');
  });

  it('Do checkout and verify response', () => {
    cy.wait(1000);

    cy.get('.total_container > :nth-child(2) > .mat-focus-indicator').click();
    cy.wait(3000);
    cy.contains('h1', '¡Muchas gracias por tu compra!');
  });
});
