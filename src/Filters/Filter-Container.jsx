import React, { Component } from "react";
import Filters from "./Filters";
import PerfectScrollbar from 'perfect-scrollbar';
import '../Styles/filters.scss';

class FilterContainer extends Component {
  constructor(props) {  
    super(props);
    this.hideClick = this.hideClick.bind(this);
    this.propPasser = this.propPasser.bind(this);
  }

  hideClick() {
    this.props.closeFilter(!this.props.showFilter);
  }

  componentDidMount() {
    const ps = new PerfectScrollbar('#FilterContainer');
  }

  propPasser() {
    this.props.filterChange();
  }

  render() {
    var showHideClass = this.props.showFilter ? 'show-filter' : 'hide-filter';
    
    return (
      <section id="FilterContainer" className={showHideClass}>
        <Filters 
          passer={this.propPasser} 
        />
      </section>
    )
  }
}

export default FilterContainer;
