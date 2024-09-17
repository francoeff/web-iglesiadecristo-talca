import { menus } from '@data/menus';
describe('Home Page', () => {
    let page: Cypress.Chainable<Cypress.AUTWindow>;
  beforeEach(() => {
    page = cy.visit('/');
  });

  it('should visit the home page', () => {
    page.get('title').should('contain.text', 'Inicio');
    page
      .get('.hero .content')
      .contains(
        /una iglesia bíblica para la gloria de Dios A Dios sea gloria en la iglesia en Cristo Jesús por todas las edades, por los siglos de los siglos. Amén./i
      );
  });

  it('should show the menu', () => {
    const menusNavHome = page.get('.navHome .menuItem');
    const menusNav = page.get('.menu .menuItem');
    menusNavHome.should('have.length', menus.length);
    menusNav.should('have.length', menus.length);
    page.get('.menuItem').should('have.length', menus.length * 2);

    // menusNavHome.each((menuItem, index) => {
    //   cy.wrap(menuItem).contains(menus[index].text);
    // });
  
    cy.wrap('.navHome .menuItem').first().trigger('mouseover');
    
    cy.wait(1000);
    cy.get('.navHome .menuItem').first().trigger('mouseout');
    cy.get('.menu .menuItem').first().should('have.class', 'active');
  });
});
