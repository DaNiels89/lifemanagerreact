import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import '../../css/HomePage.css';

const useStyles = makeStyles({
  main: {
    width: '100%'
  }
});

export default function Main() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={2}>
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <h1>Life Manager</h1>
          <h2>Welcome on our home page</h2>
          <p>
            Get your life in order! We will help you with the following topics:
          </p>
          <ul>
            <li>Food</li>
            <li>Exercise</li>
            <li>Finances</li>
          </ul>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}></Paper>
      </Grid>
    </Grid>
  );
}
