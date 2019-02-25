import React, { Component } from 'react';
import { connect } from 'react-redux';
import AttendeeTable from './../Dashboard/Attendees/AttendeeTable';
import EventsTable from './../Dashboard/Events/EventsTable';
import AuthorizationTable from './../Dashboard/Authorization/authorizationtable';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './Dashboard.css';

// this container contains multiple tables
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

class DashboardTableTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <div id="container">
                <AppBar id="appbar" position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab id="tab" label="Attendees" />
                        <Tab id="tab" label="Volunteers" />
                        <Tab id="tab" label="Applications" />
                        <Tab id="tab" label="Edit Events" />
                        <Tab id="tab" label="Edit Admins" />


                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><AttendeeTable /></TabContainer>}
                {value === 1 && <TabContainer>Volunteers</TabContainer>}
                {value === 2 && <TabContainer>Applications</TabContainer>}
                {value === 3 && <TabContainer><EventsTable /></TabContainer>}
                {value === 4 && <TabContainer><AuthorizationTable /></TabContainer>}


            </div>
        );
    }
}

DashboardTableTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStoreToProps = reduxStore => ({ reduxStore })


export default connect(mapStoreToProps)(DashboardTableTabs);