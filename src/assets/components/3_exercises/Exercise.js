import React, { useState } from 'react';

import LeftPane from './layout/LeftPane';
import RightPane from './layout/RightPane';
import Footer from './layout/Footer';

import { muscles, exercises } from './store.js';

import Grid from '@material-ui/core/Grid';

// import '../../css/Exercise.css';

const Exercise = () => {
  const [exercise, setExercise] = useState('');

  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={6}>
            <LeftPane />
          </Grid>
          <Grid item xs={6}>
            <RightPane />
          </Grid>
        </Grid>
        <Footer muscles={muscles} />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Exercise;
