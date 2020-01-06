export default class Data {
  static GetProducts() {
    return [
      {
        name: "Le Creuset ® 2.25-Quart Cerise Everyday Pan with Lid",
        price: "$250.00",
        type: "product",
        lineLevelMessage: {
          primary: "Cyber Week Sale",
          marketing: "New Arrival"
        },
        showColorbar: true,
        colorBar: 
          {
            imagepath: Data.randomColorBarCreator(),
            altText: '',
            showPlus: '',
            sku: '',
            grouper: '',
            sor: ''
          },
        images: {
          base: Data.imageArr[0],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Le Creuset ® 2.25-Quart Marine Everyday Pan with Lid",
        price: "$250.00",
        type: "product",
        lineLevelMessage: {
          primary: "Cyber Week Sale",
          marketing: "New Arrival"
        },
        showColorbar: true,
        colorBar: 
          {
            imagepath: Data.randomColorBarCreator(),
            altText: '',
            showPlus: '',
            sku: '',
            grouper: '',
            sor: ''
          },
        images: {
          base: Data.imageArr[1],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Le Creuset ® Heritage Covered Rectangular Fig Baking Dish",
        price: "$110.00",
        type: "product",
        lineLevelMessage: Data.getLineLevelMsgGenerator(),
        showColorbar: true,
        colorBar: 
          {
            imagepath: Data.randomColorBarCreator(),
            altText: '',
            showPlus: '',
            sku: '',
            grouper: '',
            sor: ''
          },
        images: {
          base: Data.imageArr[2],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "All-Clad ® d3 Curated 4-Quart Sauteuse Pan",
        price: "$279.95",
        type: "product",
        images: {
          base: Data.imageArr[3],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "All-Clad ® d3 Curated 8.5\" Skillet",
        price: "$119.95",
        type: "product",
        images: {
          base: Data.imageArr[4],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: 'All-Clad ® d3 Curated 5-Quart Stockpot',
        price: "$294.95",
        type: "product",
        images: {
          base: Data.imageArr[5],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Le Creuset ® 2.25-Quart Oyster Everyday Pan with Lid",
        price: "$250.00",
        type: "product",
        showColorbar: true,
        colorBar: 
          {
            imagepath: Data.randomColorBarCreator(),
            altText: '',
            showPlus: '',
            sku: '',
            grouper: '',
            sor: ''
          },
        images: {
          base: Data.imageArr[6],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "All-Clad ® d3 Curated 5-Quart Stockpot",
        price: "$294.95",
        type: "product",
        images: {
          base: Data.imageArr[7],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Le Creuset ® 2.25-Quart Oyster Everyday Pan with Lid",
        price: "$250.00",
        type: "product",
        showColorbar: true,
        colorBar: 
          {
            imagepath: Data.randomColorBarCreator(),
            altText: '',
            showPlus: '',
            sku: '',
            grouper: '',
            sor: ''
          },
        images: {
          base: Data.imageArr[8],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Le Creuset ® 2.25-Quart Caribbean Everyday Pan with Lid",
        price: "$250.00",
        type: "product",
        showColorbar: true,
        colorBar: 
          {
            imagepath: Data.randomColorBarCreator(),
            altText: '',
            showPlus: '',
            sku: '',
            grouper: '',
            sor: ''
          },
        images: {
          base: Data.imageArr[9],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "All-Clad ® d3 Curated 2.5-Quart Saucier",
        price: "$129.95",
        type: "product",
        lineLevelMessage: Data.getLineLevelMsgGenerator(),
        images: {
          base: Data.imageArr[10],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "All-Clad ® d3 Curated 10.5? Fry Pan",
        price: "$99.95",
        type: "product",
        lineLevelMessage: Data.getLineLevelMsgGenerator(),
        images: {
          base: Data.imageArr[11],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Le Creuset ® Signature Graphite 2.75-Qt. Round Dutch Oven",
        price: "$250.00",
        type: "product",
        lineLevelMessage: Data.getLineLevelMsgGenerator(),
        showColorbar: true,
        colorBar: 
          {
            imagepath: Data.randomColorBarCreator(),
            altText: '',
            showPlus: '',
            sku: '',
            grouper: '',
            sor: ''
          },
        images: {
          base: Data.imageArr[12],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Le Creuset ® 2.25-Quart White Everyday Pan with Lid",
        price: "$250.00",
        type: "product",
        lineLevelMessage: Data.getLineLevelMsgGenerator(),
        showColorbar: true,
        colorBar: 
          {
            imagepath: Data.randomColorBarCreator(),
            altText: '',
            showPlus: '',
            sku: '',
            grouper: '',
            sor: ''
          },
        images: {
          base: Data.imageArr[13],
          hover: "",
          isHoverable: ""
        }
      },
      {
        name: "Le Creuset ® Signature Cream 2.75-Qt. Round Dutch Oven",
        price: "$250.00",
        type: "product",
        lineLevelMessage: Data.getLineLevelMsgGenerator(),
        showColorbar: true,
        colorBar: 
          {
            imagepath: Data.randomColorBarCreator(),
            altText: '',
            showPlus: '',
            sku: '',
            grouper: '',
            sor: ''
          },
        images: {
          base: Data.imageArr[14],
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
    return ["Home",  "Kitchen",  "Cookware & Bakeware",  "Individual Cookware"];
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
      showColorbar: false,
      colorBar: 
        {
          imagepath: '',
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
    "https://images.crateandbarrel.com/is/image/Crate/LeCreuset2p25BraiserCeriseSHS20/?$web_product_hero$&191202173358&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/LeCreuset2p25BraiserMarineSHS20/?$web_product_hero$&191202173358&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/LeCreuHrtgCvdRctBkngDshFigSHS20/?$web_product_hero$&191106121336&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/AllCladD3Curated4qtSauteseSHS20/?$web_product_hero$&191105171253&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/AllCladD3Curated8p5inSklltSHS20/?$web_product_hero$&191105171307&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/AllCladD3Curated5qtStockptSHS20/?$web_product_hero$&191105171307&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/LeCreuset2p25BraiserOysterSHS20/?$web_product_hero$&191202173357&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/AllCladD3Curated5qtStockptSHS20/?$web_product_hero$&191105171307&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/LeCreuset2p25BraiserOysterSHS20/?$web_product_hero$&191202173357&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/LeCreuset2p25BraiserCaribSHS20/?$web_product_hero$&191202173358&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/AllCladD3Curated2p5SaucierSHS20/?$web_product_hero$&191105171307&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/AllCladD3Curated10p5FryPanSHS20/?$web_product_hero$&191105171307&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/LeCreuSg2p75qtRdDchOvnGphSHF18/?$web_product_hero$&190411135153&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/LeCreu2p25qtBraiserWhtSHS20/?$web_product_hero$&191025113356&wid=625&hei=625",
    "https://images.crateandbarrel.com/is/image/Crate/LeCreuSg2p75qtRdDchOvnCrmSHF18/?$web_product_hero$&190411135153&wid=625&hei=625"
  ];

  static getImageUrl() {
    return Data.imageArr[Math.floor(Math.random() * Math.floor(Data.imageArr.length))];
  }
}
