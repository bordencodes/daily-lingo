const express = require('express')
const db = require('./db')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__direname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
