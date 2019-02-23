import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import swal from 'sweetalert';
import Divider from '@material-ui/core/Divider';
import moment from 'moment'
import './UserPage.css';

class UserPageRows extends Component {
    componentDidMount() {
        this.getRegisteredEvents();
    }
    getRegisteredEvents() {
        this.props.dispatch({ type: 'FETCH_REGISTERED_EVENTS' });
    }

    unRegister = () => {
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
                    const action = ({ type: 'UNREGISTER_FROM_EVENT', payload: this.props.reduxStore.eventRegistration.id });
                    this.props.dispatch(action);

                } else {
                    swal("Your data is safe!");
                }
            });
        this.getRegisteredEvents();
    }
    render() {
        return (

            <TableRow>
                <TableCell align="right">{this.props.result.event_name}</TableCell>
                <TableCell align="right">{this.props.result.event_start_date} - {this.props.reduxStore.eventRegistration.event_end_date}</TableCell>
                <TableCell align="right">{this.props.result.event_city}</TableCell>
                <TableCell align="right">{this.props.result.country_name}</TableCell>
                <TableCell align="right">
                    <Button onClick={this.unRegister} variant='contained'>Unregister</Button>
                </TableCell>
            </TableRow>
        )
    }
}



const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(UserPageRows);