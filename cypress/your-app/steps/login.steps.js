import { LogInPage } from '../pages';

const logInSteps = {
    signIn(user, password) {
        describe('On Logging in to Providers App', () => {
            it('should land in Login Page', () => {
                cy.title().should('eql', 'Lantern Pay Sign In');
            });

            it('should be able to login successfully', () => {
                LogInPage.signInProvidersApp(user, password);
                cy.title().should('eql', 'Select Billers');
            });
        });
    },
};

export { logInSteps as default };
