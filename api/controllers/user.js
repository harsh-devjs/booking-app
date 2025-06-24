import User from '../models/User.js'

// UPDATE
export const updateUser = async (req, res, next) => {

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}

// DELETE
export const deleteUser = async (req, res, next) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User deleted sucessfully')
    } catch (err) {
        next(err)
    }
}

// GET
export const getUser = async (req, res, next) => {

    try {
        const getUser = await User.findById(req.params.id)
        res.status(200).json(getUser)
    } catch (err) {
        next(err)
    }
}

// GET ALL
export const getAllUsers = async (req, res, next) => {

    try {
        const getAllUsers = await User.find()
        res.status(200).json(getAllUsers)
    } catch (err) {
        next(err)
    }
}
