const express = require('express');
require('dotenv').config();


const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const eventRouter = require('./routes/event.router');
const anouncementRouter = require('./routes/anouncement.router');
const miscRouter = require('./routes/misc.data.router');
// const uploadRouter = require('./routes/upload.router');



// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);


// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());


/* Routes */
app.use('/api/user', userRouter);
app.use('/api/events', eventRouter);
app.use('/api/announcements', anouncementRouter);
app.use('/api/data', miscRouter);
// app.use('/api/upload', uploadRouter);

// Serve static files
app.use(express.static('build'));


// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
