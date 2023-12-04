const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: [
            {
                name: String,
                amount: Number,
                unit: String
            }
        ]
    },
    instructions: [String],
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }                    
})

module.exports = mongoose.model('Recipe', recipeSchema)