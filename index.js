const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport'); // not returning anything, so we can execute it directly

mongoose.connect(keys.mongoURI);
const app = express();

// Middlewares
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000, // 30 days
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Adding routes
require('./routes/authRoutes')(app); // returns the function and immediatly invokes passing the app

const PORT = process.env.PORT || 5000;
app.listen(PORT);