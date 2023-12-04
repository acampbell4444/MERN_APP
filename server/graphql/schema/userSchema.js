const userSchema = `
    type User {
        _id: ID!
        email: String!
        password: String
        createdEvents: [Event!]
        createdRecipes: [Recipe!]
    }

    input UserInput {
        email: String!
        password: String!
    }
`

module.exports = userSchema;