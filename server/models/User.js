const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    createdEvents: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ],
    createdRecipes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe'
        }
    ]
})

module.exports = mongoose.model('User', userSchema)