import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class AttendeeTableRow extends Component {

    // getAttendees = () => {
    //     const action = { type: 'FETCH_ATTENDEES' };
    //     this.props.dispatch(action);
    // }

    render() {
        return (
            <TableRow>
                <TableCell align="right">{this.props.result.name}</TableCell>
                <TableCell align="right">{this.props.result.dob}</TableCell>
                <TableCell align="right">{this.props.result.email}</TableCell>
                <TableCell align="right">{this.props.result.phone}</TableCell>
                <TableCell align="right">{this.props.result.hometown}</TableCell>
                <TableCell align="right">{this.props.result.country_id}</TableCell>
                <TableCell align="right">{this.props.result.gender_id}</TableCell>
                <TableCell align="right">{this.props.result.facebook_username}</TableCell>
                <TableCell align="right">{this.props.result.employer}</TableCell>
                <TableCell align="right">{this.props.result.job_title}</TableCell>
                <TableCell align="right">{this.props.result.food_preferences}</TableCell>
                <TableCell align="right">{this.props.result.preferred_transportation}</TableCell>
                <TableCell align="right">{this.props.result.comments}</TableCell>
            </TableRow>
        )
    }
};



const mapStoreToProps = reduxStore => ({ reduxStore, });
export default connect(mapStoreToProps)(AttendeeTableRow);