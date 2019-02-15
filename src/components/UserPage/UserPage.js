import React from 'react';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1>Your Account</h1>
    <h3 id="welcome">
      Welcome, {props.user.username}!
    </h3>
    <p>Your ID is: {props.user.id}</p>
    <TextField variant="outlined" label="Name" value={props.user.name}></TextField>
    <TextField variant="outlined" label="Birthdate" value={props.user.dob}></TextField>
    <TextField variant="outlined" label="Email" value={props.user.email}></TextField>
    <TextField variant="outlined" label="Phone" value={props.user.phone}></TextField>
    <TextField variant="outlined" label="Hometown" value={props.user.hometown}></TextField>
    <TextField variant="outlined" label="Country" value={props.user.country_id}></TextField>
    <TextField variant="outlined" label="Gender" value={props.user.gender_id}></TextField>
    <TextField variant="outlined" label="Food Preferences" value={props.user.food_preferences}></TextField>
    <TextField variant="outlined" label="Preferred Transportation" value={props.user.preferred_transportation}></TextField>


    <div>
      <Button variant='contained'>Submit Changes</Button>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
