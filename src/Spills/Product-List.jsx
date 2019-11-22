import React, { Component } from "react";

class ProductList extends Component {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
   
  };

  render() {
    return (
      <li className="blank-card" onClick={this.handleClick}>

      </li>
    )
  }
}

export default ProductList;
