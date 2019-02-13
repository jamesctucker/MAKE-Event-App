import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="name">
              Full Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChangeFor('name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="dob">
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={this.state.dob}
                onChange={this.handleInputChangeFor('dob')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone:
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChangeFor('phone')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="hometown">
              Hometown:
              <input
                type="text"
                name="hometown"
                value={this.state.hometown}
                onChange={this.handleInputChangeFor('hometown')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="country">
              Country:
              <input
                type="text"
                name="country_id"
                value={this.state.country_id}
                onChange={this.handleInputChangeFor('country_id')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="gender">
              Gender:
              <input
                type="text"
                name="gender"
                value={this.state.gender_id}
                onChange={this.handleInputChangeFor('gender_id')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="facebook_username">
              Social Media Handles:
              <input
                type="text"
                name="facebook_username"
                value={this.state.facebook_username}
                onChange={this.handleInputChangeFor('facebook_username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="employer">
              Employer:
              <input
                type="text"
                name="employer"
                value={this.state.employer}
                onChange={this.handleInputChangeFor('employer')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="job_title">
              Job Title:
              <input
                type="text"
                name="job_title"
                value={this.state.job_title}
                onChange={this.handleInputChangeFor('job_title')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="food_preferences">
              Food Preferences:
              <input
                type="text"
                name="food_preferences"
                value={this.state.food_preferences}
                onChange={this.handleInputChangeFor('food_preferences')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="preferred_transportation">
              Preferred Transportation:
              <input
                type="text"
                name="preferred_transportation"
                value={this.state.preferred_transportation}
                onChange={this.handleInputChangeFor('preferred_transportation')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="comments">
              Comments:
              <input
                type="text"
                name="comments"
                value={this.state.comments}
                onChange={this.handleInputChangeFor('comments')}
              />
            </label>
          </div>

          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </button>
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

