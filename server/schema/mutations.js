const Recipe = require('../models/Recipe')
const User = require('../models/User')
const {RecipeType, UserType, IngredientType } = require('./types')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLNonNull } = require('graphql')


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createRecipe: {
            type: RecipeType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                ingredients: { type: GraphQLList(GraphQLString) },
                steps: { type: GraphQLList(GraphQLString) },
                notes: { type: GraphQLList(GraphQLString) },
                userId: { type: GraphQLID }
            },
            resolve(parent, args) {
                let recipe = new Recipe({
                    name: args.name,
                    ingredients: args.ingredients,
                    steps: args.steps,
                    notes: args.notes,
                    userId: args.userId
                })
                return recipe.save()
            }
        },
        updateRecipe: {
            type: RecipeType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLNonNull(GraphQLString) },
                ingredients: { type: GraphQLList(GraphQLString) },
                steps: { type: GraphQLList(GraphQLString) },
                notes: { type: GraphQLList(GraphQLString) },
                userId: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Recipe.findByIdAndUpdate(
                    args.id,
                    {
                        name: args.name,
                        ingredients: args.ingredients,
                        steps: args.steps,
                        notes: args.notes,
                        userId: args.userId
                    },
                    { new: true }
                )
            }
        },
        deleteRecipe: {
            type: RecipeType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Recipe.findByIdAndDelete(args.id)
            }
        },
        createUser: {
            type: UserType,
            args: {
                name: {type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parent, args) {
                let user = new User({
                    name: args.name,
                    email: args.email,
                    password: args.password
                })
                return user.save()
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLString },
                password: { type: GraphQLString }            },
            resolve(parent, args) {
                return User.findByIdAndUpdate(
                    args.id,
                    {
                        name: args.name,
                        email: args.email
                    },
                    { new: true }
                )
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return User.findByIdAndDelete(args.id)
            }
        },
    }
})

module.exports = Mutation