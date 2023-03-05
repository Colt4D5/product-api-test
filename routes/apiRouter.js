const express = require('express')
const router = express.Router()

const hairCareRouter = require('./hairCareRouter.js')
// import * as products from '../controllers/hairCareController.js'

router.use('/hair-care', hairCareRouter)

// router
//   .route('/:category')
//     .get(products.getProducts)

module.exports = router