import React, { Component } from "react";
import '../Styles/filters.scss';

class Filters extends Component {

  constructor(props) {  
    super(props);
    this.state = ({showFilter: this.props.filterActive})
    this.sortClickhandler = this.sortClickhandler.bind(this);
  }

  sortClickhandler = () => {
    this.props.showFilter(!this.state.filterActive);
    this.setState({showFilter: !this.state.showFilter});
  }

  render() {
    return (
      <div>
        <ul className='filter-container'>
          <li className='sort-filter' >
            <button onClick={this.sortClickhandler}>Sort &amp; Filter</button>
          </li>
          <li className='bops-filter'>
            <button>BOPS / Ready to Deliver Filter</button>
          </li>
          <li className='item-count'>{this.props.itemCount} items</li>
          {/* <li className='col-switch'>
            <button className={'small-cols'}>X cols</button>
            <button className={'lrg-cols'}>Y cols</button>
          </li> */}
        </ul>
      </div>
    )
  }
}

export default Filters;
