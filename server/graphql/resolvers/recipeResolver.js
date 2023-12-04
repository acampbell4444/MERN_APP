const Recipe = require('../../models/recipe')
const User = require('../../models/user')

const user = userId => {
    return User.findById(userId)
        .then(user => {
            return { ...user._doc, _id: user.id, createdRecipes: recipes.bind(this, user._doc.createdRecipes) }
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

const recipes = recipeIds => {
    return Recipe.find({ _id: { $in: recipeIds } })
        .then(recipes => {
            return recipes.map(recipe => {
                return { ...recipe._doc, _id: recipe.id, creator: user.bind(this, recipe._doc.creator) }
            })
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

const recipeResolver = {
    recipes: () => {
        return Recipe.find()
            .then(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe._doc, _id: recipe.id, creator: user.bind(this, recipe._doc.creator) }
                })
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    },
    createRecipe: (args) => {
        const recipe = new Recipe({
            title: args.recipeInput.title,
            ingredients: args.recipeInput.ingredients,
            instructions: args.recipeInput.instructions,
            creator: '656d0da589383d4114895cb0'
        })
        let createdRecipe
        return recipe.save()
            .then(result => {
                createdRecipe = { ...result._doc, _id: result._doc._id.toString(), creator: user.bind(this, result._doc.creator) }
                return User.findById('656d0da589383d4114895cb0')
            })
            .then(user => {
                if (!user) {
                    throw new Error('User not found')
                }
                user.createdRecipes.push(recipe)
                return user.save()
            })
            .then(result => {
                return createdRecipe
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    }
}

module.exports = recipeResolver