const express = require('express')
const color = require('colors')
const cors = require('cors')
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./graphql/schema/index')
const resolvers = require('./graphql/resolvers/rootResolver')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

dotenv.config()
const app = express()


// Connect to MongoDB
connectDB().catch(error => console.log(error))

app.use(cors())
app.use(bodyParser.json())


app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`))
