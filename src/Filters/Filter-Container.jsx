import React, { Component } from "react";
import Filters from "./Filters";
import '../Styles/filters.scss';

class FilterContainer extends Component {
  constructor(props) {  
    super(props);
    this.hideClick = this.hideClick.bind(this);
  }

  hideClick() {
    this.props.closeFilter(!this.props.showFilter);
  }

  render() {
    var showHideClass = this.props.showFilter ? 'show-filter' : 'hide-filter';
    return (
      <section className={showHideClass}>
        <Filters />
      </section>
    )
  }
}

export default FilterContainer;
