import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventsList from './../Events/EventsList';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Events.css';
import { Typography } from '@material-ui/core';

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
      <div>
        <center>
          <Paper id="events-paper" elevation={4}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {this.props.reduxStore.events.map((result, i) => (

                <EventsList history={this.props.history} key={i} result={result} />
              ))}
            </Grid>
          </Paper>
        </center>
      </div>

    )
  }
};


const mapStoreToProps = reduxStore => ({
  reduxStore,
});

export default connect(mapStoreToProps)(Events);