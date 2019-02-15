import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



import axios from 'axios';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class EventInfo extends Component {
    render() {
        return (
            <div>
                <h1>Event Info</h1>
                <Paper>
                    <Card>
                        <Typography variant="h3">Woodstock</Typography>
                    </Card>
                </Paper>
                <button>Register</button>
                <button>Add to Calendar</button>
            </div>
        )
    }
};


export default connect()(EventInfo);