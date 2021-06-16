import express from 'express'
import userRouter from './user'

const router = express.Router()

router.use('/users', userRouter)

router.get('/', (req, res, next) => {
    res.send('this is test node server')
})

export default router;