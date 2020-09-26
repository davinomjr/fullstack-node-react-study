const mongoose = require('mongoose');
const { Schema } = mongoose; // destruction


const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);
