<<<<<<< HEAD
import React, { Component } from "react";
import GridSelector from './Grid-Selector';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import '../Styles/filters.scss';

class Filters extends Component {

  constructor(props) {  
    super(props);
    this.sortClickhandler = this.sortClickhandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };


  sortClickhandler = () => {
    this.props.showFilter(!this.props.filterActive);
  }

  render() {
    // var [state, setState] = React.useState({
    //   checkedA: true,
    //   checkedB: false,
    // });
    return (
      <div>
        <ul className='filter-container'>
          <li className='sort-filter'>
            <button onClick={this.sortClickhandler}>Show Filter</button>
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
                  // checked={this.state.checkedB}
                  onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
            />
          </FormGroup>
          </li>
          <li className='item-count'>{this.props.itemCount} items
            <GridSelector onGridClick={this.props.onGridClick} />
          </li>
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
=======
import React, { Component } from "react";
import GridSelector from './Grid-Selector';
import '../Styles/filters.scss';

class Filters extends Component {

  constructor(props) {  
    super(props);
    this.sortClickhandler = this.sortClickhandler.bind(this);
  }

  sortClickhandler = () => {
    this.props.showFilter(!this.props.filterActive);
  }

  render() {
    return (
      <div>
        <ul className='filter-container'>
          <li className='sort-filter'>
            <button onClick={this.sortClickhandler}>Sort &amp; Filter</button>
          </li>
          <li className='bops-filter'>
            <button>BOPS / Ready to Deliver Filter</button>
          </li>
          <li className='item-count'>{this.props.itemCount} items
            <GridSelector onGridClick={this.props.onGridClick} />
          </li>
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
>>>>>>> 4aad1850b603f4c544849af800b6ec45fe4653c2
