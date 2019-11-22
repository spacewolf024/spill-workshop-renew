import React, { Component } from "react";
import '../Styles/filters.scss';

class SortFilter extends Component {
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
      <div className={showHideClass}>
        <button onClick={this.hideClick} className='hide-filter-btn'>Hide Filters</button>
      </div>
    )
  }
}

export default SortFilter;
