import React, { Component } from "react";

export default class Breadcrumbs extends Component {
  render() {
    const breadcrumbs = this.props.breadcrumbs.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return <nav><ul className="breadcrumbs">{breadcrumbs}</ul></nav>;
  }
}
