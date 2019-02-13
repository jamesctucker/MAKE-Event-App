import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventsList from './../Events/EventsList';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Events extends Component {

  componentDidMount() {
    const action = { type: 'FETCH_EVENTS' };
    this.props.dispatch(action);
  }

  render() {
    return (
      <Paper elevation={3}>
        <Grid container spacing={32}>
          {this.props.reduxStore.events.map((result, i) => (
            <EventsList key={i} result={result} />
          ))}
        </Grid>
      </Paper>

    )
  }
};


const mapStoreToProps = reduxStore => ({
  reduxStore,
});

export default connect(mapStoreToProps)(Events);