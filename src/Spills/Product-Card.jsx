import React, { Component } from "react";
import ProductColorbar from "./Product-Card-Colorbar";

import "../Styles/product-card.scss";

class ProductCard extends Component {
  render() {
    const colorbar = this.props.item.showColorbar && <ProductColorbar colorbar={this.props.item.colorBar} />
    const favorite = this.props.item.showFavorite && <div>Favorite</div>;
    const marketingMessage = this.props.item.lineLevelMessage && this.props.item.lineLevelMessage.marketing && <span>{this.props.item.lineLevelMessage.marketing}</span>;
    const primaryMessage = this.props.item.lineLevelMessage && this.props.item.lineLevelMessage.primary && <span>{this.props.item.lineLevelMessage.primary}</span>;
    const shippingMessage = this.props.item.lineLevelMessage && this.props.item.lineLevelMessage.shipping && <span>{this.props.item.lineLevelMessage.shipping}</span>;

    return (
      <li>
        <div className="blank-card">
          <div className="blank-image">
            <img className="blank-image" alt={this.props.item.images.base} src={this.props.item.images.base} />
            <button className="fav-btn">
              <svg id="svg-icon-heart-outline" viewBox="0 0 32 32">
                <title>Favorites</title>
                <path fill="none" stroke="currentColor" strokeWidth="context-stroke"   strokeLinejoin="miter" d="M22.533 3.067c-2.133 0-4.933 1.733-6.533 4.533-1.6-2.8-4.4-4.533-6.533-4.533-4.667 0-8.133 3.2-8.133 8 0 5.333 4.533 10.267 12.267 16.133 0.533 0.4 2.4 1.6 2.4 1.6s0 0 0 0 1.867-1.2 2.4-1.6c7.733-5.867 12.267-10.667 12.267-16.133 0-4.8-3.333-8-8.133-8z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="product-info">
          {favorite}
          {colorbar}
          {marketingMessage}
          <span className="name">{this.props.item.name}</span>
          <span className="price">{this.props.item.price}</span>
          {primaryMessage}
          {shippingMessage}
        </div>
      </li>
    );
  }
}

export default ProductCard;

