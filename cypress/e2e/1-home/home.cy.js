/// <reference types="cypress" />




describe('Roam Free Utah - Basic E2E Test', () => {

  // This runs before each test case
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Replace with your correct local URL and port if different
  });

  it('should load the homepage successfully', () => {
    // Verify the page title
    cy.title().should('eq', 'Roam free Utah');

    // Check if the header is visible
    cy.get('h2').should('contain.text', 'JOURNEY BEYOND');

    // Check if the navigation bar is visible
    cy.get('nav').should('be.visible');

    // Verify that the 'About' link is visible and functional
    cy.get('a').contains('About').should('be.visible').click();
    
    // After clicking 'About', check if it scrolls to the section (since you wanted this earlier)
    cy.url().should('include', '#brand-section');

    // Check if the 'Our Brand Vision' section is visible
    cy.get('h1').contains('OUR BRAND VISION').should('be.visible');
  });

  it('should have working social media links', () => {
    // Check the social media icons in the footer
    cy.get('footer').within(() => {
      cy.get('a[href="https://www.instagram.com"]').should('have.attr', 'target', '_blank');
      cy.get('a[href="https://www.facebook.com"]').should('have.attr', 'target', '_blank');
      cy.get('a[href="https://www.whatsapp.com"]').should('have.attr', 'target', '_blank');
    });
  });

  it('should have a working email subscription form', () => {
    // Check the email input field and button
    cy.get('input[type="email"]').should('be.visible').type('test@example.com');
    cy.get('button[type="submit"]').should('be.visible').click();

    // Check if a success message appears (replace with actual message if different)
    cy.get('form').within(() => {
      cy.get('p').should('contain.text', 'Thank you for subscribing');
    });
  });

  it('should load YouTube iframe video and check if it’s visible', () => {
    // Check that the YouTube iframe is loaded and visible
    cy.get('iframe[src*="youtube.com"]').should('be.visible');
  });

  it('should have a working email subscription form', () => {
    // Check the email input field and button
    cy.get('input[type="email"]').as('emailInput');
    cy.get('button[type="submit"]').as('submitButton');

    // Initially, the button should be disabled because the field is empty
    cy.get('@submitButton').should('be.disabled');

    // Type an invalid email
    cy.get('@emailInput').type('invalid-email');
    cy.get('@submitButton').should('be.disabled'); // Button should still be disabled

    // Type a valid email
    cy.get('@emailInput').clear().type('test@example.com');
    cy.get('@submitButton').should('not.be.disabled'); // Button should now be enabled

    // Submit the form
    cy.get('@submitButton').click();

    // Check if a success message appears (replace with actual message if different)
    cy.get('form').within(() => {
      cy.get('p').should('contain.text', 'Thank you for subscribing');
    });
  });
});
