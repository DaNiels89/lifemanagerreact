import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import '../../css/Food.css';

const useStyles = makeStyles({
  main: {
    width: '100%'
  }
});

const Food = () => {
  const classes = useStyles();

  const APP_ID = '8debb3e4';
  const APP_KEY = 'c9c2a9ac54a69f6c10f4abd97dcf8e4a';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <Grid container>
      <Grid item xs={2}>
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <div className="Food">
            <form onSubmit={getSearch} className="search-form">
              <input
                className="search-bar"
                type="text"
                value={search}
                onChange={updateSearch}
              />
              <button className="search-button" type="submit">
                Search
              </button>
            </form>
            <div className="recipes">
              {recipes.map(recipe => (
                <Recipe
                  key={Math.floor(Math.random() * 100000000)}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                />
              ))}
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}></Paper>
      </Grid>
    </Grid>
  );
};

export default Food;
