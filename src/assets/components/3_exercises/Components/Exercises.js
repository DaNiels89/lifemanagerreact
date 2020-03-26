import React, { Component } from 'react';
import { Footer } from './Layouts';
import Exercises from './Exercises/index.js';
import { muscles, exercises } from '../store.js';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;

    return (
      <>
        <Grid container>
          <Grid item xs={2}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              {
                <Exercises
                  exercise={exercise}
                  category={category}
                  exercises={exercises}
                  onSelect={this.handleExerciseSelected}
                />
              }

              <Footer
                category={category}
                muscles={muscles}
                onSelect={this.handleCategorySelected}
              />
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}
