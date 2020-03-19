import React from 'react';

import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500
  }
});

export default function App() {
  return (
    <div className="App">
      <h1>Life Manager</h1>
    </div>
  );
}
