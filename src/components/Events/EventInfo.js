import React, { Component } from 'react';
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
            </div>
        )
    }
};


export default EventInfo;