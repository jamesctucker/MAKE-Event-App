import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import swal from 'sweetalert';
import Tooltip from '@material-ui/core/Tooltip';




const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    descriptionField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },

});

class CreateEventForm extends Component {
    state = {
        event_name: 'Event Name',
        event_start_date: 'Start Date (YYYY/MM/DD)',
        event_end_date: 'End Date (YYYY/MM/DD)',
        event_time: 'Event Time (HH:MM - HH:MM)',
        event_city: 'Event City',
        event_country: 'Event Country',
        event_host: 'Event Host',
        event_description: 'Description',
    };

    handleChange = propertyName => event => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };



    handleCreateEvent = event => {
        event.preventDefault();
        const action = ({ type: 'CREATE_EVENT', payload: this.state });
        this.props.dispatch(action);
        swal('Awesome!', 'You have successfully added an event!', 'success');
        this.setState({
            event_name: 'Event Name',
            event_start_date: 'Start Date (YYYY/MM/DD)',
            event_end_date: 'End Date (YYYY/MM/DD)',
            event_time: 'Event Time (HH:MM - HH:MM)',
            event_city: 'Event City',
            event_country: 'Event Country',
            event_host: 'Event Host',
            event_description: 'Description',
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper id='text-paper' elevation={3}>
                <form id='input-form' className={classes.container} noValidate autoComplete="off">

                    <TextField
                        required
                        id="outlined-name"
                        label="Required"
                        className={classes.textField}
                        value={this.state.event_name}
                        onChange={this.handleChange('event_name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-start_date"
                        label="Required"
                        className={classes.textField}
                        value={this.state.event_start_date}
                        onChange={this.handleChange('event_start_date')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-end-date"
                        label="Required"
                        className={classes.textField}
                        value={this.state.event_end_date}
                        onChange={this.handleChange('event_end_date')}
                        variant='outlined'
                        margin="normal"
                    />
                    <TextField
                        required
                        id="outlined-time"
                        label="Required"
                        className={classes.textField}
                        value={this.state.event_time}
                        onChange={this.handleChange('event_time')}
                        variant='outlined'
                        margin="normal"
                    />
                    <TextField
                        required
                        id="outlined-city"
                        label="Required"
                        className={classes.textField}
                        value={this.state.event_city}
                        onChange={this.handleChange('event_city')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-country"
                        label="Required"
                        className={classes.textField}
                        value={this.state.event_country}
                        onChange={this.handleChange('event_country')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-host"
                        label="Required"
                        className={classes.textField}
                        value={this.state.event_host}
                        onChange={this.handleChange('event_host')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-description"
                        label="Required"
                        className={classes.descriptionField}
                        value={this.state.event_description}
                        onChange={this.handleChange('event_description')}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button className={classes.button} id='submit-btn'
                        onClick={this.handleCreateEvent} variant='contained'>Submit</Button>

                </form>
            </Paper>
        );
    }
}

CreateEventForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(withStyles(styles)(CreateEventForm));