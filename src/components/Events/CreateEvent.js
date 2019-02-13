import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateEventForm from './../Events/CreateEventForm';

class CreateEvent extends Component {
    render() {
        return (
            <div>
                <CreateEventForm />
            </div>
        )
    }
};


export default connect()(CreateEvent);