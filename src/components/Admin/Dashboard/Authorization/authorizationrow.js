import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import Done from '@material-ui/icons/Done';
import swal from 'sweetalert';

const admin = [
    { label: 'yes', value: 2 },
    { label: 'no', value: 1 },
];



class AuthorizationRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.result.id,
            name: this.props.result.name,
            auth_id: '',
        }
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_ADMIN' });
    }

    updateAdmin = () => {
        const action = ({ type: 'UPDATE_ADMIN', payload: this.state });
        this.props.dispatch(action);
    }

    handleChange = propertyName => event => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };



    render() {
        return (
            <TableRow>
                <TableCell align="center">
                    {this.state.name}
                </TableCell>
                <TableCell align="center">
                    <Select
                        label="attendee-auth-id"
                        value={this.state.auth_id}
                        onChange={this.handleChange('auth_id')}
                        displayEmpty
                        name="auth"
                    >
                        {admin.map(result => (
                            <MenuItem key={result.value} value={result.value}>
                                {result.label}
                            </MenuItem>
                        ))}
                    </Select>
                </TableCell>
                <TableCell align="center">
                    <Fab onClick={this.updateAdmin} size='small'><Done></Done></Fab>
                </TableCell>
            </TableRow>
        )
    }
};



const mapStoreToProps = reduxStore => ({ reduxStore, });
export default connect(mapStoreToProps)(AuthorizationRow);