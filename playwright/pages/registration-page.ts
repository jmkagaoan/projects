import { Locator, Page } from "@playwright/test";

export class RegistrationPage {

        readonly page: Page;
        readonly firstNameInput: Locator;
        readonly lastNameInput: Locator;
        readonly addressInput: Locator;
        readonly cityInput: Locator;
        readonly stateInput: Locator;
        readonly zipCodeInput: Locator;
        readonly phoneInput: Locator;
        readonly ssnInput: Locator;
        readonly usernameInput: Locator;
        readonly passwordInput: Locator;
        readonly confirmPasswordInput: Locator;
        readonly registerButton: Locator;

        constructor(page: Page) {
            this.page = page;
            this.firstNameInput = page.locator('#customer\\.firstName');
            this.lastNameInput = page.locator('#customer\\.lastName');
            this.addressInput = page.locator('#customer\\.address\\.street');
            this.cityInput = page.locator('#customer\\.address\\.city');
            this.stateInput = page.locator('#customer\\.address\\.state');
            this.zipCodeInput = page.locator('#customer\\.address\\.zipCode');
            this.phoneInput = page.locator('#customer\\.phoneNumber');
            this.ssnInput = page.locator('#customer\\.ssn');
            this.usernameInput = page.locator('#customer\\.username');
            this.passwordInput = page.locator('#customer\\.password');
            this.confirmPasswordInput = page.locator('#repeatedPassword');
            this.registerButton = page.locator('//input[@value="Register"]');
        }

        async register(firstName: string, password: string) {
                await this.firstNameInput.fill(firstName);
                await this.lastNameInput.fill('Smith');
                await this.addressInput.fill('123 Main St');
                await this.cityInput.fill('Anytown');
                await this.stateInput.fill('CA');
                await this.zipCodeInput.fill('12345');
                await this.phoneInput.fill('555-123-4567');
                await this.ssnInput.fill('123-45-6789');
                await this.usernameInput.fill(firstName);
                await this.passwordInput.fill(password);
                await this.confirmPasswordInput.fill(password);
                await this.registerButton.click();
        }
}