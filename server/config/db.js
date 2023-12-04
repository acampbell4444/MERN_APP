const mongoose = require('mongoose');

const connectDB = async () => {
    const connection = await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.amunqhy.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
    console.log(`MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;