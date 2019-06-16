context('Assertions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1025/');
    });

    describe('PLP page  Assertions', () => {
        it('should have products filter present', () => {
            cy.get('[data-test-id=productsFilter]').should('have.length', 1);
        });
    });

    describe('PLP page  filter', () => {
        it('change the filter and check product list', () => {
            cy.get('[data-test-id=productsFilter]').select('XS');
            cy.get('[data-test-id=productsFilter]').should('have.value', 'XS');
            cy.get('[data-test-id=productsList]')
                .children()
                .should('have.length', 4);
        });
    });
});
