import React from 'react';
import Header from './components/layout/Header';

import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles({
  main: {
    width: '100%'
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.main}>
        <Header />
        <Grid container spacing={12}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Side bar</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Main content</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Side bar</Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
