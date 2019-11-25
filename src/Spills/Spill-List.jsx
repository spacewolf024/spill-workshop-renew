import React, { Component } from "react";
import ProductCard from "./Product-Card";
import ThemeCard from "./Theme-Card";

class SpillList extends Component {
  render() {
    var filtersActive = this.props.showFilter ? " active-filters" : "";

    var cards = this.props.spillDTO.map((item, index) => {
      if (item.type === "theme") {
        return <ThemeCard key={index} item={item} index={index} />;
      } else {
        return <ProductCard key={index} item={item} index={index} />;
      }
    });

    return (
      <section>
        <ul className={"miniset-list " + this.props.cols + filtersActive}>
            {cards}
        </ul>
      </section>
    )
  }
}

export default SpillList;
