import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

// AUTHENTICATES ALREADY REGISTERED USER USING JWT
// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//     res.send('Authentication successfull')
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('Authentication successfull, you can delete your account')
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send('Authentication successfull [ADMIN], you can delete all accounts')
// })

// UPDATE
router.put('/:id', verifyUser, updateUser)

// DELETE
router.delete('/:id', verifyUser, deleteUser)

// GET
router.get('/:id', verifyUser, getUser)

// GET ALL
router.get('/', verifyAdmin, getAllUsers)

export default router