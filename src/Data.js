export default class Data {
  static GetProducts() {
    return [
      { name: "Some awesome name", 
        price: "$99.99", 
        type: "product" ,
        lineLevelMessage: {
          primary: "Cyber Week Sale",
          marketing: "New Arrival"
        }
      },
      {
        name: "Super cool name",
        price: "$149.99",
        type: "product",
        lineLevelMessage: {
          primary: "Cyber Week Sale",
          marketing: "New Arrival"
        }
      },
      {
        name: "Groovy Product",
        price: "$149.99 - $299",
        type: "product",
        colorbar: {
          showColorbar: true
        },
        lineLevelMessage: Data.getLineLevelMsgGenerator()
      },
      { name: Data.randomNameGenerator() + "favorite Product", price: "$1.99", type: "product" },
      { name: "This product has a really long name", price: "$1.99 - $2.99", type: "product" },
      { name: Data.randomNameGenerator() + "Favorite Product", price: "$1.99", type: "product" },
      { name: "CB2's FAVORITE PRODUCT", price: "$99999.99", type: "product" },
      { name: "Product name goes here", price: "$300 - $500", type: "product" },
      { name: "Lorem ipsum productsum", price: "$1000.00", type: "product" },
      { name: "Extra product, read all about it", price: "$300 - $500", type: "product" },
      { 
        name: "Soo many products", 
        price: "$1000.00", 
        type: "product",
        lineLevelMessage: Data.getLineLevelMsgGenerator()
      }
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
      name: "",
      familyId: "",
      skuId: "",
      type: "",
      templateType: "",
      url: "",
      price: "",
      formattedPrice: "",
      shippingMsg: Data.randomShippingMsgGenerator(),
      lineLevelMessage: Data.getLineLevelMsgGenerator(),
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
      images: {
          base: Data.getImageUrl(),
          hover: "",
          isHoverable: ""
      },
      reviewRating: "",
      optionChoice: "",
      baseLoggingUrl: ""
    };
  }

  static randomBoolGenerator() {
    return (Data.getRandomNum() % 3 === 0 ) ? true : false;
  }

  static randomShippingMsgGenerator() {
    return (Data.getRandomNum() % 3 === 0 ) ? "Free Shipping" : ""; 
  }

  static randomNameGenerator() {
    var nameArr = ["Mike's ", "Sri's ", "John's ", "Mera's ", "Eric's ", "Jack's ", "Steven's " ];
    return nameArr[Math.floor(Math.random() * Math.floor(7))];
  }

  static getLineLevelMsgGenerator() {
    if (Data.getRandomNum() % 5) {
      return {
        primary: Data.getRandomNum() % 5 ? "Cyber Week Sale" : "",
        marketing: Data.getRandomNum() % 5 ? "New Arrival" : "",
        shipping: Data.randomShippingMsgGenerator()
      }
    }
  }

  static getRandomNum() {
    return (Math.floor(Math.random() * Math.floor(10)));
  }

  static getImageUrl() {
    var imageArr = [ 
      'https://images.crateandbarrel.com/is/image/Crate/RedRimBuffetPlateSHF16/$web_spill_item$/190411135354/red-rim-buffet-plate.jpg?wid=625&hei=625', 
      'https://images.crateandbarrel.com/is/image/Crate/AminaDinnerPlateSHS20/$web_spill_item$/190926135355/amina-dinner-plate.jpg?wid=625&hei=625',
      'https://images.crateandbarrel.com/is/image/Crate/WrenGreyDinnerPlateSHS20/$web_spill_item$/190927162448/wren-grey-dinner-plate.jpg?wid=625&hei=625',
      'https://images.crateandbarrel.com/is/image/Crate/AllCladD3Curated4qtSauteseSHS20/$web_spill_item$/191105171253/all-clad-d3-curated-4-qt-sautese.jpg?wid=625&hei=625',
      'https://images.crateandbarrel.com/is/image/Crate/AllCladD3Curated2p5SaucierSHS20/$web_spill_item$/191105171307/all-clad-d3-curated-2.5-saucier.jpg?wid=625&hei=625',
      'https://images.crateandbarrel.com/is/image/Crate/LodgeCastIronTrnglMiniSrvrSHF19/$web_spill_item$/190531160648/lodge-cast-iron-triangle-mini-server.jpg?wid=625&hei=625',
      'https://images.crateandbarrel.com/is/image/Crate/AllCladHA1HrdAndzNS8qStkptSHS19/$web_spill_item$/190411134736/all-clad-ha1-hard-anodized-nonstick-8-qt.-stockpot.jpg?wid=625&hei=625',
      'https://images.crateandbarrel.com/is/image/Crate/WolfGrmt2SlcTstrRedKnobsSHS20/$web_spill_item$/191023114340/ea-wolf-gourmet-2-slice-toaster-red-knobs.jpg?wid=625&hei=625'
    ];
  return imageArr[Math.floor(Math.random() * Math.floor(8))];

  }
}
