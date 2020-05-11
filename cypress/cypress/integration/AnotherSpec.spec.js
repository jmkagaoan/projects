import { logInSteps } from '../../your-app/steps';
import { credentials } from '../../your-app/data';


describe('I am able to login', () => {
    before(() => {
        cy.visit('https://qa.test.lanternpay.com/app/providers/index.html#/login');
    });

    logInSteps.signIn(credentials.admin.user, credentials.admin.password);
});
