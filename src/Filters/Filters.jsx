import React, { Component } from "react";
import GridSelector from './Grid-Selector';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import '../Styles/filters.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Filters extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      filterActiveClass: this.props.filterActive ? 'filter-shown' : 'filter-hidden',
      filterBtnText: this.props.isMobile ? 'Sort & Filter' : 'Show Filter',
      itemCount: this.props.itemCount.filter((item, index) => (item.type === 'product'))
    });

    this.filterBtnClick = this.filterBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  }

  filterBtnClick() {
    var btnText = '';
    if(this.props)
    if (!this.props.filterActive && !this.props.isMobile) {

      this.props.showFilter(!this.props.filterActive);
      btnText = this.props.isMobile ? 'Sort & Filter' : 'Hide Filter'
      this.setState({
        filterActiveClass: ' filter-shown',
        filterBtnText: btnText
      });

    } else if (this.props.filterActive && !this.props.isMobile) {

      this.props.showFilter(!this.props.filterActive);
      btnText = this.props.isMobile ? 'Sort & Filter' : 'Show Filter'
      this.setState({
        filterActiveClass: 'filter-hidden',
        filterBtnText: btnText
      });

    }
  }

  render() {
    return (
      <section className="sticky-filter-container">
        <div className="bops-switch">
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    onChange={this.handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
              />
            </FormGroup>
            <span className="location-icon"><LocationOnIcon /></span>
            <span className="pickup-store-txt">Free Pickup in Store</span>
            <span className="store-name">Deer Park Town Center</span>
            
          </div>
        <ul className='filter-container'>
          <li className={'sort-filter ' + this.state.filterActiveClass}>
            <button onClick={this.filterBtnClick}>{this.state.filterBtnText}</button>
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
