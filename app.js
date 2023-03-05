import express from 'express'
const router = express.Router()

import apiRouter from './routes/apiRouter.js'

router.use('/api', apiRouter)

export default router