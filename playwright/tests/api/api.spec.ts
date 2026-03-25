import { test, expect } from '@playwright/test'
import { generateNormalUserBasicCredentials } from '../../utils/api-credentials-helper';


test.use({ storageState: { cookies: [], origins: [] } });

test.describe('API tests', () => {

    test('get accounts 404 if not authenticated', async ({ request }) => {
    const response = await request.get('/services_proxy/bank/accounts/12345');
    expect(response.status()).toBe(401);
  });

    test('get accounts succesful', async ({ request }) => {
        const authHeader = generateNormalUserBasicCredentials();
        const response = await request.get('/services_proxy/bank/customers/12656/accounts', {
        headers: {
        'Authorization': authHeader
        }
        });
        const responseJson = await response.json();
        expect(response.status()).toBe(200);
        expect(responseJson.length).toBeGreaterThan(0);
    });

});