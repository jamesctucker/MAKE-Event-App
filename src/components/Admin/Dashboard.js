import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardTableTabs from '../Admin/DashboardTableTabs';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <DashboardTableTabs />
            </div>
        )
    }
};



const mapStoreToProps = reduxStore => ({ reduxStore, })

export default connect(mapStoreToProps)(Dashboard);