import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateEventForm from './../Events/CreateEventForm';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class CreateEvent extends Component {
    changePage = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <Typography id='form-title' variant='h6'>
                    Create An Event
                </Typography>
                <Button onClick={this.changePage} variant="contained">Cancel</Button>
                <CreateEventForm />
            </div>
        )
    }
};


export default connect()(CreateEvent);