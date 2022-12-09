const express = require('express')
const mongoose = require('mongoose')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3001
const MONGODB_URI =
  process.env.MONGODB_URI || 'mondgodb://localhost/dailylingoDB'

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Start Here')
})

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
