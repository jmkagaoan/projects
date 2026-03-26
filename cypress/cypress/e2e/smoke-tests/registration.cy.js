import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";

describe('I am able to register', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.register();
        cy.fixture('normal-user').as('normalUser'); 
    });

    describe('On Registration', () => {
        it('should land in Registration Page', () => {
            cy.title().should('eql', 'ParaBank | Register for Free Online Account Access');
        });

        it('should be able to register successfully', () => {
            cy.get('@normalUser').then((normalUser) => {
                RegistrationPage.registration(
                    normalUser.username + Math.floor(Math.random() * 1000), // Ensure unique username
                    normalUser.password
                );
            });
            cy.title().should('eql', 'ParaBank | Customer Created');
        });
    });
});