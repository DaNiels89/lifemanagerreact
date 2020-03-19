import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import '../../assets/css/Food.css';

const useStyles = makeStyles({
  main: {
    width: '100%'
  }
});

const Food = () => {
  const classes = useStyles();

  const APP_ID = '8debb3e4';
  const APP_KEY = 'c9c2a9ac54a69f6c10f4abd97dcf8e4a';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been run');
  });

  return (
    <Grid container>
      <Grid item xs={3}>
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <div className="Food">
            <form className="search-form">
              <input className="search-bar" type="text" />
              <button className="search-button" type="submit">
                Search
              </button>
            </form>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}></Paper>
      </Grid>
    </Grid>
  );
};

export default Food;
