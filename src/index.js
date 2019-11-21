import React from "react";
import { Component } from "react";
import { render } from "react-dom";
import SpillLayout from "./Spills/Spill-Layout";
import GridSelector from "./Spills/Grid-Selector";
import "./Styles/base.scss";
import Data from "./Data";
import Breadcrumbs from "./Breadcrumbs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cols: ["one", "two", "three", "four", "five"],
      activeCol: "three"
    };
    this.gridHandler = this.gridHandler.bind(this);
    console.log("hello");
  }

  gridHandler = grid => {
    this.setState({ activeCol: this.state.cols[grid - 1] });
  };

  render() {
    let breadcrumbsData = Data.Breadcrumbs();

    return (
      <div>
        <Breadcrumbs breadcrumbs={breadcrumbsData} />
        <h2>Spill Layout</h2>
        <hr />
        <GridSelector onGridClick={this.gridHandler} />
        <SpillLayout cols={this.state.activeCol} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
