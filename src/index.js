import React from "react";
import { Component } from "react";
import { render } from "react-dom";
import SpillLayout from "./Spills/Spill-Layout";
import Data from "./Utils/Data";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import "./Styles/base.scss";
import dsktp_header from "./Styles/Images/header-dsktp.png"
import mobile_header from "./Styles/Images/header-mobile.png"

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      altCol: "" ,
      spillData: this.injectThemes(),
      isMobile: this.windowWatcher(),
      header: this.isMobile ? mobile_header : dsktp_header,
      headerClass: this.isMobile ? "mobile-header" : "desktop-header"
    };

    this.injectThemes = this.injectThemes.bind(this);
    this.gridHandler = this.gridHandler.bind(this);
    this.windowWatcher = this.windowWatcher.bind(this);
  }

  gridHandler() {
    if(this.state.altCol !== ' alt-columns') {
      this.setState({ altCol: ' alt-columns' });
    } else {
      this.setState({ altCol: '' });
    }
  }

  windowWatcher() {
    if (window.innerWidth < 769) {
      this.setState({ isMobile: true, header: mobile_header, headerClass: "mobile-header" });
      return true;
    } else {
      this.setState({ isMobile: false, header: dsktp_header, headerClass: "desktop-header" });
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
        <img className={"header-img " + this.state.headerClass} src={this.state.header} />

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
