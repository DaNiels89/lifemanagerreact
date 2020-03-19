import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from 'react-router-dom';

import Main from './Main';
import UserDetails from '../UserDetails';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

export default function Header() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

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
              <Link href="/" color="inherit">
                Food
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link href="/" color="inherit">
                Exercises
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link href="/" color="inherit">
                Finances
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link href="/profile" color="inherit">
                Profile
              </Link>
            </Typography>
            <Button color="inherit">Sign up</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/profile">
            <UserDetails />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
