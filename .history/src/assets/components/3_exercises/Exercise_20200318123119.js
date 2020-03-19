import React from 'react';

// import '../../assets/css/Exercise.css';

const Exercise = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Paper className={classes.paper}>Side bar</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <div className="Exercise">
            <h1>Hello Exercise</h1>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>Side bar</Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise;
