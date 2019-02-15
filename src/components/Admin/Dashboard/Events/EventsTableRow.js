import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';



class EventsTableRow extends Component {

    // getAttendees = () => {
    //     const action = { type: 'FETCH_ATTENDEES' };
    //     this.props.dispatch(action);
    // }

    render() {
        return (
            <TableRow>
                <TableCell align="right">{this.props.result.event_name}</TableCell>
                <TableCell align="right">{this.props.result.event_start_date}</TableCell>
                <TableCell align="right">{this.props.result.event_end_date}</TableCell>
                <TableCell align="right">{this.props.result.event_city}</TableCell>
                <Button variant='contained'>Delete</Button>
            </TableRow>
        )
    }
};



const mapStoreToProps = reduxStore => ({ reduxStore, });
export default connect(mapStoreToProps)(EventsTableRow);