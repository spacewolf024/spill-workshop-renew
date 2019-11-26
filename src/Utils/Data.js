export default class Data {
  static GetProducts() {
    return [
      {
        name: "Some awesome name",
        price: "$99.99",
        type: "product",
        lineLevelMessage: {
          primary: "Cyber Week Sale",
          marketing: "New Arrival"
        },
        images: {
          base: Data.imageArr[0],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Super cool name",
        price: "$149.99",
        type: "product",
        lineLevelMessage: {
          primary: "Cyber Week Sale",
          marketing: "New Arrival"
        },
        images: {
          base: Data.imageArr[1],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Groovy Product",
        price: "$149.99 - $299",
        type: "product",
        colorbar: {
          showColorbar: true
        },
        lineLevelMessage: Data.getLineLevelMsgGenerator(),
        images: {
          base: Data.imageArr[2],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: Data.randomNameGenerator() + "favorite Product",
        price: "$1.99",
        type: "product",
        images: {
          base: Data.imageArr[3],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "This product has a really long name",
        price: "$1.99 - $2.99",
        type: "product",
        images: {
          base: Data.imageArr[4],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: Data.randomNameGenerator() + "Favorite Product",
        price: "$1.99",
        type: "product",
        images: {
          base: Data.imageArr[5],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "CB2's FAVORITE PRODUCT",
        price: "$99999.99",
        type: "product",
        images: {
          base: Data.imageArr[6],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Product name goes here",
        price: "$300 - $500",
        type: "product",
        images: {
          base: Data.imageArr[7],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Lorem ipsum productsum",
        price: "$1000.00",
        type: "product",
        images: {
          base: Data.imageArr[8],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Extra product, read all about it",
        price: "$300 - $500",
        type: "product",
        images: {
          base: Data.imageArr[9],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Soo many products",
        price: "$1000.00",
        type: "product",
        lineLevelMessage: Data.getLineLevelMsgGenerator(),
        images: {
          base: Data.imageArr[10],
          hover: "",
          isHoverable: ""
        }
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
    return ["Home", this.randomSuperCategoryGenerator(), this.randomCategoryGenerator(), this.randomSpillGenerator()];
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
          imagepath: "",
          altText: "",
          showPlus: "",
          sku: "",
          grouper: "",
          sor: ""
        }
      ],
      isFavorited: Data.randomBoolGenerator(),
      canFavorite: "",
      brand: "",
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
    return Data.getRandomNum() % 3 === 0 ? true : false;
  }

  static randomShippingMsgGenerator() {
    return Data.getRandomNum() % 3 === 0 ? "Free Shipping" : "";
  }

  static randomNameGenerator() {
    var nameArr = ["Mike's ", "Sri's ", "John's ", "Mera's ", "Eric's ", "Jack's ", "Steven's ", "Lindsey's "];
    return nameArr[Math.floor(Math.random() * Math.floor(nameArr.length))];
  }

  static randomSuperCategoryGenerator() {
    var nameArr = ["Furniture", "Outdoor Furniture", "Tabletop & Bar", "Kitchen", "Decor", "Rugs", "Lighting", "Bed & Bath", "Holidays & Gifts", "Sale"];
    return nameArr[Math.floor(Math.random() * Math.floor(nameArr.length))];
  }

  static randomCategoryGenerator() {
    var nameArr = ["Living Room Furniture", "Dining & Kitchen Furniture", "Bedroom Furniture", "Outdoor Furniture by Type", "Outdoor Furniture by Material", "Coffee & Tea", "Drinkware", "Dinnerware"];
    return nameArr[Math.floor(Math.random() * Math.floor(nameArr.length))];
  }

  static randomSpillGenerator() {
    var nameArr = ["Sofas & Loveseats", "Sleeper Sofas", "Patio Umbrellas", "Bakeware", "Wine Glasses", "Table Lamps", "Gourmet Food & Beverage", "Coffee Mugs & Tea Cups"];
    return nameArr[Math.floor(Math.random() * Math.floor(nameArr.length))];
  }

  static getLineLevelMsgGenerator() {
    if (Data.getRandomNum() % 5) {
      return {
        primary: Data.getRandomNum() % 5 ? "Cyber Week Sale" : "",
        marketing: Data.getRandomNum() % 5 ? "New Arrival" : "",
        shipping: Data.randomShippingMsgGenerator()
      };
    }
  }

  static getRandomNum() {
    return Math.floor(Math.random() * Math.floor(10));
  }

  static imageArr = [
    "https://images.crateandbarrel.com/is/image/Crate/RedRimBuffetPlateSHF16/$web_spill_item$/190411135354/red-rim-buffet-plate.jpg?wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/AminaDinnerPlateSHS20/$web_spill_item$/190926135355/amina-dinner-plate.jpg?wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/WrenGreyDinnerPlateSHS20/$web_spill_item$/190927162448/wren-grey-dinner-plate.jpg?wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/AllCladD3Curated4qtSauteseSHS20/$web_spill_item$/191105171253/all-clad-d3-curated-4-qt-sautese.jpg?wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/AllCladD3Curated2p5SaucierSHS20/$web_spill_item$/191105171307/all-clad-d3-curated-2.5-saucier.jpg?wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/LodgeCastIronTrnglMiniSrvrSHF19/$web_spill_item$/190531160648/lodge-cast-iron-triangle-mini-server.jpg?wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/AllCladHA1HrdAndzNS8qStkptSHS19/$web_spill_item$/190411134736/all-clad-ha1-hard-anodized-nonstick-8-qt.-stockpot.jpg?wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/WolfGrmt2SlcTstrRedKnobsSHS20/$web_spill_item$/191023114340/ea-wolf-gourmet-2-slice-toaster-red-knobs.jpg?wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/NylonSSCookieSpatulasS3SHS17/$web_spill_item$/190411135306/nylon-and-stainless-steel-cookie-spatulas-set-of-three.jpg?wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/GoldAcaciaMeasuringSpoonsSHF18/$web_spill_item$/190411135059/acacia-wood-and-gold-measuring-spoons-set-of-4.jpg?wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/EpicureanBgBlkSltRctCutBrdSHS19/$web_spill_item$/190411135028/epicurean-big-block-rectangular-slate-cutting-board.jpg?wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/BerryBoxColander5p25inWhtSHF19/$web_spill_item$/190411134830/berry-box-white-colander.jpg?wid=625&hei=625"
  ];

  static getImageUrl() {
    return Data.imageArr[Math.floor(Math.random() * Math.floor(Data.imageArr.length))];
  }
}
