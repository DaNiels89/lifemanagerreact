import React from 'react';
import { useForm } from 'react-hook-form';

import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import '../css/UserDetails.css';

import { makeStyles } from '@material-ui/core/styles';
import CountrySelect from './CountrySelect';
import ErrorMessage from './ErrorMessage';

const useStyles = makeStyles({
  input: {
    marginBottom: 10
  },
  select: {
    marginBottom: 10
  }
});

export default function UserInformation() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => createProfile(data);

  function createProfile(data) {
    fetch('http://localhost:3001/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ profile: data })
    });
  }

  function editProfile(data) {
    const id = 1;
    fetch('http://localhost:3001/profiles/`${id}`/edit', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ profile: data })
    });
  }

  const classes = useStyles();

  return (
    <div className="user-information">
      <h2>User Information</h2>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="firstname"
          id="firstname"
          className={classes.input}
          label="First Name"
          variant="outlined"
          inputRef={register({ required: true, minLength: 2, maxLength: 20 })}
        />
        <ErrorMessage error={errors.firstname} />

        <TextField
          name="lastname"
          id="lastname"
          className={classes.input}
          label="Last Name"
          variant="outlined"
          inputRef={register({ required: true, minLength: 2, maxLength: 20 })}
        />
        <ErrorMessage error={errors.lastname} />

        <label>Gender</label>
        <select name="gender" ref={register({ required: true })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <ErrorMessage error={errors.gender} />

        {/* <InputLabel>Gender</InputLabel>
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
        </Select> */}
        {/* <ErrorMessage error={errors.gender} /> */}

        <TextField
          id="date"
          label="Date of Birth"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          name="dob"
          inputRef={register()}
        />

        <CountrySelect mt={'1em'} register={() => register()} />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
