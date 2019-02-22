import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import moment from 'moment'
import UserPageRows from './../UserPage/UserPageRows';
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
      <InputLabel id="text-field">
        Name:
      </InputLabel>
      <Input id="text-field" label="Name" placeholder={props.user.name}></Input>
      <InputLabel id="text-field">
        Birthdate:
      </InputLabel>
      <Input id="text-field" label="Birthdate" placeholder={moment(props.user.dob).format("MMMM Do, YYYY")}></Input>
      <InputLabel id="text-field">
        Email:
      </InputLabel>
      <Input id="text-field" label="Email" placeholder={props.user.email}></Input>
      <InputLabel id="text-field">
        Phone:
      </InputLabel>
      <Input id="text-field" label="Phone" placeholder={props.user.phone}></Input>
      <InputLabel id="text-field">
        Hometown:
      </InputLabel>
      <Input id="text-field" label="Hometown" placeholder={props.user.hometown}></Input>
      <InputLabel id="text-field">
        Country:
      </InputLabel>
      <Input id="text-field" label="Country" placeholder={props.user.country_id}></Input>
      <InputLabel id="text-field">
        Gender:
      </InputLabel>
      <Input id="text-field" label="Gender" placeholder={props.user.gender_id}></Input>
      <InputLabel id="text-field">
        Food Preferences:
      </InputLabel>
      <Input id="text-field" label="Food Preferences" placeholder={props.user.food_preferences}></Input>
      <InputLabel id="text-field">
        Preferred Transportation:
      </InputLabel>
      <Input id="text-field" label="Preferred Transportation" placeholder={props.user.preferred_transportation}></Input>
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">Event</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Unregister</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {this.props.reduxStore.eventRegistration.map((result, i) => (
              <UserPageRows key={i} result={result} />
            ))} */}
          </TableBody>
        </Table>
      </Paper>
    </div>
  </div>
);

// class UserPageCallBack extends Component {
//   componentDidMount() {
//     this.props.dispatch({ type: 'FETCH_REGISTERED_EVENTS' });
//   }
// }



const mapStateToProps = state => ({
  user: state.user,
});

// const mapStoreToProps = reduxStore => ({
//   reduxStore,
// })

export default connect(mapStateToProps)(UserPage);
