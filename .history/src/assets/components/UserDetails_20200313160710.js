import React from 'react';
import { useForm } from 'react-hook-form';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../css/UserDetails.css';

import { makeStyles } from '@material-ui/core/styles';
import CountrySelect from './CountrySelect';
import ErrorMessage from './ErrorMessage';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
  };

export default function UserInformation() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  const classes = useStyles();

  return (
    <div className="user-information">
      <h2>User Information</h2>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="firstName"
          id="firstName"
          className={classes.input}
          label="First Name"
          variant="outlined"
          inputRef={register({ required: true, minLength: 2, maxLength: 20 })}
        />
        <ErrorMessage error={errors.firstName} />

        <TextField
          name="lastName"
          id="lastName"
          className={classes.input}
          label="Last Name"
          variant="outlined"
          inputRef={register({ required: true, minLength: 2, maxLength: 20 })}
        />
        <ErrorMessage error={errors.lastName} />

        {/* <label>Gender</label>
        <select name="gender" ref={register({ required: true })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select> */}
        {/* <ErrorMessage error={errors.gender} /> */}

        <InputLabel>Gender</InputLabel>
        <Select
          name="gender"
          inputRef={register({ required: true })}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'Gender'}
          onChange={handleChange}
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
        </Select>
        <ErrorMessage error={errors.gender} />

        <CountrySelect mt={'1em'} />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
