import React, { Component } from "react";
import BreadcrumbList from "./Breadcrumb-List";
import Data from "../Utils/Data";
import "../Styles/breadcrumbs.scss";

class Breadcrumbs extends Component {
  constructor() {
    super();
    this.state = {
      breadcrumbs: Data.GetBreadcrumbs(),
      meatballClick: false,
      meatballBreadcrumb: false,
      class: "meatball-list"
    };
    this.click = this.click.bind(this);
    this.windowWatcher = this.windowWatcher.bind(this);
  }

  active = true;

  handleClick = () => {
    this.props.onListClick(!this.state.meatballClick);
    console.log(this.props.cats);
  };

  generatedListInlineStyle(index) {
    return {
      transitionDelay: this.active ? `${index * 0.2 + 0.2}s` : `${index * 0.2 + 0.1}s`
    };
  }

  generatedSpanInlineStyle(index) {
    return {
      transitionDelay: this.active ? `${index * 0.2}s` : `${index * 0.2 + 0.2}s`
    };
  }

  renderList() {
    return this.state.breadcrumbs.map((item, index) => {
      if (index > 0 && index < this.state.breadcrumbs.length - 1) {
        return (
          <li className="ani-items items" key={index} style={this.generatedListInlineStyle(index)}>
            <span style={this.generatedSpanInlineStyle(index)}>{item}</span>
          </li>
        );
      }
    });
  }

  click() {
    this.active = !this.active;
    this.setState({
      class: this.state.class === "meatball-list" ? "meatball-list actived" : "meatball-list",
      meatClass: "hide"
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.windowWatcher);
    this.windowWatcher();
  }

  windowWatcher() {
    if (window.innerWidth < 769) {
      this.setState({ meatballBreadcrumb: true });
    } else {
      this.setState({ meatballBreadcrumb: false });
    }
  }

  render() {
    const list = this.renderList();
    if (this.state.meatballBreadcrumb) {
      return (
        <nav>
          <ol className={this.state.class}>
            <li className="items">{this.state.breadcrumbs[0]}</li>
            <li className={"items " + this.state.meatClass} onClick={this.click}>
              <svg className="meatballs">
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>yarn
              </svg>
            </li>
            {list}
            <li className="items">{this.state.breadcrumbs[this.state.breadcrumbs.length - 1]}</li>
          </ol>
        </nav>
      );
    } else {
      return (
        <nav>
          <ol className={this.state.class}>
            {this.state.breadcrumbs.map((item, index) => (
              <BreadcrumbList key={index} crumb={item} onListClick={this.click} />
            ))}
          </ol>
        </nav>
      );
    }
  }
}

export default Breadcrumbs;
