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
        name: 'Event Name',
        start_date: 'Start Date (YYYY/MM/DD)',
        end_date: 'End Date (YYYY/MM/DD)',
        city: 'Event City',
        country: 'Event Country',
        host: 'Event Host',
        description: 'Description',
    };

    handleChange = propertyName => (event) => {
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
            name: 'Event Name',
            start_date: 'Start Date (YYYY/MM/DD)',
            end_date: 'End Date (YYYY/MM/DD)',
            city: 'Event City',
            country: 'Event Country',
            host: 'Event Host',
            description: 'Description',
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper id='text-paper' elevation={3}>
                <Typography id='form-title' variant='h6'>
                    Create An Event
                    </Typography>
                <form id='input-form' className={classes.container} noValidate autoComplete="off">

                    <TextField
                        required
                        id="outlined-name"
                        label="Required"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-start_date"
                        label="Required"
                        className={classes.textField}
                        value={this.state.start_date}
                        onChange={this.handleChange('start_date')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-end-date"
                        label="Required"
                        className={classes.textField}
                        value={this.state.end_date}
                        onChange={this.handleChange('end_date')}
                        variant='outlined'
                        margin="normal"
                    />
                    <TextField
                        required
                        id="outlined-city"
                        label="Required"
                        className={classes.textField}
                        value={this.state.city}
                        onChange={this.handleChange('city')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-country"
                        label="Required"
                        className={classes.textField}
                        value={this.state.country}
                        onChange={this.handleChange('country')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-host"
                        label="Required"
                        className={classes.textField}
                        value={this.state.host}
                        onChange={this.handleChange('host')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-description"
                        label="Required"
                        className={classes.descriptionField}
                        value={this.state.description}
                        onChange={this.handleChange('description')}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button className={classes.button} id='submit-btn'
                        onClick={this.handleAddProject} variant='contained'>Submit</Button>

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