import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function GridSelector(props) {
  const [value, setValue] = React.useState('3');

  const handleChange = event => {
    setValue(event.target.value);
    props.onGridClick(event.target.value);
  };

  return (
    <div className="grid-select-container">
      <FormControl component="fieldset">
        <FormLabel component="legend">Number of Columns</FormLabel>
        <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
          <FormControlLabel
            value="1"
            control={<Radio color="primary" />}
            label="1"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="2"
            control={<Radio color="primary" />}
            label="2"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="3"
            control={<Radio color="primary" />}
            label="3"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="4"
            control={<Radio color="primary" />}
            label="4"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="5"
            control={<Radio color="primary" />}
            label="5"
            labelPlacement="bottom"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}