import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import UserPage from '../UserPage/UserPage';
import Events from '../Events/Events';
import CreateEvent from '../Events/CreateEvent';
import Dashboard from './../Admin/Dashboard/Dashboard';
import News from '../News/News';
import AddNews from '../News/AddNews';



// import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/account" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/news"
              component={News}
            />
            <Route
              exact
              path="/add-news"
              component={AddNews}
            />


            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/account"
              component={UserPage}
            />


            <ProtectedRoute
              exact
              path="/dashboard"
              component={Dashboard}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <Route
              exact
              path="/events"
              component={Events}
            />


            <Route
              exact
              path="/create-event"
              component={CreateEvent}
            />

            <Route
              exact
              path="/news"
              component={News}
            />

            <Route
              exact
              path="/add-news"
              component={AddNews}
            />





            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);