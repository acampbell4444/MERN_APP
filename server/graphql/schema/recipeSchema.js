const RecipeSchema = `

type Ingredient {
    name: String!
    amount: Float!
    unit: String!
}

type Recipe {
    _id: ID!
    title: String!
    ingredients: [Ingredient]
    instructions: [String]
    creator: User!
}

input IngredientInput {
    name: String
    amount: Float
    unit: String
}

input RecipeInput {
    title: String
    instructions: [String]
    ingredients: [IngredientInput]
}
`

module.exports = RecipeSchema