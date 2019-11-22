import React from "react";
import { Component } from "react";
import ProductCard from "./Product-Card";
import ThemeCard from "./Theme-Card";
import Filters from "./Filters";
import SortFilter from "./Sort-Filter";
import Data from "../Data";

import "../Styles/spill.scss";

class Spill extends Component {
  constructor() {
    super();
    this.state = { showFilter: false };
    this.filterClick = this.filterClick.bind(this);
  }

  filterClick = (show) => {
    this.setState({ showFilter: show });
  };

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
    console.log(itemsData);
    
    var themesData = Data.GetThemes();
    var cardsData = this.injectThemes(itemsData, themesData);
    var filtersActive = this.state.showFilter ? " active-filters" : "";

    var cards = cardsData.map((item, index) => {
      if (item.type === "theme") {
        return <ThemeCard key={index} item={item} index={index} />;
      } else {
        return <ProductCard key={index} item={item} index={index} />;
      }
    });

    return (
      <main>
        <div className="spill-container">

          <Filters 
            itemCount={itemsData.length} 
            filterActive={this.state.showFilter} 
            showFilter={this.filterClick} 
            hideFilter={this.filterClick}
            onGridClick={this.props.onGridClick}
          />

          <SortFilter 
            showFilter={this.state.showFilter} 
            closeFilter={this.filterClick}
          />

          <ul className={"miniset-list" + this.props.cols + filtersActive}>{cards}</ul>
        </div>
      </main>
    );
  }
}

export default Spill;
