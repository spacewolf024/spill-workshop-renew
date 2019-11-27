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
      altCol: "" ,
      spillData: this.injectThemes(),
      isMobile: this.windowWatcher()
    };
    this.injectThemes = this.injectThemes.bind(this);
    this.gridHandler = this.gridHandler.bind(this);
    this.windowWatcher = this.windowWatcher.bind(this);
  }

  gridHandler() {
    if(this.state.altCol !== ' alt') {
      this.setState({ altCol: ' alt' });
    } else {
      this.setState({ altCol: '' });
    }
  }

  windowWatcher() {
    if (window.innerWidth < 769) {
      this.setState({ isMobile: true });
      return true;
    } else {
      this.setState({ isMobile: false });
      return false;
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.windowWatcher);
    this.windowWatcher();
  }


  injectThemes() {
    let products = Data.GetProducts();
    let themes = Data.GetThemes();

    for(var i = 0; i < products.length; i++) {
      var obj = {...Data.dataObj(), ...products[i]};
      products[i] = obj;
    }

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
    return (
      <div className="main">

        <h2>Header</h2>
        <hr />

        <div className="page-header">
          <Breadcrumbs 
            isMobile={this.state.isMobile}
          />
          <h1>Kitchen Tools and Accessories</h1>
        </div>
        
        <SpillLayout 
          cols={this.state.altCol} 
          spillDTO={this.state.spillData}
          onGridClick={this.gridHandler}
          isMobile={this.state.isMobile}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
