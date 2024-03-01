describe('E2E specs', () => {
  describe('Home specs', () => {
    it('should visit the login page', () => {
      cy.visit('/');

      cy.findByRole('textbox', { name: /usuario \*/i }).should(
        'have.value',
        ''
      );
      cy.findByLabelText(/contraseña \*/i).should('have.value', '');
    });

    it('should throw an error when clicking on login button', () => {
      cy.visit('/');

      cy.findByRole('button', { name: /login/i }).click();
      cy.findByRole('textbox', { name: /usuario \*/i }).should(
        'have.attr',
        'aria-invalid',
        'true'
      );
      cy.findByLabelText(/contraseña \*/i).should(
        'have.attr',
        'aria-invalid',
        'true'
      );

      cy.findAllByText('Debe informar el campo')
        .should('have.length', 2)
        .and('be.visible');
    });

    it('should throw an error when clicking on login button', () => {
      cy.visit('/');

      cy.findByRole('textbox', { name: /usuario \*/i }).type('admin');
      cy.findByLabelText(/contraseña \*/i).type('wrongpassword');
      cy.findByRole('button', { name: /login/i }).click();

      cy.findByRole('presentation').within(() => {
        cy.findByText('Usuario y/o password no válidos');
      });
    });

    it('should redirects into the submodule-list page when log in is correct', () => {
      cy.visit('/');

      cy.findByRole('textbox', { name: /usuario \*/i }).type('admin');
      cy.findByLabelText(/contraseña \*/i).type('test');
      cy.findByRole('button', { name: /login/i }).click();

      cy.url().should('include', 'submodule-list');
    });
  });

  describe('Proyectos specs', () => {
    beforeEach('logging in the app', () => {
      cy.visit('/');

      cy.findByRole('textbox', { name: /usuario \*/i }).type('admin');
      cy.findByLabelText(/contraseña \*/i).type('test');
      cy.findByRole('button', { name: /login/i }).click();

      cy.url().should('include', 'submodule-list');
    });

    it('should redirects into the proyects page when clicking on Proyectos', () => {
      cy.findByTestId('AccountBalanceIcon').click();

      cy.url().should('include', '/projects');
    });

    it('should look for a project when typing it on the search field', () => {
      cy.findByTestId('AccountBalanceIcon').click();

      cy.findByPlaceholderText('Buscar proyecto').type('Bankia');

      cy.get('tbody').children().should('have.length', 1);
    });

    it('should display all rows when search is cleared', () => {
      cy.findByTestId('AccountBalanceIcon').click();

      cy.findByPlaceholderText('Buscar proyecto').type('Bankia');
      cy.wait(500);
      cy.findByPlaceholderText('Buscar proyecto').clear();
      cy.wait(500);

      cy.get('tbody').children().should('have.length', 5);
    });
  });

  describe('Empleados specs', () => {
    beforeEach('logging in the app', () => {
      cy.visit('/');

      cy.findByRole('textbox', { name: /usuario \*/i }).type('admin');
      cy.findByLabelText(/contraseña \*/i).type('test');
      cy.findByRole('button', { name: /login/i }).click();

      cy.url().should('include', 'submodule-list');
    });

    it('should redirects into the employees page when clicking on Empleados', () => {
      cy.findByTestId('GroupIcon').click();

      cy.url().should('include', '/employees');
    });

    it('should returns 2 rows when looking for mez', () => {
      cy.findByTestId('GroupIcon').click();

      cy.findByPlaceholderText('Buscar empleado').type('mez');

      cy.get('tbody').children().should('have.length', 2);
    });

    it('should display all rows when search is cleared', () => {
      cy.findByTestId('GroupIcon').click();

      cy.findByPlaceholderText('Buscar empleado').type('mez');
      cy.wait(500);
      cy.findByPlaceholderText('Buscar empleado').clear();
      cy.wait(500);

      cy.get('tbody').children().should('have.length', 5);
    });
  });
});
