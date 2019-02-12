import React, { Component } from 'react';
import axios from 'axios';
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


export default Dashboard;