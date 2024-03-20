describe('2048 app', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('can move to right', () => {
    cy.realPress('ArrowRight')
  })
})