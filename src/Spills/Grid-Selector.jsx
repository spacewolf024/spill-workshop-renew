<<<<<<< HEAD
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
=======
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
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
>>>>>>> 4aad1850b603f4c544849af800b6ec45fe4653c2
}