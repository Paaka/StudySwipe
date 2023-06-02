const LOCALHOST_URL = 'http://localhost:3000';

describe('Navigation E2E tests', () => {

  it('Should open localhost', () => {
    cy.visit(LOCALHOST_URL)
  });

  describe("When url is /all", ()=>{
    it('Should open all set page', () => {
      cy.visit(LOCALHOST_URL + "/all")
      cy.get(`[data-cy="all-set"]`).should('exist')
    });
  })

  describe("When url is /set", ()=>{
    it('Should open set page', () => {
      cy.visit(LOCALHOST_URL + "/set")
      cy.get(`[data-cy="set"]`).should('exist')
    });
  })

  describe("When url is /study", ()=>{
    it('Should open study page', () => {
      cy.visit(LOCALHOST_URL + "/set/1")
      cy.get(`[data-cy="study"]`).should('exist')
    });
  })


  describe('When wrong input is passed', ()=>{
    it("Should open the not found(404) page", ()=>{
      cy.visit(`${LOCALHOST_URL}/pageThatDosentExist`);
      cy.get(`[data-cy="not-found-wrapper"]`).should('exist')
    })
  })
})