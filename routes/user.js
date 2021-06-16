import express from 'express'
import user from '../services/user-service'
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send(user.getUsers())
})

router.get('/:name', (req, res, next) => {
    const { name } = req.params
    res.send(user.userByName(name))
})




export default router;