import React, { Component } from "react";
import "../Styles/cards.scss";

class ThemeCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let height = this.props.height || 1;
    let width = this.props.width || 1;
    let gridClass = `grid-${width}x${height}`;
    return (
      <li className={`theme-card blank-card ${gridClass}`}>
        <div className="blank-image"></div>
      </li>
    );
  }
}

export default ThemeCard;