import { getGreeting } from '../support/app.po';

describe('vakers', () => {
  // beforeEach(() => cy.visit('/vaki'));
  it('Load the home page', () => {
    cy.visit('/');
    cy.get('.vaki_detail_info').should('exist');
    cy.get('.vaki_detail_image > img').should('exist');
    cy.get('vaki-challenge-rewards').should('exist');
    cy.contains('.rewards_title', 'Recompensas');
    
  });
});
