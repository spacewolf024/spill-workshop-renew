import React, { Component } from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import SimpleModal from '../Utils/Modal';
import '../Styles/filters.scss';


class FilterHeader extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      filterActiveClass: this.props.filterActive ? 'filter-shown' : 'filter-hidden',
      filterBtnText: this.props.isMobile ? 'Sort & Filter' : 'Show Filter',
      itemCount: this.props.itemCount.filter((item, index) => (item.type === 'product')),
      twoColBtnClass: document.getElementsByClassName('alt-columns').length === 0 ? 'active-btn' : 'inactive-btn',
      singleColBtnClass: document.getElementsByClassName('alt-columns').length === 0 ? 'inactive-btn' : 'active-btn'
    });

    this.filterBtnClick = this.filterBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onGridClick = this.onGridClick.bind(this);
  }

  handleChange = name => event => {
    console.log(name, event)
    this.setState({ ...this.state, [name]: event.target.checked });
  }

  onGridClick(event) {
    if (event.target.classList.value.indexOf('inactive-btn') > -1 && event.target.classList.value.indexOf('two-col') > -1) {
      this.props.onGridClick();

      this.setState ({
        twoColBtnClass: 'active-btn',
        singleColBtnClass: 'inactive-btn'
      });

    } else if (event.target.classList.value.indexOf('inactive-btn') > -1 && event.target.classList.value.indexOf('single-col') > -1) {
      this.props.onGridClick();

      this.setState ({
        twoColBtnClass: 'inactive-btn',
        singleColBtnClass: 'active-btn'
      });
      
    }
  }

  filterBtnClick() {
    var btnText = '';
    if (this.props.isMobile) {

    } else {
      if (!this.props.filterActive) {

        this.props.showFilter(!this.props.filterActive);
        btnText = this.props.isMobile ? 'Sort & Filter' : 'Hide Filter'
        this.setState({
          filterActiveClass: ' filter-shown',
          filterBtnText: btnText
        });
  
      } else if (this.props.filterActive) {
  
        this.props.showFilter(!this.props.filterActive);
        btnText = this.props.isMobile ? 'Sort & Filter' : 'Show Filter'
        this.setState({
          filterActiveClass: 'filter-hidden',
          filterBtnText: btnText
        });
      }
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
          <li className='col-switch'>
            <button className={'two-col ' + this.state.twoColBtnClass } onClick={this.onGridClick}></button>
            <button className={'single-col ' + this.state.singleColBtnClass} onClick={this.onGridClick}></button>
          </li> 
        </ul>
      </section>
    )
  }
}

export default FilterHeader;
