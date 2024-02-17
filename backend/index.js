const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

const port = process.env.PORT || 8080

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 1000 * 20,
    connectTimeoutMS: 1000 * 20,
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})