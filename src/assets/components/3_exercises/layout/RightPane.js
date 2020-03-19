import React from 'react';

import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default function LeftPane() {
  const classes = useStyles;
  return (
    <Paper style={styles.Paper} className={classes.paper}>
      <div className="right-pane">
        <h1>Hello Right Pane</h1>
      </div>
    </Paper>
  );
}
