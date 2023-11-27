const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    ingredients: {
        type: [Object]
    },
    steps: {
        type: [String]
    },
    notes: {
        type: [String]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema);
