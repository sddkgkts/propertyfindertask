@PFassignment
Feature: Property Search on Property Finder.bh

 Background:
    Given As a client I should navigate propertyfinder page
  Scenario: Check the total displayed number of results for category Villas with a price range of more than 300,000 AED / yearly
    When As a client I should select "Rent" option
    And As a client I should select "Villa" under Property type
    And As a client I should set min price "25000" max price "" and click search button
    Then As a client I should perform API request and compare with UI
       | GET  | en |search.json?c=2&t=35&pf=25000&fu=0&rp=m&ob=mr| 
    



