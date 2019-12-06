import React, { Component } from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class BopsFilter extends Component {
    constructor(props) {  
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange() {
    }
  
    render() {
      return (
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
      )
    }
  }
  
  export default BopsFilter;
