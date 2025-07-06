import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, getHotelRooms, updateHotel } from '../controllers/hotel.js'
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

// CREATE
router.post('/', verifyAdmin, createHotel)

// UPDATE
router.put('/:id', verifyAdmin, updateHotel)

// DELETE
router.delete('/:id', verifyAdmin, deleteHotel)

// GET BY CITY
router.get('/countbycities', countByCity)

// GET BY TYPE
router.get('/countbytype', countByType)

// GET
router.get('/:id', getHotel)

// GET ALL
router.get('/', getAllHotels)

// GET HOTEL ROOMS
router.get('/rooms/:id', getHotelRooms)


export default router