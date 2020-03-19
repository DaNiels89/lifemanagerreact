import React from 'react';
import Header from './assets/components/0_layout/Header';
// import UserDetails from './assets/components/UserDetails';

import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import { makeStyles } from '@material-ui/core/styles';
import './assets/css/App.css';

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
      </div>
    </React.Fragment>
  );
}
