class PropertyFinderSearchPage {


  elements = {
    searchResultCounts: () => cy.get(`span[aria-label="Search results count"]`),
    findDesiredCategoryfromSeachedResult: (desiredCategory) => cy.get('li.styles_desktop_aggregation-links__item__Akl3F').contains(desiredCategory),
    findPropertyFromSearchedResult: (sqenceOfProperty) => cy.get('li[role="listitem"]').eq(sqenceOfProperty),
    findTitleOfProperty: () => cy.get('h1.text.text--size6.text--bold.property-page__title'),
    findPriceOfProperty: () => cy.get('div.property-price__price').first(),
    findDescriptionOfProperty: () => cy.get('div.text-trim.property-description__text-trim.text-trim--enabled'),
    findLocationOfProperty: () => cy.get('div.property-location__detail-area'),
    findFactOfProperty: (factText) => cy.contains('.property-facts__item', factText).find('.property-facts__value'),

  };

  getNumberOfSearchResult() {
    const numberOfSearchResult = cy.get(`span[aria-label="Search results count"]`).invoke('text').then((text) => {
      const textArr = text.split(" ");
      return textArr[0]
    })
    return numberOfSearchResult
  }

  async compareAPIresposeWithUI(dataTable) {
    this.getNumberOfSearchResult().then(numberOfpropertyFromUI => {
      const [method, pathParam, params] = dataTable.rawTable[0];
      let countOfProperty = null;
      cy.performAPIRequest(method, pathParam, params).then(apiResponse => {
        const propertyArr = apiResponse.pageProps.pageMeta.aggregationLinks
        for (const property of propertyArr) {
          countOfProperty += property.count;
        }
        cy.wrap(countOfProperty).should('eq', parseInt(numberOfpropertyFromUI));

      })

    })
  }


  clickDesiredCategory(desiredCategory) {
    this.elements.findDesiredCategoryfromSeachedResult(desiredCategory).click();
  }

  //look for desired property with index number
  clickDesiredProperty(sequenceOfProperty) {
    this.elements.findPropertyFromSearchedResult(sequenceOfProperty).click();
  }


  comparePropertyDetailAPIrequestAndUI(sequenceOfProperty, dataTable) {
    const [method, pathParam, params] = dataTable.rawTable[0];
    this.elements.findPropertyFromSearchedResult(sequenceOfProperty).click();


    cy.performAPIRequest(method, pathParam, params).then(apiResponse => {
      const detailsOfProperty = apiResponse.pageProps.searchResult.properties[sequenceOfProperty];
      const apiPrice = `${(detailsOfProperty.price.value).toLocaleString()} ${detailsOfProperty.price.currency}`;
      this.elements.findPriceOfProperty().getTextContent().then(text => { expect(text).to.equal(apiPrice); });
      this.elements.findFactOfProperty('Bathrooms:').invoke('text').then(text => { expect(text).to.equal(detailsOfProperty.bathrooms); });
      this.elements.findTitleOfProperty().invoke('text').then(text => { expect(text).to.equal(detailsOfProperty.title); })
      const apiSize = `${(detailsOfProperty.size.value).toLocaleString()} ${detailsOfProperty.size.unit}`;
      this.elements.findFactOfProperty('Property size:').invoke('text').then(text => { expect(text.replace(/\s/g, '').split('/')[1]).to.include(apiSize.replace(/\s/g, '')); });
      this.elements.findDescriptionOfProperty().getTextContent().then(text => { expect(detailsOfProperty.description.replace(/\s/g, '').trim()).to.include(text.replace(/\s/g, '').trim()); });
    });

  }


}

module.exports = {
  PropertyFinderSearchPage
}
