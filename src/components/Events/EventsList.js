import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EventDialog from './EventDialog';
import Divider from '@material-ui/core/Divider';

import moment from 'moment';


import './EventsList.css';

// import Link from '@material-ui/core/Link';
// import Chip from '@material-ui/core/Chip';
// import Tooltip from '@material-ui/core/Tooltip';
// import { CardActionArea } from '@material-ui/core';

const styles = theme => ({
    card: {
        width: 400,
        height: 250,
        margin: 20,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    actions: {
        display: 'flex',
        align: 'center'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

class EventsList extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };


    componentDidMount() {
        const action = { type: 'FETCH_EVENTS' }
        this.props.dispatch(action);
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid item lg={24}>
                <Card id="list-card" className={classes.card}>
                    <CardHeader id="card-header"
                        title={this.props.result.event_name}
                        subheader={this.props.result.event_city}

                    />
                    <Divider />
                    <CardContent
                        id="description-body"
                    >

                        <CardActions className={classes.actions} disableActionSpacing>
                            <EventDialog
                                person_name={this.props.reduxStore.attendees.name}
                                event_id={this.props.result.id}
                                event_host={this.props.result.event_host}
                                event_country={this.props.result.event_country}
                                event_city={this.props.result.event_city}
                                event_name={this.props.result.event_name}
                                event_time={this.props.result.event_time}
                                event_description={this.props.result.event_description}


                            />
                            {/* <Button value={this.props.result.id} id="register-btn" size="small" variant="contained">Register</Button> */}
                        </CardActions>
                    </CardContent>


                </Card>
            </Grid>
        );
    }
}

EventsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(withStyles(styles)(EventsList));