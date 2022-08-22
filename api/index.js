// set "type" : "module" in package json to use import instead of require()
import express from 'express' 
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express() // initialize app
const PORT = 8000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`RestfulBoulder API running on ${PORT}` )
})

// JSON parsing middleware
app.use(express.json())

// connect to mongo database
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true})
    .catch((error) => console.log(error.message))

const db = mongoose.connection
db.once('open', () => console.log('Connection Successful'))



// API endpoints
import BoulderRoutes from './routes/BoulderRoutes.js'
app.use('/boulders', BoulderRoutes)