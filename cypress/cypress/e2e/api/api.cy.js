describe('API Testing', () => {
    it('should get 404 if wrong credentials', () => {
        cy.request({
            method: 'GET',
            url: 'https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12878/accounts',
            headers: {
                'Authorization': 'Basic ' + Buffer.from('wrong:user').toString('base64'),
            }
        })
            .then((response) => {
                expect(response.status).to.eq(404);
            });
    });

    it('should return a list of accounts', () => {
        cy.request({
            method: 'GET',
            url: 'https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12878/accounts',
            headers: {
                'Authorization': 'Basic ' + Buffer.from('user:user').toString('base64'),
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
            });
    });
});