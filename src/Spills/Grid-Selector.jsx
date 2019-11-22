import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    props.onGridClick();
  };

  return (
    <FormGroup row>
      <FormControlLabel
        label="Cols"
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
        }
      />
    </FormGroup>
  );
}