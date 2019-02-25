import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateEventForm from './../Events/CreateEventForm';
import Button from '@material-ui/core/Button';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import Typography from '@material-ui/core/Typography';

import './Events.css';



class CreateEvent extends Component {
    changePage = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <Button id="return-btn" color="primary" onClick={this.changePage} variant="contained"><ArrowLeft />Return to Dashboard</Button>
                <CreateEventForm />
            </div>
        )
    }
};


export default connect()(CreateEvent);