import React, { Component } from "react";
import GridSelector from './Grid-Selector';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import '../Styles/filters.scss';

class Filters extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      filterActiveClass: this.props.filterActive ? 'filter-shown' : 'filter-hidden',
      filterBtnText: this.props.mobile ? 'Sort & Filter' : 'Show Filter',
      itemCount: this.props.itemCount.filter((item, index) => (item.type === 'product'))
    });
    this.sortClickhandler = this.sortClickhandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  sortClickhandler() {
    if (!this.props.filterActive) {
      this.props.showFilter(!this.props.filterActive);
      var btnText = this.props.mobile ? 'Sort & Filter' : 'Hide Filter'
      this.setState({
        filterActiveClass: ' filter-shown',
        filterBtnText: btnText
      });
    } else {
      this.props.showFilter(!this.props.filterActive);
      var btnText = this.props.mobile ? 'Sort & Filter' : 'Show Filter'
      this.setState({
        filterActiveClass: 'filter-hidden',
        filterBtnText: btnText
      });
    }
  }

  render() {
    return (
      <section className="sticky-filter-container">
        {/* <li className="bops-switch">
            <FormGroup row>
              <FormControlLabel
                label="Free Pickup in Store"
                control={
                  <Switch
                    onChange={this.handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
              />
            </FormGroup>
          </li> */}
        <ul className='filter-container'>
          <li className={'sort-filter ' + this.state.filterActiveClass}>
            <button onClick={this.sortClickhandler}>{this.state.filterBtnText}</button>
          </li>
          <li className='bops-filter'>
            <button>Sort by<i></i></button>
          </li>

          <li className='item-count'>{this.state.itemCount.length} items
            <GridSelector onGridClick={this.props.onGridClick} />
          </li>
          {/* <li className='col-switch'>
            <button className={'small-cols'}>X cols</button>
            <button className={'lrg-cols'}>Y cols</button>
          </li> */}
        </ul>
      </section>
    )
  }
}

export default Filters;
