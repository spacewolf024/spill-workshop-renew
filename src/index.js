import React from "react";
import { Component } from "react";
import { render } from "react-dom";
import SpillLayout from "./PLP/Spill-Layout";
import Data from "./Utils/Data";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import "./Styles/base.scss";
import dsktp_header from "./Styles/Images/header-dsktp.png"
import mobile_header from "./Styles/Images/header-mobile.png"
import dsktp_footer from "./Styles/Images/footer-dsktp.png"
import mobile_footer from "./Styles/Images/footer-mobile.png"
import Modal from '@material-ui/core/Modal';
import Filters from "./Filters/Filters";

class App extends Component {
  constructor() {
    super();

    this.state = {
      altCol: "",
      spillData: this.injectThemes(),
      header: this.isMobile ? mobile_header : dsktp_header,
      headerClass: this.isMobile ? "mobile-header" : "desktop-header",
      modalOpenBool: false,
      isMobile: false
    };

    this.injectThemes = this.injectThemes.bind(this);
    this.gridHandler = this.gridHandler.bind(this);
    this.windowWatcher = this.windowWatcher.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.windowWatcher);
    this.windowWatcher();
  }

  gridHandler() {
    if (this.state.altCol !== ' alt-columns') {
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

  closeModal() {
    this.setState({modalOpenBool: !this.state.modalOpenBool});

  }

  openModal() {
    this.setState({modalOpenBool: !this.state.modalOpenBool});
  }


  injectThemes() {
    let products = Data.GetProducts();
    let themes = Data.GetThemes();

    for (var i = 0; i < products.length; i++) {
      var obj = { ...Data.dataObj(), ...products[i] };
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
      <span>
      <div className="main">
        <img className={"header-img " + this.state.headerClass} src={this.state.header} alt="header" />

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
          openModal={this.openModal}
          closeModal={this.closeModal}
        />

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modalOpenBool}
          onClose={this.handleClose}
        >
          <div className="modal-body">
            <button className="modal-close-btn" onClick={this.closeModal}>&times;</button>
            <Filters />
          </div>
        </Modal>

      </div>
      
      <img className={"footer-img"} src={this.state.isMobile ? mobile_footer : dsktp_footer} alt="footer" />
      </span>
    );
  }
}

render(<App />, document.getElementById("root"));
