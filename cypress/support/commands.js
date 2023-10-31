// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('navigateToUrl', (url) => { 
    cy.visit(url);
 })

 Cypress.Commands.add('getTextContent', { prevSubject: 'element' }, ($element) => {
    return cy.wrap($element.text().trim());
  });

 Cypress.Commands.add('performAPIRequest', (method, pathParam, queryParams) => {
    const baseUrl = 'https://www.propertyfinder.bh/_next/data/TzDe2BoHaMDNNVVHeg4E5';
    const url = pathParam ? `${baseUrl}/${pathParam}/${queryParams}` : baseUrl;

    const defaultHeaders = {
        Accept: '*/*',
        Connection: 'keep-alive',
        'Accept-Encoding': 'gzip, deflate, br'

    };

    return cy.request({
        method: method,
        url: url,
        headers: defaultHeaders,
        failOnStatusCode: false // Set to handle non-2xx response status codes
    }).then((response) => {
        // Check for status code
        if (response.status >= 400) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        return response.body;
    });
});


 
