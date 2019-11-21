import React from "react";
import { Component } from "react";
import { render } from "react-dom";
import SpillLayout from "./Spills/Spill-Layout";
import Data from "./Data";
import Breadcrumbs from "./Breadcrumbs";

import "./Styles/base.scss";


class App extends Component {
  constructor() {
    super();
    this.state = {
      altCol: ""
    };

    this.gridHandler = this.gridHandler.bind(this);
  }

  gridHandler() {
    if(this.state.altCol !== ' alt') {
      this.setState({ altCol: ' alt' });
    } else {
      this.setState({ altCol: '' });
    }
  };

  render() {
    let breadcrumbsData = Data.GetBreadcrumbs();

    return (
      <div>
        <h2>Header</h2>
        <hr />
        <Breadcrumbs breadcrumbs={breadcrumbsData} />
        
        <SpillLayout 
          cols={this.state.altCol} 
          onGridClick={this.gridHandler}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
