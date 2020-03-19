import React from 'react';

import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles({
  main: {
    width: '100%',
    maxWidth: 500
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Typography variant="h2">Life Manager</Typography>
    </div>
  );
}
