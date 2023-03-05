import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs'

const getProducts = (req, res) => {
  const { category } = req.params
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let jsonData = fs.readFileSync(__dirname.replace('/controllers', '') + `/api/hair-care/${category}.json`);
  let products = JSON.parse(jsonData);
  res.status(200).json( {products} )
}

const getShampoos = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let jsonData = fs.readFileSync(__dirname.replace('/controllers', '') + '/api/hair-care/shampoo.json');
  let shampoos = JSON.parse(jsonData);
  const response = {
    products: shampoos
  }
  res.status(200).json( response )
}

const getScalpCare = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let jsonData = fs.readFileSync(__dirname.replace('/controllers', '') + '/api/hair-care/scalp-care.json');
  let scalpCare = JSON.parse(jsonData);
  const response = {
    products: scalpCare
  }
  res.status(200).json( response )
}

const getConditioner = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let jsonData = fs.readFileSync(__dirname.replace('/controllers', '') + '/api/hair-care/conditioner.json');
  let scalpCare = JSON.parse(jsonData);
  const response = {
    products: scalpCare
  }
  res.status(200).json( response )
}

export { getProducts, getShampoos, getScalpCare, getConditioner }