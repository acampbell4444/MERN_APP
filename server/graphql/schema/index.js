const { buildSchema } = require('graphql')
const UserSchema = require('./userSchema')
const EventSchema = require('./eventSchema')
const RecipeSchema = require('./recipeSchema')

const RootSchema = buildSchema(`

${UserSchema}
${EventSchema}
${RecipeSchema}

type RootQuery {
    events: [Event!]!
    recipes: [Recipe!]!
    users: [User!]!
}

type RootMutation {
    createUser(userInput: UserInput): User
    createEvent(eventInput: EventInput): Event
    createRecipe(recipeInput: RecipeInput): Recipe
}

schema {
    query: RootQuery
    mutation: RootMutation
}

`)

module.exports = RootSchema