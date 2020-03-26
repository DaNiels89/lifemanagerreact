import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import '../../css/UserDetails.css';

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

export default function UserInformation(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => createProfile(data);

  const classes = useStyles();

  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [gender, setGender] = useState('');
  // const [dob, setDob] = useState('');
  // const [country, setCountry] = useState('');

  const [profile, setProfile] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    dob: '',
    country: ''
  });

  useEffect(() => {
    editProfile(props.user.id);
  }, []);

  function createProfile(data) {
    // axios instead of fetch
    fetch('http://localhost:3001/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ profile: data })
    })
      .then(promiseResponse => promiseResponse.json())
      .then(data => setProfile(data));
  }

  function editProfile(id) {
    // axios instead of fetch
    fetch(`http://localhost:3001/profiles/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({ user_id: id })
    })
      .then(response => response.json())
      .then(json => {
        setProfile(json);
      });
  }

  function handleChange(event) {
    let profileCopy = { ...profile };
    profileCopy[event.target.id] = event.target.value;
    setProfile(profileCopy);
  }

  return (
    <Grid container>
      <Grid item xs={2}>
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <div className="user-information">
            <h2>User Information</h2>
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                name="firstname"
                id="firstname"
                defaultValue={profile.id}
                className={classes.input}
                InputProps={{
                  value: profile.firstname,
                  onChange: handleChange // fat arrow function event => setUsername(event.target.value)
                }}
                label="First Name"
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 2,
                  maxLength: 20
                })}
              />
              <ErrorMessage error={errors.firstname} />

              <TextField
                name="lastname"
                id="lastname"
                className={classes.input}
                InputProps={{
                  value: profile.lastname,
                  onChange: handleChange
                }}
                label="Last Name"
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 2,
                  maxLength: 20
                })}
              />
              <ErrorMessage error={errors.lastname} />

              <label>Gender</label>
              <select
                id="gender"
                name="gender"
                ref={register({ required: true })}
              >
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
                name="dob"
                id="date"
                className={classes.textField}
                label="Date of Birth"
                type="date"
                defaultValue="1989-06-25"
                InputLabelProps={{
                  shrink: true
                }}
                inputRef={register()}
                InputProps={{
                  onChange: handleChange
                }}
              />

              <CountrySelect register={() => register()} />

              <input
                type="submit"
                value="Edit"
                onClick={() => editProfile(1)} // Change the hardcoded 1 later
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}></Paper>
      </Grid>
    </Grid>
  );
}
