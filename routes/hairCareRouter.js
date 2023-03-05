const express = require('express')
const router = express.Router()

// controllers
const products = require('../controllers/hairCareController.js')

router
  .route('/:category')
    .get(products)


// router
//   .route('/shampoo')
//     .get(hairCare.getShampoos)

// router
//   .route('/scalp-care')
//     .get(hairCare.getScalpCare)

// router
//   .route('/conditioner')
//     .get(hairCare.getConditioner)

module.exports = router