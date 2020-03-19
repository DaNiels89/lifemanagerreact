import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  main: {
    width: '100%'
  }
});

// import '../../assets/css/Exercise.css';

const Exercise = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={3}>
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <div className="Exercise">
            <h1>Hello Exercise</h1>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}></Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise;
