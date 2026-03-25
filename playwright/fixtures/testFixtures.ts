import { test as base} from '@playwright/test';
import { LoginPage } from "../pages/login-page";
import { RegistrationPage } from '../pages/registration-page';
import { OpenNewAccountPage } from '../pages/open-new-account-page';

type TestFixtures = {
    loginPage: LoginPage,
    registrationPage: RegistrationPage,
    openNewAccountPage: OpenNewAccountPage,
}

export type TestOptions = {
  person: string;
};

export const test = base.extend<TestFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    registrationPage: async ({ page }, use) => {
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage);
    },
    openNewAccountPage: async ({ page }, use) => {
        const openNewAccountPage = new OpenNewAccountPage(page);
        await use(openNewAccountPage);
    }
});

export { expect, devices } from '@playwright/test';