export default class Data {
  static GetProducts() {
    return [
      {
        name: "Washed Organic Cotton Sheet Sets",
        price: "$39.95 - $169.95",
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
        name: "Linen Sheet Sets",
        price: "$49.95 - $279.95",
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
        name: "Sateen 600 Thread Count Sheet Sets",
        price: "$34.95 - $189.95",
        type: "product",
        lineLevelMessage: Data.getLineLevelMsgGenerator(),
        images: {
          base: Data.imageArr[2],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Flannel Sheet Sets",
        price: "$29.95 - $159.95",
        type: "product",
        images: {
          base: Data.imageArr[3],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Haven Percale Sheet Sets",
        price: "$24.95 - $129.95",
        type: "product",
        images: {
          base: Data.imageArr[4],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: '400 Thread Count Sateen Sheet Sets',
        price: "$24.95 - $159.95",
        type: "product",
        images: {
          base: Data.imageArr[5],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Valeta Organic Sheet Sets",
        price: "$24.95 - $139.95",
        type: "product",
        images: {
          base: Data.imageArr[6],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Neville Organic Patterned Sheet Sets",
        price: "$24.95 - $139.95",
        type: "product",
        images: {
          base: Data.imageArr[7],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Lior Organic Embroidered Sheet Sets",
        price: "$29.95 - $139.95",
        type: "product",
        images: {
          base: Data.imageArr[8],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "400 Thread Count Percale Sheet Sets",
        price: "$24.95 - $159.95",
        type: "product",
        images: {
          base: Data.imageArr[9],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Ellio Organic Sheet Sets",
        price: "$24.95 - $129.95",
        type: "product",
        lineLevelMessage: Data.getLineLevelMsgGenerator(),
        images: {
          base: Data.imageArr[10],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Willow Sheet Sets",
        price: "$45.00 - $170.00",
        type: "product",
        lineLevelMessage: Data.getLineLevelMsgGenerator(),
        images: {
          base: Data.imageArr[11],
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
    return ["Home", "Bed & Bath", "Bedding",  "Sheets"];
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
      colorBar: 
        {
          imagepath: Data.randomColorBarCreator(),
          altText: '',
          showPlus: '',
          sku: '',
          grouper: '',
          sor: ''
        },
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

  static randomHexGenerator(){
    return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  }

  static randomColorBarCreator(){
    let colorbarImages = [];
    const randomNum = 5;
    for(let i = 0; i < randomNum; i++){
      colorbarImages.push(Data.randomHexGenerator());
    }
    return colorbarImages;
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
    "https://images.crateandbarrel.com/is/image/Crate/WashedOrganicSheetGroupFHS20/?$web_product_hero$&191126112234&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/LinenSheetStackFHS19/?$web_product_hero$&190411135201&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/Sateen600TCStackFHS19/?$web_product_hero$&190411135418&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/FlannelSheetGroupFHF18/?$web_product_hero$&190411135039&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/HavenSheetGroupFHF18/?$web_product_hero$&190411135114&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/Sateen400TCSheetStackFHF19/?$web_product_hero$&190624145254&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/ValetaSheetStackFHF19/?$web_product_hero$&190624151337&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/NevilleSheetStackFHF19/?$web_product_hero$&190508142407&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/LiorSheetStackFHF19/?$web_product_hero$&190513124341&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/Percale400TCStackFHS19/?$web_product_hero$&190411135331&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/EllioSheetStackFHS19/?$web_product_hero$&190411135024&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/WillowQueenSheetSetSHS19/?$web_product_hero$&190411135553&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/WillowQueenSheetSetSHS19/?$web_product_hero$&190411135553&wid=625&hei=625"
  ];

  static getImageUrl() {
    return Data.imageArr[Math.floor(Math.random() * Math.floor(Data.imageArr.length))];
  }
}
