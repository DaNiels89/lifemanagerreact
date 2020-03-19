import React from 'react';

import LeftPane from './layout/LeftPane';
import RightPane from './layout/RightPane';
import Footer from './layout/Footer';

import Grid from '@material-ui/core/Grid';

// import '../../css/Exercise.css';

const Exercise = () => {
  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={6}>
            <LeftPane />
          </Grid>
          <Grid item xs={6}>
            <RightPane />
          </Grid>
        </Grid>
        <Footer />
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Exercise;
