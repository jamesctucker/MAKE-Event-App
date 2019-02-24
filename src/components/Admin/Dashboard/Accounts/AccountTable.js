import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import TableFooter from '@material-ui/core/TableFooter';
// import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import EventsTableRow from './EventsTableRow';
// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 1200,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});


class EventsTable extends Component {

    componentDidMount() {
        const action = { type: 'FETCH_ATTENDEES' };
        console.log(action);
        this.props.dispatch(action);
    }


    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root} >
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Username</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Birthdate</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Admin</TableCell>
                                <TableCell align="right">Edit</TableCell>
                                <TableCell align="right">Activate</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.reduxStore.events.map((result, i) => (
                                <EventsTableRow key={i} result={result} />
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Paper>

        );
    }
};





const mapStoreToProps = (reduxStore) => ({ reduxStore })
export default connect(mapStoreToProps)(withStyles(styles)(AccountTable));