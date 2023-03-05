const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

const appRouter = require('./app.js')


const PORT = process.env.PORT || 3000

// Middleware
app.use(cors({
  origin: '*'
}))
app.use(express.static('public'))
app.use(express.json())
app.use(morgan('tiny'))

// Routes
app.use('/', appRouter)

app.get('/*', (req, res) => {
  res.json({status: 404})
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))