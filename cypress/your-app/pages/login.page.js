const userName = 'input[name="userName"]';
const password = 'input[name="Password"]';
const signInButton = '[data-automation="signin-button"]';

const LogInPage = {
    signInProvidersApp(user, pass) {
        cy.get(userName).type(user);
        cy.get(password).type(pass);
        cy.get(signInButton).click();
    },
};

export { LogInPage as default };
