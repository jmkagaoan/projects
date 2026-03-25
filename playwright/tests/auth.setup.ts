import { test as setup } from '../fixtures/testFixtures';
import path from 'path';

const authFile = path.join(__dirname, '../.auth/user.json');

setup('authenticate', async ({ page, loginPage }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await loginPage.login('user', 'user');
    await page.context().storageState({ path: authFile });
});