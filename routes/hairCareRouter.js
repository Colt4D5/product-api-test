import express from 'express'
const router = express.Router()

// controllers
import * as products from '../controllers/hairCareController.js'

router
  .route('/:category')
    .get(products.getProducts)


// router
//   .route('/shampoo')
//     .get(hairCare.getShampoos)

// router
//   .route('/scalp-care')
//     .get(hairCare.getScalpCare)

// router
//   .route('/conditioner')
//     .get(hairCare.getConditioner)

    export default router