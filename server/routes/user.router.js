const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const name = req.body.name;
  const dob = req.body.dob;
  const email = req.body.email;
  const phone = req.body.phone;
  const hometown = req.body.hometown;
  const country = req.body.country_id;
  const gender = req.body.gender_id;
  const social = req.body.facebook_username;
  const employer = req.body.employer;
  const job = req.body.job_title;
  const preferences = req.body.food_preferences;
  const transportation = req.body.preferred_transportation;
  const comments = req.body.comments;

  const queryText = `INSERT INTO "person" ("username", "password", "name", "dob", "email", "phone", 
                      "hometown", "country_id", "gender_id", "facebook_username", "employer", "job_title", "food_preferences",
                      "preferred_transportation", "comments") VALUES($1, $2, $3, $4, $5, $6, $7, $8,
                      $9, $10, $11, $12, $13, $14, $15) RETURNING id`;
  pool.query(queryText, [username, password, name, dob, email, phone,
    hometown, country, gender, social, employer, job, preferences,
    transportation, comments])
    .then(() => { res.sendStatus(201); })
    .catch((err) => { next(err); });
});

// router.put('/update-account', (req, res)) => {

// }

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
