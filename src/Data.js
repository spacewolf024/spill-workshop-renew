export default class Data {
  static GetProducts() {
    return [
      { name: "Some awesome name", price: "$99.99", type: "product" },
      {
        name: "Super cool name",
        price: "$149.99",
        type: "product",
        lineLevelMessage: {
          primary: "test",
          marketing: "New Arrival"
        }
      },
      {
        name: "Groovy Product",
        price: "$149.99 - $299",
        type: "product",
        colorbar: {
          showColorbar: true
        }
      },
      { name: "John's favorite Product", price: "$1.99", type: "product" },
      { name: "This product has a really long name", price: "$1.99 - $2.99", type: "product" },
      { name: "John's Favorite Product", price: "$1.99", type: "product" },
      { name: "CB2's FAVORITE PRODUCT", price: "$99999.99", type: "product" },
      { name: "Product name goes here", price: "$300 - $500", type: "product" },
      { name: "Lorem ipsum productsum", price: "$1000.00", type: "product" },
      { name: "Extra product, read all about it", price: "$300 - $500", type: "product" },
      { name: "Soo many products", price: "$1000.00", type: "product" }
    ];
  }

  static GetThemes() {
    return [
      { name: "Theme 1", type: "theme", position: 3 },
      { name: "Theme 2", type: "theme", position: 7 },
      { name: "Theme 3", type: "theme", position: 10 }
    ];
  }

  static GetBreadcrumbs() {
    return ["Home", "Super", "Category", "Spill"];
  }

  static dataObj() {
    return {
      name: '',
      familyId: '',
      skuId: '',
      type: '',
      templateType: '',
      url: '',
      formattedPrice: '',
      shippingMsg: '',
      lineLevelMessage: {
        primary: '',
        shipping: '',
        marketing: ''
      },
      colorBar: [
        {
          imagepath: '',
          altText: '',
          showColorbar: '',
          showPlus: '',
          sku: '',
          grouper: '',
          sor: ''
        }
      ],
      isFavorited: '',
      canFavorite: '',
      brand: '',
      images: [
        {
          base: '',
          hover: '',
          isHoverable: ''
        }
      ],
      reviewRating: '',
      optionChoice: '',
      baseLoggingUrl: ''

    }
  }
}
