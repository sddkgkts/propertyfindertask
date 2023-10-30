import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import { PropertyFinderHomePage} from '../../../pages/PropertyFinderHomePage'
import { PropertyFinderSearchPage} from '../../../pages/PropertyFinderSearchPage'

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


  Then("As a client I should perform API request and compare with UI", (dataTable) => {
   
    searchPage.compareAPIresposeWithUI(dataTable)
   
  });

  Then("As a client I should check number of property is equel that API response and UI", () => {
    
  });

