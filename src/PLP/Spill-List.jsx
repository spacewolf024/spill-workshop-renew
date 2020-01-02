import React, { Component } from "react";
import ProductCard from "./Product-Card";
import ThemeCard from "./Theme-Card";

class SpillList extends Component {

  constructor() {
    super();
    this.state = {loading: ''};
  }

  render() {

    var filtersActive = this.props.showFilter ? "active-filters" : 'deactivate-filters';
    var loading = '';

    if (this.props.spillDTO !== '') {
      var cards = this.props.spillDTO.map((item, index) => {
        if (item.type === "theme") {
          return <ThemeCard key={index} item={item} index={index} />;
        } else {
          return <ProductCard key={index} item={item} index={index} />;
        }
      });
    } else {
      loading = " loading";
    }

    const loader = <div className="lds-default"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div></div>;

    return (
      <section className={filtersActive + ' product-card-container'}>
        <ul className={"miniset-list " + this.props.cols + loading}>
            {this.props.spillDTO === "" ? loader : cards}
        </ul>
      </section>
    )
  }
}

export default SpillList;
