import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import { PropertyFinderHomePage } from '../../../pages/PropertyFinderHomePage'
import { PropertyFinderSearchPage } from '../../../pages/PropertyFinderSearchPage'

const homePage = new PropertyFinderHomePage()
const searchPage = new PropertyFinderSearchPage()


Given("As a client I should navigate propertyfinder page", () => {

  cy.navigateToUrl('/');

});

When("As a client I should select {string} option", (options) => {

  homePage.clickButtonAndCheckIsSelected(options);

});

When("As a client I should select {string} under Property type", (itemType) => {

  homePage.selectDesiredItemFromDropDownMenu(itemType)

});


When("As a client I should set min price {string} max price {string} and click search button", (minPrice, maxPrice) => {

  homePage.typeMaxAndMinPrice(minPrice, maxPrice)

});


Then("As a client I should perform API request and compare with UI interms of display results", (dataTable) => {

  searchPage.compareAPIresposeWithUI(dataTable)

});

When("As a client I should select the show commercial properties only checkbox and click on the search icon", () => {

  homePage.clickCommercialCheckBox();
  homePage.clickSearchButton();

});

And("As a client I should select {string} category from the commercial list returned", (desiredCategory) => {

  searchPage.clickDesiredCategory(desiredCategory);
  
})

And("As a client I should compare the details of the first property UI and from the API response in terms of price, description, location, size, title, and bathrooms", (dataTable) => {
  searchPage.comparePropertyDetailAPIrequestAndUI(0, dataTable);

})


