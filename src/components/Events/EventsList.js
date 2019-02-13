import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './EventsList.css';
// import Link from '@material-ui/core/Link';
// import Chip from '@material-ui/core/Chip';
// import Tooltip from '@material-ui/core/Tooltip';
// import { CardActionArea } from '@material-ui/core';

class EventsList extends Component {

    componentDidMount() {
        const action = { type: 'FETCH_EVENTS' }
        this.props.dispatch(action);
    }
    render() {
        return (
            <Card id="list-card">
                <CardContent>
                    <Typography>{this.props.result.event_start_date}</Typography>
                    <Typography variant="h5">{this.props.result.event_name}</Typography>
                    <Typography>{this.props.result.event_city}</Typography>
                    <Typography component="p">{this.props.result.event_description}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(EventsList);