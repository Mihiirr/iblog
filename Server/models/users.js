const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 100
    },

    email: {
        type: String,
        required: true,
        maxlength: 100
     },

    password: {
        type: String,
        required: true,
        minlength: 5,
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        required: true
    }
});

const User = mongoose.model('User', userSchema);

// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("B4c0/\/", salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });

exports.User = User;
