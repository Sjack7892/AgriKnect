
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const searchRouter = require('./routes/search.router');
const userRouter = require('./routes/user.router');
const talentRouter = require ('./routes/talent.router'); 
const farmRouter = require ('./routes/farm.router'); 
const jobsRouter = require ('./routes/jobs.router'); 
const proficienciesRouter = require ('./routes/proficiencies.router');  

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
app.use('/talent', talentRouter);
app.use('/farm', farmRouter);
app.use('/jobs', jobsRouter);
app.use('/proficiencies', proficienciesRouter);
app.use('/search', searchRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
