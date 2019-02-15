import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    dob: '',
    email: '',
    phone: '',
    hometown: '',
    country_id: '',
    gender_id: '',
    facebook_username: '',
    employer: '',
    job_title: '',
    food_preferences: '',
    preferred_transportation: '',
    comments: '',
  };

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
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register For An Account</h1>
          <div>
            <InputLabel htmlFor="username">
              Username
            </InputLabel>
            <Input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </div>
          <div>
            <InputLabel htmlFor="password">
              Password:
            </InputLabel>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />

          </div>
          <div>
            <InputLabel htmlFor="name">
              Full Name:
              </InputLabel>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChangeFor('name')}
            />
          </div>
          <div>
            <InputLabel htmlFor="dob">
              Date of Birth:
              </InputLabel>
            <Input
              type="date"
              name="dob"
              value={this.state.dob}
              onChange={this.handleInputChangeFor('dob')}
            />
          </div>
          <div>
            <InputLabel htmlFor="email">
              Email:
              </InputLabel>
            <Input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChangeFor('email')}
            />
          </div>
          <div>
            <InputLabel htmlFor="phone">
              Phone:
              </InputLabel>
            <Input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChangeFor('phone')}
            />
          </div>
          <div>
            <InputLabel htmlFor="hometown">
              Hometown:
              </InputLabel>
            <Input
              type="text"
              name="hometown"
              value={this.state.hometown}
              onChange={this.handleInputChangeFor('hometown')}
            />
          </div>
          <div>
            <InputLabel htmlFor="country">
              Country:
              </InputLabel>
            <Input
              type="text"
              name="country_id"
              value={this.state.country_id}
              onChange={this.handleInputChangeFor('country_id')}
            />
          </div>
          <div>
            <InputLabel htmlFor="gender">
              Gender:
              </InputLabel>
            <Select
              type="text"
              name="gender"
              value={this.state.gender_id}
              onChange={this.handleInputChangeFor('gender_id')}
              input={<Input name="gender_id" id="event-dropdown" />}
              >
              <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {this.props.reduxStore.events.map((result) => (
                                <MenuItem value={result.id}>
                                    {result.event_name}
                                </MenuItem>


                            ))}
                        </Select>
              </Select>
          </div>
          <div>
            <InputLabel htmlFor="facebook_username">
              Social Media Handles:
              </InputLabel>
            <Input
              type="text"
              name="facebook_username"
              value={this.state.facebook_username}
              onChange={this.handleInputChangeFor('facebook_username')}
            />
          </div>
          <div>
            <InputLabel htmlFor="employer">
              Employer:
              </InputLabel>
            <Input
              type="text"
              name="employer"
              value={this.state.employer}
              onChange={this.handleInputChangeFor('employer')}
            />
          </div>
          <div>
            <InputLabel htmlFor="job_title">
              Job Title:
              </InputLabel>
            <Input
              type="text"
              name="job_title"
              value={this.state.job_title}
              onChange={this.handleInputChangeFor('job_title')}
            />
          </div>
          <div>
            <InputLabel htmlFor="food_preferences">
              Food Preferences:
              </InputLabel>
            <Input
              type="text"
              name="food_preferences"
              value={this.state.food_preferences}
              onChange={this.handleInputChangeFor('food_preferences')}
            />
          </div>
          <div>
            <InputLabel htmlFor="preferred_transportation">
              Preferred Transportation:
              </InputLabel>
            <Input
              type="text"
              name="preferred_transportation"
              value={this.state.preferred_transportation}
              onChange={this.handleInputChangeFor('preferred_transportation')}
            />
          </div>
          <div>
            <InputLabel htmlFor="comments">
              Comments:
              </InputLabel>
            <Input
              type="text"
              name="comments"
              value={this.state.comments}
              onChange={this.handleInputChangeFor('comments')}
            />
          </div>
          <div>
            <Input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <Button
            variant="contained"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </Button>
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

export default connect(mapStateToProps)(RegisterPage);

