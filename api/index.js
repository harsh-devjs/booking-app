import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

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

mongoose.connection.on('disconnected', ()=>{
    console.log('Mongodb disconnected')
})

app.get('/', (req, res) => {
    res.send('first request')
})

app.listen(8080, () => {
    connect()
    console.log(`Connected to backend`)
})