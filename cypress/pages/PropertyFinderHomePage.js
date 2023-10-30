class PropertyFinderHomePage {
  elements = {
    findButton: (options) => cy.get(`span:contains("${options}")`),
    checkButtonIsSelected: (options) => cy.get(`label.chip.chip--selected:contains("${options}")`).should('exist'),
    dropDownMenuForProperty: () => cy.get('div.dd__head.dd--normal.dd--secondary.dd--filled').eq(1),
    selectItemFromDropdownMenuForPropertyType: (itemType) => cy.get('button.dropdown-list__item-content.dropdown-list__item-button').contains(itemType),
    dropDownMenuForPrice: () => cy.get('div.price-selector').eq(1),


    findPriceBox: (priceType) => cy.get('span.text-field__placeholder-content')
    .contains(priceType)
    .parent('.text-field__placeholder')
    .next('.input2')
    .find('input.text-field__input.range-selector__input'),


    findSearchButton: () => cy.get('button.button-2.button-primary.filter-form-search-button.filter-form-component-variant__m-hide',{ timeout: 10000 }),

  };

 


  clickButtonAndCheckIsSelected(options) {
    this.elements.findButton(options).click();
    this.elements.checkButtonIsSelected(options)
  }

  selectDesiredItemFromDropDownMenu(itemType) {
    this.elements.dropDownMenuForProperty().click();
    this.elements.selectItemFromDropdownMenuForPropertyType(itemType).click()
  }


  typeMaxAndMinPrice(minPrice, maxPrice ) {
    const priceTypes = [{ 'Min. Price (BHD)': minPrice }, { 'Max. Price (BHD)': maxPrice }];
    this.elements.dropDownMenuForPrice().click();
    for (const priceType of priceTypes) {
      const key = Object.keys(priceType)[0];
      if ( priceType[key] !== "") {
        this.elements.findPriceBox(key).click().type(priceType[key])
      }
    }
    this.elements.findSearchButton().click()

  }











}
module.exports = {
  PropertyFinderHomePage
}
