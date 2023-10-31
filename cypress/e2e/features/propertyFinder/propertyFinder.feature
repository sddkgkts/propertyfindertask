@PFassignment
Feature: Property Search on Property Finder.bh

   Background:
      Given As a client I should navigate propertyfinder page
   Scenario: Check the total displayed number of results for category Villas with a price range of more than 300,000 AED yearly
      When As a client I should select "Rent" option
      And As a client I should select "Villa" under Property type
      And As a client I should set min price "25000" max price "" and click search button
      Then As a client I should perform API request and compare with UI interms of display results
         | GET | en | search.json?c=2&t=35&pf=25000&fu=0&rp=m&ob=mr |




   Scenario: Check the commercial properties only feature
      When As a client I should select the show commercial properties only checkbox and click on the search icon
      And As a client I should select "Offices" category from the commercial list returned
      Then As a client I should perform API request and compare with UI interms of display results
         | GET | en | search.json?c=3&t=4&fu=0&ob=mr |
      And As a client I should compare the details of the first property UI and from the API response in terms of price, description, location, size, title, and bathrooms
         | GET | en | search.json?c=3&t=4&fu=0&ob=mr |