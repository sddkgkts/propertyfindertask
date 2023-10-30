class PropertyFinderSearchPage {
  

  elements = {
    searchResultCounts: () => cy.get(`span[aria-label="Search results count"]`),
    
  };

 


 getNumberOfSearchResult() {
   const  numberOfSearchResult = cy.get(`span[aria-label="Search results count"]`).invoke('text').then((text) =>{
      const textArr = text.split(" ");
      return textArr[0]
    })

    return numberOfSearchResult
    
  }

  async compareAPIresposeWithUI(dataTable){
     this.getNumberOfSearchResult().then(numberOfpropertyFromUI => {
      const [method, pathParam, params] = dataTable.rawTable[0];
   
   cy.performAPIRequest(method, pathParam, params).then(apiResponse => {
    const propertyArr = apiResponse.pageProps.searchResult.properties
    console.log(propertyArr)
    
    cy.wrap(propertyArr.length).should('eq', parseInt(numberOfpropertyFromUI));

   })
   
    })
    
   
  
  }












}
module.exports = {
  PropertyFinderSearchPage
}
