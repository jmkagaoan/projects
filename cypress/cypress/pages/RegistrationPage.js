class RegistrationPage {
    elements = {
        firstNameInput: () => cy.get('input[name="customer.firstName"]'),
        lastNameInput: () => cy.get('input[name="customer.lastName"]'),
        addressInput: () => cy.get('input[name="customer.address.street"]'),
        cityInput: () => cy.get('input[name="customer.address.city"]'),
        stateInput: () => cy.get('input[name="customer.address.state"]'),
        zipCodeInput: () => cy.get('input[name="customer.address.zipCode"]'),
        phoneInput: () => cy.get('input[name="customer.phoneNumber"]'),
        ssnInput: () => cy.get('input[name="customer.ssn"]'),
        usernameInput: () => cy.get('input[name="customer.username"]'),
        passwordInput: () => cy.get('input[name="customer.password"]'),
        confirmPasswordInput: () => cy.get('input[name="repeatedPassword"]'),
        registerButton: () => cy.get('input[value="Register"]')
    };

    registration(userName, password) {
        this.elements.firstNameInput().type(userName);
        this.elements.lastNameInput().type('Doe');
        this.elements.addressInput().type('123 Main St');
        this.elements.cityInput().type('Anytown');
        this.elements.stateInput().type('Anystate');
        this.elements.zipCodeInput().type('12345');
        this.elements.phoneInput().type('555-123-4567');
        this.elements.ssnInput().type('123-45-6789');
        this.elements.usernameInput().type(userName);
        this.elements.passwordInput().type(password);
        this.elements.confirmPasswordInput().type(password);
        this.elements.registerButton().click();
    }
}

export default new RegistrationPage();
