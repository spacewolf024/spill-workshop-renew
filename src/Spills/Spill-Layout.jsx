import React from 'react';
import  { Component } from "react";
import ProductCard from './Product-Card';
import ThemeCard from './Theme-Card';
import Filters from './Filters';
import SortFilter from './Sort-Filter';
import ProductData from './Product-Data';

import '../Styles/spill.scss';

class Spill extends Component {

  constructor() {  
    super();
    this.state = ({showFilter: false});
    this.filterClick = this.filterClick.bind(this);
  }

  filterClick = (show) => {
    this.setState({showFilter: show});
  }

  render() {
    var items = ProductData();
    var filtersActive = this.state.showFilter ? ' active-filters' : '';

    var cards = items.map((item, index) => {
      if(item.type === 'theme')
      {
       return <ThemeCard 
                key={index}
                item={item}
                index={index}
              />
      }
      else {
        return  <ProductCard 
                key={index}
                item={item}
                index={index}
              />
      }})

    return (
      <div className='spill-container'>

        <Filters 
          itemCount={items.length}
          filterActive={this.state.showFilter}
          showFilter={this.filterClick}
        />
        
        <SortFilter 
          show={this.state.showFilter}
          hideFilter={this.filterClick}
        />

        <ul className={'miniset-list ' + this.props.cols + filtersActive}>
          {cards}
        </ul>
      </div>
    )
  } 
}

export default Spill;