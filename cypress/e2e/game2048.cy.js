describe('Gameplay', () => {
	beforeEach(() => {
		cy.visit('');
	});

	it('opens up the site correctly', () => {
		cy.contains('2048');
    cy.get('.gameGrid').should('exist');
	});

	it('can make moves using arrow keys', () => {
		// Make sure the game is loaded
		cy.visit('http://localhost:5173/');

		// Define arrow key commands
		const arrowKeys = ['upArrow', 'downArrow', 'leftArrow', 'rightArrow'];

		// Iterate over arrow keys and trigger keydown event
		arrowKeys.forEach((key) => {
			cy.get('body').type(`{${key}}`);
		});
	});
});
