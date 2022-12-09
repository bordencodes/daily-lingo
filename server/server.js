const express = require('express')
const db = require('./db')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
  res.send('This is root!')
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__direname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Express server listening on port: ${PORT}`))
