// const { fileURLToPath } = require('url')
// const { dirname } = require('path')
const path = require('path')
const fs = require('fs')

const getProducts = (req, res) => {
  const { category } = req.params
  // const __filename = fileURLToPath(import.meta.url);
  // const __dirname = dirname(__filename);
  let jsonData = fs.readFileSync(path.join(__dirname, '..', `/public/hair-care/${category}.json`));
  let products = JSON.parse(jsonData);
  res.status(200).json( {products} )
}

// const getShampoos = (req, res) => {
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = dirname(__filename);
//   let jsonData = fs.readFileSync(__dirname.replace('/controllers', '') + '/hair-care/shampoo.json');
//   let shampoos = JSON.parse(jsonData);
//   const response = {
//     products: shampoos
//   }
//   res.status(200).json( response )
// }

// const getScalpCare = (req, res) => {
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = dirname(__filename);
//   let jsonData = fs.readFileSync(__dirname.replace('/controllers', '') + '/hair-care/scalp-care.json');
//   let scalpCare = JSON.parse(jsonData);
//   const response = {
//     products: scalpCare
//   }
//   res.status(200).json( response )
// }

// const getConditioner = (req, res) => {
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = dirname(__filename);
//   let jsonData = fs.readFileSync(__dirname.replace('/controllers', '') + '/hair-care/conditioner.json');
//   let scalpCare = JSON.parse(jsonData);
//   const response = {
//     products: scalpCare
//   }
//   res.status(200).json( response )
// }

// module.exports = { getProducts, getShampoos, getScalpCare, getConditioner }
module.exports = getProducts