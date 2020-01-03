import React, { Component } from "react";
import ProductCard from "./Product-Card";
import ThemeCard from "./Theme-Card";

class SpillList extends Component {
  render() {
    var filtersActive = this.props.showFilter ? "active-filters" : 'deactivate-filters';

    var cards = this.props.spillDTO.map((item, index) => {
      if (item.type === "theme") {
        return <ThemeCard key={index} item={item} index={index} />;
      } else {
        return <ProductCard key={index} item={item} index={index} isMobile={this.props.isMobile} />;
      }
    });

    return (
      <section className={filtersActive + ' product-card-container'}>
        <ul className={"miniset-list " + this.props.cols}>
            {cards}
        </ul>
      </section>
    )
  }
}

export default SpillList;
