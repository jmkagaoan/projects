class LoginPage {

  elements = {
    usernameInput: () => cy.get('input[name="username"]'), 
    passwordInput: () => cy.get('input[name="password"]'), 
    loginButton: () => cy.get('input[value="Log In"]'), 
    registerLink: () => cy.get('#loginPanel > p:nth-child(3) > a')
  };

  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  }

  login(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginButton().click();
  } 

  register() {
      this.elements.registerLink().click();
  }
}

export default new LoginPage();
