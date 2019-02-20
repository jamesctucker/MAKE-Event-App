import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import swal from 'sweetalert';


class EventDialog extends Component {
    state = {
        open: false,
        person_id: null,
        event_id: null,
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
            person_id: this.props.reduxStore.user.id,
            event_id: this.props.event_id,
        });
    };

    handleCancel = () => {
        this.setState({
            open: false,
        });
    };


    handleClose = () => {
        if (this.props.reduxStore.user.id) {
            const action = ({ type: 'REGISTER_FOR_EVENT', payload: this.state });
            this.props.dispatch(action);
            this.setState({
                open: false,
                person_id: null,
                event_id: null,
            });
        } else {
            swal({
                title: "Please Sign In",
                text: "An account is required to register for an event",
                icon: "info",
                buttons: {
                    confirm: "Create Account"
                }
            })
                .then(function () {
                    window.location.href = ('/account');
                })
        }
    };

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_EVENTS' });
        this.props.dispatch({ type: 'FETCH_USERS' });
    }

    render() {
        return (
            <div>
                {/* {JSON.stringify(this.props.event_id)} */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    More Info
              </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Additional Info</DialogTitle>
                    <DialogContent>
                        {/* {JSON.stringify(this.props.event_id)} */}
                        <Typography variant="body1">
                            Cost: free
                        </Typography>
                        <Typography variant="body1">
                            Country: {this.props.event_country}
                        </Typography>
                        <Typography variant="body1">
                            Venue: {this.props.event_host}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.handleCancel}
                            color="primary"
                        >
                            Cancel
                         </Button>
                        <Button
                            onClick={this.handleClose}
                            color="primary">
                            Register
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(EventDialog);