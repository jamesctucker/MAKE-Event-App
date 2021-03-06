import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import NewsList from './NewsList';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class News extends Component {

    componentDidMount() {
        const action = { type: 'FETCH_NEWS' };
        this.props.dispatch(action);
    }

    render() {
        return (
            <Paper id="news-paper" elevation={3}
            >
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    {/* {this.props.reduxStore.events.map((result, i) => (

            <EventsList history={this.props.history} key={i} result={result} />
          ))} */}
                </Grid>
            </Paper>

        )
    }
};


const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(News);
