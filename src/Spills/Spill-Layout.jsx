import React, { Component } from "react";
import ProductCard from './Product-Card';
import Filters from './Filters';
import SortFilter from './Sort-Filter';
import '../Styles/spill.scss';

class Spill extends Component {

  constructor() {  
    super();
    this.state = ({showFilter: false});
    this.createProducts = this.createProducts.bind(this);
    this.filterClick = this.filterClick.bind(this);
  }

  filterClick = (show) => {
    this.setState({showFilter: show});
  }

  createProducts() {
    var productArray = [];
    for(let i = 1; i <= 25; i++) {
      let product = { 
        name: 'Product ' + i,
        price: '$Price '
      }
      productArray.push(product);
    }
    return productArray;
  }

  render() {
    var items = this.createProducts();
    var filtersActive = this.state.showFilter ? ' active-filters' : '';

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
          {
            items.map((item, index) => (
              <ProductCard 
                key={index}
                item={item}
                index={index}
              />
            ))
          }
        </ul>
      </div>
    )
  } 
}

export default Spill;