import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './LoginPage.css';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <Paper id="login-paper" elevation={3}>
          <center>
            <Typography variant="h6">
              Login
          </Typography>
            <div id="div">
              <TextField
                label="Username"
                variant="filled"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              >
              </TextField>
            </div>
            <div id="div">
              <TextField
                label="Password"
                variant="filled"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              >
              </TextField>
            </div>
            <div id="div">
              <Button variant="contained" color="primary" onClick={this.login}>
                Login
            </Button>
            </div>
          </center>
        </Paper>
        <center>
          <div id="div">
            <Button
              variant="contained"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
            >
              Register
          </Button>
          </div>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
