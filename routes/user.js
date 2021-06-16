import express from 'express'
import user from '../services/user-service'
const router = express.Router()

const users = (req, res, next) => {
    res.send(user.users)
}

router.get('/', users(req, res, next))




export default router;