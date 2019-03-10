import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


function WrappedUploadButton(props) {
    const { classes } = props;
    return (
        <div>
            {/* {JSON.stringify(this.state.file)} */}
            <input
                id="raised-button-file"
                multiple
                type="file"
                className={classes.input}
            />
            <label htmlFor="raised-button-file">
                <Button variant="contained" component="span" className={classes.button}>
                    Upload
                    </Button>
            </label>

        </div>
    )
}

WrappedUploadButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WrappedUploadButton);