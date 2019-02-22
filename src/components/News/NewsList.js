import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EventDialog from './EventDialog';
import moment from 'moment';


// import Link from '@material-ui/core/Link';
// import Chip from '@material-ui/core/Chip';
// import Tooltip from '@material-ui/core/Tooltip';
// import { CardActionArea } from '@material-ui/core';

const styles = theme => ({
    card: {
        minWidth: 300,
        margin: 10,
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
    avatar: {
        backgroundColor: red[500],
    },
});

class NewsList extends Component {

    componentDidMount() {
        const action = { type: 'FETCH_NEWS' }
        this.props.dispatch(action);
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid item lg>
                <Card id="list-card" className={classes.card}>
                    <CardHeader
                        title={this.props.result.event_name}
                        subheader={this.props.result.event_country}

                    />

                    <CardContent>
                        <Typography component="p"></Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Learn more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
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

export default connect(mapStoreToProps)(withStyles(styles)(NewsList));