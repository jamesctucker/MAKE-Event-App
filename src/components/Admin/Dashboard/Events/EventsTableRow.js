import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import swal from 'sweetalert';
import moment from 'moment';





class EventsTableRow extends Component {
    state = {
        id: this.props.result.id,
        event_name: this.props.result.event_name,
        event_start_date: this.props.result.event_start_date,
        event_end_date: this.props.result.event_end_date,
        event_time: this.props.result.event_time,
        event_city: this.props.result.event_city,
        event_country: this.props.result.event_country,
        event_host: this.props.result.event_host,
        event_description: this.props.result.event_description,
    }


    getEvents = () => {
        this.props.dispatch({ type: 'FETCH_EVENTS' });
    }

    updateEvents = () => {
        const action = ({ type: 'UPDATE_EVENT', payload: this.state });
        this.props.dispatch(action);
        this.getEvents();
    }

    handleChange = propertyName => event => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };


    deleteEvent = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover your data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your event has been deleted forever!", {
                        icon: "success",
                    });
                    const action = ({ type: 'DELETE_EVENT', payload: this.props.result.id });
                    this.props.dispatch(action);

                } else {
                    swal("Your data is safe!");
                }
            });
        this.getEvents();
    }


    render() {
        return (
            <TableRow>
                <TableCell align="center">
                    <Input
                        label="event-name"
                        placeholder={this.props.result.event_name}
                        multiline
                        onChange={this.handleChange('event_name')}
                        rowsMax="10" />
                </TableCell>
                <TableCell align="center">
                    <Input
                        label="event-start_date"
                        placeholder={this.props.result.event_start_date}
                        multiline
                        onChange={this.handleChange('event_start_date')}
                        rowsMax="10" />
                </TableCell>
                <TableCell align="center">
                    <Input
                        label="event-end-date"
                        placeholder={this.props.result.event_end_date}
                        multiline
                        onChange={this.handleChange('event_end_date')}
                        rowsMax="10" />
                </TableCell>
                <TableCell align="center">
                    <Input
                        label="event-time"
                        placeholder={this.props.result.event_time}
                        multiline
                        onChange={this.handleChange('event_time')}
                        rowsMax="10" />
                </TableCell>
                <TableCell align="center">
                    <Input
                        label="event-city"
                        placeholder={this.props.result.event_city}
                        multiline
                        onChange={this.handleChange('event_city')}
                        rowsMax="10" />
                </TableCell>
                <TableCell align="center">
                    <Input
                        label="event-country"
                        placeholder={this.props.result.event_country}
                        multiline
                        onChange={this.handleChange('event_country')}
                        rowsMax="10" />
                </TableCell>
                <TableCell align="center">
                    <Input
                        label="event-host"
                        placeholder={this.props.result.event_host}
                        multiline
                        onChange={this.handleChange('event_host')}
                        rowsMax="10" />
                </TableCell>
                <TableCell align="center">
                    <Input
                        label="event-description"
                        placeholder={this.props.result.event_description}
                        multiline
                        onChange={this.handleChange('event_description')}
                        rowsMax="10" />
                </TableCell>
                <TableCell align="center">
                    <Fab onClick={this.updateEvents} size='small'><Done></Done></Fab>
                </TableCell>
                <TableCell align="center">
                    <Fab onClick={this.deleteEvent} size='small'><DeleteIcon></DeleteIcon></Fab>
                </TableCell>
            </TableRow>
        )
    }
};



const mapStoreToProps = reduxStore => ({ reduxStore, });
export default connect(mapStoreToProps)(EventsTableRow);