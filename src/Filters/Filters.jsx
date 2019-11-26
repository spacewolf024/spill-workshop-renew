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
      filterActiveClass: 'filter-hidden',
      filterBtnText: 'Show Filter'
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
      this.setState({
        filterActiveClass: ' filter-shown',
        filterBtnText: 'Hide Filter'
      });
    } else {
      this.props.showFilter(!this.props.filterActive);
      this.setState({
        filterActiveClass: 'filter-hidden',
        filterBtnText: 'Show Filter'

    });
    }
  }

  render() {
    return (
      <section className="sticky-filter-container">
        <ul className='filter-container'>
          <li className={'sort-filter ' + this.state.filterActiveClass}>
            <button onClick={this.sortClickhandler}>{this.state.filterBtnText}</button>
          </li>
          <li className='bops-filter'>
            <button>Sort by</button>
          </li>
          <li className="bops-switch">
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
          </li>
          <li className='item-count'>11 items
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
