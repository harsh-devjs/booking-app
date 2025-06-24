import Hotel from '../models/Hotel.js'

// CREATE
export const createHotel = async (req, res, next) => {

    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
}

// UPDATE
export const updateHotel = async (req, res, next) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err)
    }
}

// DELETE
export const deleteHotel = async (req, res, next) => {

    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel deleted sucessfully')
    } catch (err) {
        next(err)
    }
}

// GET
export const getHotel = async (req, res, next) => {

    try {
        const getHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getHotel)
    } catch (err) {
        next(err)
    }
}

// GET ALL
export const getAllHotels = async (req, res, next) => {

    try {
        const getAllHotels = await Hotel.find()
        res.status(200).json(getAllHotels)
    } catch (err) {
        next(err)
    }
}
