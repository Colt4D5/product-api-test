const express = require('express')
const router = express.Router()

const apiRouter = require('./routes/apiRouter.js')

router.use('/api', apiRouter)

module.exports = router