import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardTableTabs from './../Dashboard/DashboardTableTabs';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


import './Dashboard.css';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: 'Select Event',
            labelWidth: 0,
        }
    }

    componentDidMount() {
        const action = { type: 'FETCH_EVENTS' };
        this.props.dispatch(action);
    }

    changePage = () => {
        this.props.history.push(`/create-event`);
    }

    handleChangeSelect = (event) => {
        this.setState({
            events: event.target.value
        });
    }

    // handleChange = event => {
    //     this.setState({})
    // }

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




const mapStoreToProps = reduxStore => ({ reduxStore, });

export default connect(mapStoreToProps)(Dashboard);