import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import hotelRoute from './routes/hotels.js'
import roomRoute from './routes/rooms.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

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
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/hotels', hotelRoute)
app.use('/api/rooms', roomRoute)

app.use((err, req, res, next) => {
    const errStatus = err.status || 500
    const errMessage = err.message || 'Something went wrong'
    return res.status(errStatus).send({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    })
})

app.listen(8080, () => {
    connect()
    console.log(`Connected to backend`)
})