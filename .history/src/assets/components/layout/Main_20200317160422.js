import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  main: {
    width: '100%'
  }
});

export default function Main() {
  return (

    const classes = useStyles();
    <Grid container>
      <Grid item xs={3}>
        <Paper className={classes.paper}>Side bar</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h1>Home page</h1>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>Side bar</Paper>
      </Grid>
    </Grid>
  );
}
