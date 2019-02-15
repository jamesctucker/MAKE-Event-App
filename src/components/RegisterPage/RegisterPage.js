import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import './RegisterPage.css';

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

  // componentDidMount = () => {
  //   this.props.dispatch({ type: 'FETCH_COUNTRIES' });
  // }


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
            className="alert"
            role="alert"
          >
            {this.props.reduxStore.errors.registrationMessage}
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
            <FormControl>
              <InputLabel shrink htmlFor="country-dropdown">
                Select Country
                        </InputLabel>
              <Select
                value={this.state.country_id}
                onChange={this.handleInputChangeFor('country_id')}
                input={<Input name="country" id="country-dropdown" />}
                displayEmpty
                name="country"
              >
                {countries.map(result => (
                  <MenuItem key={result.value} value={result.value}>
                    {result.label}
                  </MenuItem>


                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <InputLabel htmlFor="gender">
              Gender:
              </InputLabel>
            <Select
              value={this.state.gender_id}
              onChange={this.handleInputChangeFor('gender_id')}
              displayEmpty
              name="gender"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {genders.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
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
    )
  }
};

// // Instead of taking everything from state, we just want the error messages.
// // if you wanted you could write this code like this:
// const mapStateToProps = ({ errors }) => ({ errors });

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

