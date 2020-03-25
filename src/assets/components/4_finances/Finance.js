import React from 'react';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import '../../css/Finance.css';

const useStyles = makeStyles({
  main: {
    width: '100%'
  }
});

const Finance = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={3}>
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <GlobalProvider>
            <Header />
            <div className="container">
              <Balance />
              <IncomeExpenses />
              <TransactionList />
              <AddTransaction />
            </div>
          </GlobalProvider>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}></Paper>
      </Grid>
    </Grid>
  );
};

export default Finance;
