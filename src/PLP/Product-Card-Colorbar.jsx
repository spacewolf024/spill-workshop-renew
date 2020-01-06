import React, { Component } from "react";

class Colorbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hoveredItem: 0
        }
    }

    onclickHandler = (e) =>{
        console.log(e.target.getAttribute('data-item-num'));
        this.setState({hoveredItem:e.target.getAttribute('data-item-num')})
    }

    render() {

        const showMoreButton = this.props.colorbar.imagepath.length >= 5 && <button className="show-more-colors-btn">+</button>;

        const colorBar = this.props.colorbar.imagepath.map((el, i) => {
            return i === this.props.colorbar.imagepath.length - 1 ? <div style={{ display: "inline-block" }}><button onClick={this.onclickHandler} data-item-num={i} className={`product-colorbar-button ${this.state.hoveredItem == i ? 'hovered' : ""}`} style={{ backgroundColor: el }}></button>{showMoreButton}</div> : <button onClick={this.onclickHandler} data-item-num={i} className={`product-colorbar-button ${this.state.hoveredItem == i ? 'hovered' : ""}`} style={{ backgroundColor: el }}></button>
        })
        return (
            <div className="product-colorbar">
                {colorBar}
            </div>
        )
    }
}

export default Colorbar;