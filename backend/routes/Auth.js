import express from 'express'
import { userLogout ,Login, Signup, deleteuser, updateuser } from "../controllers/auth.js" 

const router = express.Router()

router.post('/login', Login)
router.post('/signup', Signup)
router.delete('/user', deleteuser)
router.put('/user', updateuser)
router.post('/logout', userLogout)

export default router



