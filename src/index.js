import React from "react";
import { Component } from "react";
import { render } from "react-dom";
import SpillLayout from "./Spills/Spill-Layout";
import Data from "./Utils/Data";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

import "./Styles/base.scss";


class App extends Component {
  constructor() {
    super();
    this.state = {
      altCol: ""  
    };
    this.injectThemes = this.injectThemes.bind(this);
    this.gridHandler = this.gridHandler.bind(this);
  }

  gridHandler() {
    if(this.state.altCol !== ' alt') {
      this.setState({ altCol: ' alt' });
    } else {
      this.setState({ altCol: '' });
    }
  };

  injectThemes = (products, themes) => {
    //loop through themes and insert theme into the proper position with the products array
    let cards = [...products]; //clone array
    themes.forEach(theme => {
      let position = theme.position - 1; //account for 0th item
      if (products.length > position) {
        cards.splice(position, 0, theme);
      }
    });
    return cards;
  }

  render() {
    let breadcrumbsData = Data.GetBreadcrumbs();
    let productArr = Data.GetProducts();
    let themeArr = Data.GetThemes();

    for(var i = 0; i < productArr.length; i++) {
      var obj = {...Data.dataObj(), ...productArr[i]};
      productArr[i] = obj;
    }

    this.state = {
      spillData: this.injectThemes(productArr, themeArr)
    };

    return (
      <div>
        <h2>Header</h2>
        <hr />
        <Breadcrumbs 
          breadcrumbs={breadcrumbsData} 
        />
        <h1>Kitchen Tools and Accessories</h1>
        <SpillLayout 
          cols={this.state.altCol} 
          spillDTO={this.state.spillData}
          onGridClick={this.gridHandler}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
