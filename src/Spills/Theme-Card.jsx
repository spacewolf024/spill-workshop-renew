import React, { PureComponent } from "react";
import "../Styles/product-card.scss";

class ThemeCard extends PureComponent {
  render() {
    let height = this.props.height || 1;
    let width = this.props.width || 1;
    let gridClass = `grid-${width}x${height}`;
    return (
      <li className={`theme-card product-card ${gridClass}`}>
        <div className="theme"></div>
      </li>
    );
  }
}

export default ThemeCard;
