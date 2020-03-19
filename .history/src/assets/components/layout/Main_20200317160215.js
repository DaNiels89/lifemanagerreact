import React from 'react'

export default function Main() {
    return(
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
</Grid>;
    )
}