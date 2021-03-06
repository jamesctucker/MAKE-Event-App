import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/account">
      <h2 className="nav-title">MAKE Events</h2>
    </Link>
    <div className="nav-right">
      {/* Show the link to the info page and the logout button if the user is logged in */}
      <Link className="nav-link" to="/events">
        Events
      </Link>
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/news">
        News
      </Link>
      <Link className="nav-link" to="/account">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Account' : 'Login / Register'}
      </Link>
      {props.user.auth_id >= 2 && (
        <>
          <Link className="nav-link" to="/dashboard">
            Dashboard
        </Link>
        </>
      )}
      {props.user.id && (
        <LogOutButton className="nav-link" />
      )}

    </div>
  </div>
);




// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({user});
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
