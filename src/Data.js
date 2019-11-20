export default class Data {
  static Product() {
    return [
      { name: "Some awesome name", price: "$99.99", type: "product" },
      {
        name: "Super cool name",
        price: "$149.99",
        type: "product",
        lineLevelMessage: {
          primary: "test"
        }
      },
      { name: "Groovy Product", price: "$149.99 - $299", type: "product" },
      { name: "Theme 1", type: "theme" },
      { name: "John's favorite Product", price: "$1.99", type: "product" },
      { name: "This product has a really long name", price: "$1.99 - $2.99", type: "product" },
      { name: "John's Favorite Product", price: "$1.99", type: "product" },
      { name: "Theme 2", type: "theme" },
      { name: "CB2's FAVORITE PRODUCT", price: "$99999.99", type: "product" },
      { name: "Product name goes here", price: "$300 - $500", type: "product" },
      { name: "Theme 3", type: "theme" },
      { name: "Lorem ipsum productsum", price: "$1000.00", type: "product" }
    ];
  }

  static Breadcrumbs() {
    return ["Home", "Super", "Category", "Spill"];
  }
}
