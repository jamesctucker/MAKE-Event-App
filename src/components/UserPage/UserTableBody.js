import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import UserPageRows from './UserPageRows';

class UserTableBody extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_REGISTERED_EVENTS' })
    }
    render() {
        return (
            <TableBody>
                {this.props.reduxStore.eventRegistration.map((result, i) => (
                    <UserPageRows key={i} result={result} />
                ))}
            </TableBody>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(UserTableBody);