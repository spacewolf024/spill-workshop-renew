import React, { PureComponent } from "react";

export default class Breadcrumbs extends PureComponent {
  render() {
    const breadcrumbs = this.props.breadcrumbs.map((item, index) => {
      return <li>{item}</li>;
    });
    return <ul className="breadcrumbs">{breadcrumbs}</ul>;
  }
}
