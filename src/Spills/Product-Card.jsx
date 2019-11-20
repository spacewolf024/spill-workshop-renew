import React, { Component } from "react";
import "../Styles/cards.scss";

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const colorbar = this.props.showColorbar && <div>Colorbar</div>;
    const favorite = this.props.showFavorite && <div>Favorite</div>;
    const marketingMessage = this.props.lineLevelMessage && this.props.lineLevelMessage.marketing && <span>{this.props.lineLevelMessage.marketing}</span>;
    const primaryMessage = this.props.lineLevelMessage && this.props.lineLevelMessage.primary && <span>{this.props.lineLevelMessage.primary}</span>;
    const shippingMessage = this.props.lineLevelMessage && this.props.lineLevelMessage.shipping && <span>{this.props.lineLevelMessage.shipping}</span>;

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