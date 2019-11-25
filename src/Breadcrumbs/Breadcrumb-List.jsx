import React, { Component } from "react";

class BreadcrumbList extends Component {
  handleClick = () => {
    this.props.onListClick(!this.state.meatballClick);
  };

  render() {
    return (
      <li className="items" onClick={this.handleClick}>
       <a href="#">{this.props.crumb}</a>
      </li>
    );
  }
}

export default BreadcrumbList;