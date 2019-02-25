import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import './RegisterPage.css';
import { Typography } from '@material-ui/core';

const genders = [
  {
    value: 1,
    label: 'Male',
  },
  {
    value: 2,
    label: 'Female',
  },
  {
    value: 3,
    label: 'Other',
  },
];

const countries = [
  {
    value: 18,
    label: 'Bangladesh',
  },
  {
    value: 25,
    label: 'Bhutan',
  },
  {
    value: 32,
    label: 'Brunei',
  },
  {
    value: 36,
    label: 'Cambodia',
  },
  {
    value: 44,
    label: 'China',
  },
  {
    value: 96,
    label: 'Hong Kong',
  },
  {
    value: 99,
    label: 'India',
  },
  {
    value: 100,
    label: 'Indonesia',
  },
  {
    value: 107,
    label: 'Japan',
  },
  {
    value: 112,
    label: 'Korea, North',
  },
  {
    value: 113,
    label: 'Korea, South',
  },
  {
    value: 116,
    label: 'Laos',
  },
  {
    value: 125,
    label: 'Macao',
  },
  {
    value: 129,
    label: 'Malaysia',
  },
  {
    value: 146,
    label: 'Myanmar',
  },
  {
    value: 149,
    label: 'Nepal',
  },
  {
    value: 162,
    label: 'Pakistan',
  },
  {
    value: 166,
    label: 'Papua New Guinea',
  },
  {
    value: 169,
    label: 'Philippines',
  },
  {
    value: 192,
    label: 'Singapore',
  },
  {
    value: 200,
    label: 'Sri Lanka',
  },
  {
    value: 208,
    label: 'Taiwan',
  },
  {
    value: 211,
    label: 'Thailand',
  },
  {
    value: 218,
    label: 'Turkey',
  },
  {
    value: 219,
    label: 'Turkmenistan',
  },
  {
    value: 225,
    label: 'United Kingdom',
  },
  {
    value: 226,
    label: 'United States',
  },
  {
    value: 232,
    label: 'Vietnam',
  },
  {
    value: 0,
    label: 'Other',
  },
];

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      dob: '',
      email: '',
      phone: '',
      hometown: '',
      country_id: '',
      gender_id: 'Select Gender',
      facebook_username: '',
      employer: '',
      job_title: '',
      food_preferences: '',
      preferred_transportation: '',
      comments: '',
    }
  }


  registerUser = (event) => {
    event.preventDefault();


    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          name: this.state.name,
          dob: this.state.dob,
          email: this.state.email,
          phone: this.state.phone,
          hometown: this.state.hometown,
          country_id: this.state.country_id,
          gender_id: this.state.gender_id,
          facebook_username: this.state.facebook_username,
          employer: this.state.employer,
          job_title: this.state.job_title,
          food_preferences: this.state.food_preferences,
          preferred_transportation: this.state.preferred_transportation,
          comments: this.state.comments,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>

        {this.props.reduxStore.errors.registrationMessage && (
          <h2
            id="alert"
            role="alert"
          >
            {this.props.reduxStore.errors.registrationMessage}
          </h2>
        )}

        <Paper elevation={3} id="register-paper">
          <Typography id="text-div" variant="h6">
            Register For An Account
        </Typography>
          <div id="text-div">
            <TextField
              label="Username"
              variant="filled"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </div>
          <div id="text-div">
            <TextField
              label="Choose Password"
              variant="filled"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </div>
          <div id="text-div">
            <TextField
              label="Full Name"
              variant="filled"
              value={this.state.name}
              onChange={this.handleInputChangeFor('name')}
            />
          </div>
          <div id="text-div">
            <TextField
              label="Date of Birth"
              variant="filled"
              value={this.state.dob}
              onChange={this.handleInputChangeFor('dob')}
            />
          </div>
          <div id="text-div">
            <TextField
              label="Email Address"
              variant="filled"
              value={this.state.email}
              onChange={this.handleInputChangeFor('email')}
            />
          </div>
          <div id="text-div">
            <TextField
              label="Phone Number"
              variant="filled"
              value={this.state.phone}
              onChange={this.handleInputChangeFor('phone')}
            />
          </div>
          <div id="text-div">
            <TextField
              label="Hometown"
              variant="filled"
              value={this.state.hometown}
              onChange={this.handleInputChangeFor('hometown')}
            />
          </div>
          <div id="text-div">
            <TextField
              select
              label="Country"
              variant="filled"
              value={this.state.country_id}
              onChange={this.handleInputChangeFor('country_id')}
              helperText="Please select your country"
            >
              {countries.map(result => (
                <MenuItem key={result.value} value={result.value}>
                  {result.label}
                </MenuItem>


              ))}
            </TextField>
          </div>
          <div id="text-div">
            <TextField
              select
              label="Gender"
              variant="filled"
              value={this.state.gender_id}
              onChange={this.handleInputChangeFor('gender_id')}
              helperText="Please select your gender"
            >
              {genders.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div id="text-div">
            <TextField
              label="Social Media Url(s)"
              variant="filled"
              value={this.state.facebook_username}
              onChange={this.handleInputChangeFor('facebook_username')}
            />
          </div>
          <div id="text-div">
            <TextField
              label="Employer"
              variant="filled"
              value={this.state.employer}
              onChange={this.handleInputChangeFor('employer')}
            />
          </div>
          <div id="text-div">
            <TextField
              label="Job Title"
              variant="filled"
              value={this.state.job_title}
              onChange={this.handleInputChangeFor('job_title')}
            />
          </div>
          <div id="text-div">
            <TextField
              label="Food Preferences"
              variant="filled"
              value={this.state.food_preferences}
              onChange={this.handleInputChangeFor('food_preferences')}
            />
          </div>
          <div id="text-div">
            <TextField
              label="Preferred Transportation"
              variant="filled"
              value={this.state.preferred_transportation}
              onChange={this.handleInputChangeFor('preferred_transportation')}
            />
          </div>
          <div id="text-div">
            <TextField
              multiline
              label="Comments"
              variant="filled"
              value={this.state.comments}
              onChange={this.handleInputChangeFor('comments')}
            />
          </div>
          <div id="text-div">
            <Button
              color="primary"
              variant="contained"
              onClick={this.registerUser}
            >
              Create Account
                </Button>
          </div>
        </Paper>
        <center>
          <div>
            <Button
              color="primary"
              variant="contained"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
            >
              Login
          </Button>
          </div>
        </center>
      </div>
    )
  }
};

// // Instead of taking everything from state, we just want the error messages.
// // if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({errors});

// const mapStateToProps = state => ({
//   errors: state.errors,
//   countries: state.countries,
//   genders: state.genders,
// });

// // export default connect(mapStateToProps)(RegisterPage);

const mapStoreToProps = reduxStore => ({
  reduxStore,
});

export default connect(mapStoreToProps)(RegisterPage);

