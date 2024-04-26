describe('Gameplay', () => {
	beforeEach(() => {
		cy.visit('');
		const arrowKeys = ['upArrow', 'downArrow', 'leftArrow', 'rightArrow'];
	});

	it('opens up the site correctly', () => {
		cy.contains('2048');
		cy.contains('Points')
    cy.get('.gameGrid').should('exist');
	});

	it('can make moves using arrow keys', () => {
		// Define arrow key commands
		const arrowKeys = ['upArrow', 'downArrow', 'leftArrow', 'rightArrow'];

		// Iterate over arrow keys and trigger keydown event
		arrowKeys.forEach((key) => {
			cy.get('body').type(`{${key}}`);
		});
	});

	it('should have non-zero points after combining numbers', () => {
		const arrowKeys = ['upArrow', 'downArrow', 'leftArrow', 'rightArrow'];
	
		// Iterate over arrow keys four times to ensure that points are not zero
		arrowKeys.forEach((key) => {
			cy.get('body').type(`{${key}}`);
		});
		arrowKeys.forEach((key) => {
			cy.get('body').type(`{${key}}`);
		});
		arrowKeys.forEach((key) => {
			cy.get('body').type(`{${key}}`);
		});
		arrowKeys.forEach((key) => {
			cy.get('body').type(`{${key}}`);
		});

		// Get points and verify that it is above 0
		cy.get('.points').invoke('text').then((pointsText) => {
			const pointsValue = parseInt(pointsText.replace('Points ', ''));
			expect(pointsValue).to.be.above(0);
		});
	});
});
