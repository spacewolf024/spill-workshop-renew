import React, { Component } from "react";
import Filters from "./Filters";
import PerfectScrollbar from 'perfect-scrollbar';
import { connect } from 'react-redux';
import store from '../Redux/Filters';
import '../Styles/filters.scss';

class FilterContainer extends Component {
  constructor(props) {  
    super(props);
    this.state = this.getCurrentStateFromStore();
    this.hideClick = this.hideClick.bind(this);
  }

  componentDidMount() {
    const ps = new PerfectScrollbar('#FilterContainer');
  }

  hideClick() {
    this.props.closeFilter(!this.props.showFilter);
  }

  getCurrentStateFromStore() {
    return {
      facets: store.getState()
    }
  }
  
  render() {
    var showHideClass = this.props.showFilter ? 'show-filter' : 'hide-filter';
    
    return (
      <section id="FilterContainer" className={showHideClass}>
        <Filters 
          facets={this.state.facets}
        />
      </section>
    )
  }
}

export default connect()(FilterContainer);
