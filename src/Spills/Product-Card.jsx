import React, { Component } from "react";
import '../Styles/cards.scss';

class ProductCard extends Component {
  constructor(props) {  
    super(props);
  }

  render() {
    return (
      <li className='blank-card'>
        <div className='blank-image'></div>
        <span className='name'>{this.props.item.name}</span>
        <span className='price'>{this.props.item.price}</span>
      </li>
    )
  }
}

export default ProductCard;
