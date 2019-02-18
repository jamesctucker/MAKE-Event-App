import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AttendeeTable from './../Dashboard/Attendees/AttendeeTable';
import AttendeeTableTest from './../Dashboard/Attendees/AttendeeTableTest';



import EventsTable from './../Dashboard/Events/EventsTable';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class DashboardTableTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Attendees" />
                        <Tab label="Volunteers" />
                        <Tab label="Applications" />
                        <Tab label="Events" />

                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><AttendeeTableTest /></TabContainer>}
                {value === 1 && <TabContainer>Volunteers</TabContainer>}
                {value === 2 && <TabContainer>Applications</TabContainer>}
                {value === 3 && <TabContainer><EventsTable /></TabContainer>}

            </div>
        );
    }
}

DashboardTableTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStoreToProps = reduxStore => ({ reduxStore })


export default connect(mapStoreToProps)(withStyles(styles)(DashboardTableTabs));