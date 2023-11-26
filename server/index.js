const express = require('express')
const color = require('colors')
require('dotenv').config()
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

const app = express()

// Connect to MongoDB
connectDB()

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`))