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
      { name: Data.randomNameGenerator() + "favorite Product", price: "$1.99", type: "product" },
      { name: "This product has a really long name", price: "$1.99 - $2.99", type: "product" },
      { name: Data.randomNameGenerator() + "Favorite Product", price: "$1.99", type: "product" },
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
      price: '',
      formattedPrice: '',
      shippingMsg: '',
      lineLevelMessage: {
        primary: '',
        shipping: Data.randomShippingMsgGenerator(),
        marketing: ''
      },
      showColorbar: Data.randomBoolGenerator(),
      colorBar: [
        {
          imagepath: '',
          altText: '',
          
          showPlus: '',
          sku: '',
          grouper: '',
          sor: ''
        }
      ],
      isFavorited: Data.randomBoolGenerator(),
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

  static randomBoolGenerator() {
    return (Data.getRandomNum() % 3 === 0 ) ? true : false;
  }

  static randomShippingMsgGenerator() {
    return (Data.getRandomNum() % 3 === 0 ) ? "Free Shipping" : ""; 
  }

  static randomNameGenerator() {
    if(Data.getRandomNum() % 5 === 0) {
      return "Mike's ";
    } else if (Data.getRandomNum() % 8 === 0) {
      return "Sri's ";
    }else if (Data.getRandomNum() % 6 === 0) {
      return "John's ";
    } else if (Data.getRandomNum() % 7 === 0) {
      return "Mera's ";
    } else if (Data.getRandomNum() % 4 === 0) {
      return "Eric's ";
    } else {
      return "Steven's "
    }
  }

  static getRandomNum() {
    return (Math.floor(Math.random() * Math.floor(10)));
  }
}

