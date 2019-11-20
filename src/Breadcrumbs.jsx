import React, { Component, PureComponent, Fragment } from "react";

export default class Breadcrumbs extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const breadcrumbs = this.props.breadcrumbs.map((item, index) => {
      return <li>{item}</li>;
    });
    return <ul className="breadcrumbs">{breadcrumbs}</ul>;
  }
}
