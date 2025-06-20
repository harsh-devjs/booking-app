import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import hotelRoute from './routes/hotels.js'
import roomRoute from './routes/hotels.js'

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to mongodb')
    } catch (err) {
        console.log(err)
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('Mongodb disconnected')
})

// middlewares
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/hotels', hotelRoute)
app.use('/api/hotels/:id', roomRoute)

app.listen(8080, () => {
    connect()
    console.log(`Connected to backend`)
})