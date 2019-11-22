import React, { Component } from "react";
import ProductCard from "./Product-Card";
import ThemeCard from "./Theme-Card";
import Data from "../Data";

class ProductList extends Component {

  injectThemes = (products, themes) => {
    //loop through themes and insert theme into the proper position with the products array
    let cards = products.slice(0); //clone array
    themes.forEach(theme => {
      let position = theme.position - 1; //account for 0th item
      if (products.length > position) {
        cards.splice(position, 0, theme);
      }
    });
    return cards;
  };

  render() {

    var itemsData = Data.GetProducts();
    for(var i = 0; i < itemsData.length; i++) {
      var obj = {...Data.dataObj(), ...itemsData[i]};
      itemsData[i] = obj;
    }

    var themesData = Data.GetThemes();
    var cardsData = this.injectThemes(itemsData, themesData);
    var filtersActive = this.props.showFilter ? " active-filters" : "";

    var cards = cardsData.map((item, index) => {
      if (item.type === "theme") {
        return <ThemeCard key={index} item={item} index={index} />;
      } else {
        return <ProductCard key={index} item={item} index={index} />;
      }
    });

    return (
      <section>
          <li className="blank-card" onClick={this.handleClick}>
            {cards}
          </li>
      </section>
      
    )
  }
}

export default ProductList;
