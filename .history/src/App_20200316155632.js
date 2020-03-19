import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './assets/components/layout/Header';
import UserDetails from './assets/components/UserDetails';

import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Life Manager</Link>
            </li>
            <li>
              <Link to="/food">Food</Link>
            </li>
            <li>
              <Link to="/exercises">Exercises</Link>
            </li>
            <li>
              <Link to="/finances">Finances</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
            <UserDetails />
          </Route>
          <Route path="/finances">
            {/* <Finances /> */}
          </Route>
          <Route path="/exercises">
            {/* <Exercises /> */}
          </Route>
          <Route path="/food">
            {/* <Food /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

    // function Home() {
    // return <h2>Home</h2>;
    // }

    function Food() {
      return <h2>Food</h2>;
    }

    function Exercises() {
      return <h2>Exercises</h2>;
    }

    function Finances() {
      return <h2>Finances</h2>;
    }

    function Profile() {
      return <h2>About</h2>;
    }

    <React.Fragment>
      <CssBaseline />
      <div className={classes.main}>
        <Header />
        <Grid container>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Side bar</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <UserDetails />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Side bar</Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
