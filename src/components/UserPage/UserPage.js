import React from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment'
import './UserPage.css';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <Typography variant="h5">
      Your Account Information
    </Typography>
    <Paper id="paper" elevation={3}>
      <Typography variant="h6">
        Welcome, {props.user.username}!
    </Typography>
      <InputLabel id="text-field" variant="outlined">
        Name:
      </InputLabel>
      <Input id="text-field" label="Name" placeholder={props.user.name}></Input>
      <InputLabel id="text-field" variant="outlined">
        Birthdate:
      </InputLabel>
      <Input id="text-field" variant="outlined" label="Birthdate" value={moment(props.user.dob).format("MMMM Do, YYYY")}></Input>
      <InputLabel id="text-field" variant="outlined">
        Email:
      </InputLabel>
      <Input id="text-field" variant="outlined" label="Email" value={props.user.email}></Input>
      <InputLabel id="text-field" variant="outlined">
        Phone:
      </InputLabel>
      <Input id="text-field" variant="outlined" label="Phone" value={props.user.phone}></Input>
      <InputLabel id="text-field" variant="outlined">
        Hometown:
      </InputLabel>
      <Input id="text-field" variant="outlined" label="Hometown" value={props.user.hometown}></Input>
      <InputLabel id="text-field" variant="outlined">
        Country:
      </InputLabel>
      <Input id="text-field" variant="outlined" label="Country" value={props.user.country_id}></Input>
      <InputLabel id="text-field" variant="outlined">
        Gender:
      </InputLabel>
      <Input id="text-field" variant="outlined" label="Gender" value={props.user.gender_id}></Input>
      <InputLabel id="text-field" variant="outlined">
        Food Preferences:
      </InputLabel>
      <Input id="text-field" variant="outlined" label="Food Preferences" value={props.user.food_preferences}></Input>
      <InputLabel id="text-field" variant="outlined">
        Preferred Transportation:
      </InputLabel>
      <Input id="text-field" variant="outlined" label="Preferred Transportation" value={props.user.preferred_transportation}></Input>
      <div>
        <Button variant='contained'>Update Profile</Button>
      </div>
    </Paper>
    <div>
      <Typography variant="h5">
        Your Events
          </Typography>
      <Paper id="paper" elevation={3}>
        <Typography variant="body1">
          Events will go here as cards or list?
            </Typography>
      </Paper>
    </div>
  </div >
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
