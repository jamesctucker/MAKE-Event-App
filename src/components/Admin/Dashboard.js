import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardTableTabs from '../Admin/DashboardTableTabs';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { throws } from 'assert';


class Dashboard extends Component {

    changePage = () => {
        this.props.history.push(`/create-event`);
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <DashboardTableTabs />
                <Button onClick={this.changePage} variant="contained">Create New Event</Button>
            </div>

        )
    }
};



const mapStoreToProps = reduxStore => ({ reduxStore, })

export default connect(mapStoreToProps)(Dashboard);