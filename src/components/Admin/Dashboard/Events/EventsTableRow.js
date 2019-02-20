import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import moment from 'moment';





class EventsTableRow extends Component {

    getEvents = () => {
        this.props.dispatch({ type: 'FETCH_EVENTS' });
    }

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
                <TableCell align="right">{this.props.result.event_name}</TableCell>
                <TableCell align="right">{moment(this.props.result.event_start_date).format("MMMM Do, YYYY")}</TableCell>
                <TableCell align="right">{this.props.result.event_end_date}</TableCell>
                <TableCell align="right">{this.props.result.event_time}</TableCell>
                <TableCell align="right">{this.props.result.event_city}</TableCell>
                <TableCell align="right">
                    <Button onClick={this.deleteEvent} variant='contained'>Delete</Button>
                </TableCell>
            </TableRow>
        )
    }
};



const mapStoreToProps = reduxStore => ({ reduxStore, });
export default connect(mapStoreToProps)(EventsTableRow);