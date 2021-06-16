import express from 'express'
import user from '../services/user-service'
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send(user.users())
})




export default router;