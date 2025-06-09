describe('Página de Login', () => {
  beforeEach(() => {
  cy.visit('http://localhost:3000/cypress/e2e/login.html');
  });
  it('Login com credenciais válidas => exibe a página principal', () => {
  cy.get('#username').type('admin');
  cy.get('#password').type('123456');
  cy.get('button[type="submit"]').click();
  cy.url().should('include', 'principal.html');
  });
  it('Login com credenciais inválidas => exibe mensagem de erro', () => {
  cy.on('window:alert', (texto) => {
  expect(texto).to.equal('Usuário ou senha inválido');
  });
  cy.get('#username').type('usuario');
  cy.get('#password').type('errado');
  cy.get('button[type="submit"]').click();
  //cy.get('#message').should('contain', 'Usuário ou senha inválido');
  });
 });