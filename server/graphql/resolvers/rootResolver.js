const eventResolver = require('./eventResolver')
const recipeResolver = require('./recipeResolver')
const userResolver = require('./userResolver')


const rootResolver = Object.assign(
    userResolver,
    eventResolver,
    recipeResolver
)

module.exports = rootResolver