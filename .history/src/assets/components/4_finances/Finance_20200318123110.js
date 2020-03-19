import React from 'react';

// import '../../assets/css/Finance.css';

const Finance = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Paper className={classes.paper}>Side bar</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <div className="Finance">
            <h1>Hello Finance</h1>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>Side bar</Paper>
      </Grid>
    </Grid>
  );
};

export default Finance;
