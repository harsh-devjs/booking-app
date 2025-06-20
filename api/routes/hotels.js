import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js'

const router = express.Router()

// CREATE
router.post('/addhotel', createHotel)

// UPDATE
router.put('/:id', updateHotel)

// DELETE
router.delete('/:id', deleteHotel)

// GET
router.get('/:id', getHotel)

// GET ALL
router.get('/', getAllHotels)

export default router