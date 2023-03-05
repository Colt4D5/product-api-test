import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()

import appRouter from './app.js'


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


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))