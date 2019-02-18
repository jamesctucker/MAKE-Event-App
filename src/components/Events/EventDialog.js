import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class EventDialog extends Component {
    state = {
        open: false,
        person_id: 5,
        event_id: 7,
    };

    handleClickOpen = (event) => {
        this.setState({
            open: true,
            event_id: event.target.value,
        });
    };

    handleSetUser = (event) => {
        this.setState({
            user_id: event.target.value,
        });
        this.handleClose();
    }

    handleClose = () => {
        this.setState({
            open: false,
        });
        const action = ({ type: 'REGISTER_FOR_EVENT', payload: this.state });
        this.props.dispatch(action);
    };

    render() {
        return (
            <div>
                <Button
                    value={this.state.event_id}
                    variant="contained"
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    Register
              </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
            </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.handleClose}
                            color="primary"
                        >
                            Cancel
                         </Button>
                        <Button
                            value={this.state.user_id}
                            onClick={this.handleSetUser}
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