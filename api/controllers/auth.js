import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import { createError } from '../utils/error.js'
import jwt from 'jsonwebtoken'

// REGISTER
export const register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save()

        res.status(200).send('User has been created successfully')

    } catch (err) {
        next(err)
    }
}

// LOG IN
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, 'User not found'))

        const isPassword = bcrypt.compare(req.body.password, user.password)
        if (!isPassword) return next(createError(400, 'Wrong password or username'))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

        const { password, isAdmin, ...otherDetails } = user._doc

        res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).json({ ...otherDetails })
    } catch (err) {
        next(err)
    }
}