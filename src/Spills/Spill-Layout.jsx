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

  filterClick = show => {
    this.setState({ showFilter: show });
  };

  render() {
    var itemsData = Data.Product();
    var filtersActive = this.state.showFilter ? " active-filters" : "";

    var cards = itemsData.map((item, index) => {
      if (item.type === "theme") {
        return <ThemeCard key={index} item={item} index={index} />;
      } else {
        return <ProductCard key={index} item={item} index={index} />;
      }
    });

    return (
      <main>
        <div className="spill-container">
          <Filters itemCount={itemsData.length} filterActive={this.state.showFilter} showFilter={this.filterClick} />

          <SortFilter show={this.state.showFilter} hideFilter={this.filterClick} />

          <ul className={"miniset-list" + this.props.cols + filtersActive}>{cards}</ul>
        </div>
      </main>
    );
  }
}

export default Spill;
