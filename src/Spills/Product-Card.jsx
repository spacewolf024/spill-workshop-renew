import React, { Component } from "react";
import "../Styles/cards.scss";

class ProductCard extends Component {
  render() {
    const colorbar = this.props.item.showColorbar && <div>Colorbar</div>;
    const favorite = this.props.item.showFavorite && <div>Favorite</div>;
    const marketingMessage = this.props.item.lineLevelMessage && this.props.item.lineLevelMessage.marketing && <span>{this.props.item.lineLevelMessage.marketing}</span>;
    const primaryMessage = this.props.item.lineLevelMessage && this.props.item.lineLevelMessage.primary && <span>{this.props.item.lineLevelMessage.primary}</span>;
    const shippingMessage = this.props.item.lineLevelMessage && this.props.item.lineLevelMessage.shipping && <span>{this.props.item.lineLevelMessage.shipping}</span>;

    return (
      <li className="blank-card">
        <div className="blank-image"></div>
        {favorite}
        {colorbar}
        {marketingMessage}
        <span className="name">{this.props.item.name}</span>
        <span className="price">{this.props.item.price}</span>
        {primaryMessage}
        {shippingMessage}
      </li>
    );
  }
}

export default ProductCard;
