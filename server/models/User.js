const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: { 
        type: String,
        unique: true,
    },
    password: {
        type: String
    },
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
})

module.exports = mongoose.model('User', UserSchema);
