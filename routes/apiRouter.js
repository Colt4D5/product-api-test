import express from 'express'
const router = express.Router()

import hairCareRouter from './hairCareRouter.js'
// import * as products from '../controllers/hairCareController.js'

router.use('/hair-care', hairCareRouter)

// router
//   .route('/:category')
//     .get(products.getProducts)

    export default router