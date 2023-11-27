const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql')
const Recipe = require('../models/Recipe')
const User = require('../models/User')

const IngredientType = new GraphQLObjectType({
    name: 'Ingredient',
    fields: () => ({
        amount: {type: GraphQLString},
        ingredient: {type: GraphQLString},
        unit: {type: GraphQLString},
    })
})

const RecipeType = new GraphQLObjectType({
    name: 'Recipe',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        ingredients: { type: GraphQLList(GraphQLString) },
        steps: { type: GraphQLList(GraphQLString) },
        notes: { type: GraphQLList(GraphQLString) },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId)
            }
        },
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
        
    })
})

module.exports = { RecipeType, UserType, IngredientType }