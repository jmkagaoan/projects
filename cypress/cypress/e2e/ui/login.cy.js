import LoginPage from '../../pages/LoginPage';

describe('I am able to login', () => {
    before(() => {
        LoginPage.visit();
    });

    describe('On Logging', () => {
        it('should land in Login Page', () => {
            cy.title().should('eql', 'ParaBank | Welcome | Online Banking');
        });

        it('should be able to login normal successfully', () => {
            cy.intercept('GET', '*/services_proxy/bank/customers/*/accounts', { fixture: 'accounts-response.json' }).as('getAccounts');
            cy.fixture('normal-user').as('normalUser'); 
            cy.get('@normalUser').then((normalUser) => {
                LoginPage.login(normalUser.username, normalUser.password);
            });
            cy.title().should('eql', 'ParaBank | Accounts Overview');
        });

        it('should have non-empty table after login', () => {
            cy.get('#accountTable').find(' tbody > tr').should('have.length', 6);
            cy.compareSnapshot({
            name: 'account_overview',
            testThreshold: 0.2
            })
        });
    });
});
