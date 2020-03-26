import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link as RouterLink
} from 'react-router-dom';
import axios from 'axios';

import HomePage from '../1_lifemanager/HomePage';
import Food from '../2_food/Food';
import Exercises from '../3_exercises/Components/Exercises';
import Finance from '../4_finances/Finance';
import UserDetails from '../5_profile/UserDetails';
import Login from '../../components/registrations/Login';
import Signup from '../../components/registrations/Signup';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { muscles, exercises } from '../3_exercises/store.js';

import '../../css/Header.css';

const useStyles = makeStyles(theme => ({
  header: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header(props) {
  const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => loginStatus(), []);

  const handleLogin = data => {
    setIsLoggedIn(true);
    setUser(data.user);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  const handleClick = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then(response => {
        handleLogout();
      })
      .catch(error => console.log(error));
  };

  const loginStatus = () => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          handleLogin(response);
        } else {
          handleLogout();
        }
      })
      .catch(error => console.log('api errors:', error));
  };

  return (
    <Router>
      <div className={classes.header}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link href="/" color="inherit">
                Life Manager
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link href="/food" color="inherit">
                Food
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link href="/exercises" color="inherit">
                Exercises
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link href="/finances" color="inherit">
                Finances
              </Link>
            </Typography>

            {isLoggedIn ? (
              <Button href="/profile" color="inherit">
                Profile
              </Button>
            ) : (
              <Button href="/signup" color="inherit">
                Sign up
              </Button>
            )}

            {isLoggedIn ? (
              <Button href="/logout" color="inherit" onClick={handleClick}>
                Log Out
              </Button>
            ) : (
              <Button href="/login" color="inherit">
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/exercises">
            <Exercises
              exercise={{}}
              category={null}
              exercises={exercises}
              // onSelect={this.handleExerciseSelected}
            />
          </Route>
          <Route path="/finances">
            <Finance />
          </Route>
          <Route path="/profile">
            <UserDetails user={user} />
          </Route>
          <Route exact path="/login">
            <Login
              {...props}
              handleLogin={handleLogin}
              loggedInStatus={isLoggedIn}
            />
          </Route>
          <Route exact path="/signup">
            <Signup
              {...props}
              handleLogin={handleLogin}
              loggedInStatus={isLoggedIn}
            />
          </Route>
          <Route path="/">
            <HomePage
              {...props}
              handleLogout={handleLogout}
              loggedInStatus={isLoggedIn}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
