import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router()

// REGISTER
router.post('/register', register)
// LOG IN
router.get('/login', login)

export default router