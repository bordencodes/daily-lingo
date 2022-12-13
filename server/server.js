const express = require('express')
const db = require('./db')
const cors = require('cors')

const app = express()

const Router = require('./routes/index')
const { Habit } = require('./models')
const { User } = require('./models')

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
// app.use(express.static(`${__dirname}/client/build`))
app.use('/api', Router)

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/user', (req, res) => {
  res.send('This is user root!')
})

app.get('/habit', (req, res) => {
  res.send('This is habit root!')
})

app.get('/calendar', (req, res) => {
  res.send('This is calendar root!')
})

app.get('/users', async (req, res) => {
  let allUsers = await User.find({})
  res.json(allUsers)
})

app.get('/user/:id', async (req, res) => {
  let findUser = await Phrase.findById(req.params.id).populate('collections')
  res.json(findUser)
})

app.get('/habit/:id', async (req, res) => {
  let findHabits = await Habit.findById(req.params.id)
  res.json(findHabits)
})

app.get('/habit', async (req, res) => {
  let allHabits = await Habit.find({})
  res.json(allHabits)
})

app.post('/user', async (req, res) => {
  let createUser = await User.create(req.body)
  res.json(createUser)
})

app.post('/habit', async (req, res) => {
  let createHabit = await Habit.create(req.body)
  res.json(createHabit)
})

app.put('/user/:id', async (req, res) => {
  let updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updateUser)
})

app.put('/habit/:id', async (req, res) => {
  let updateHabit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updateHabit)
})

app.delete('/user/:id', async (req, res) => {
  let deleteUser = await User.findByIdAndDelete(req.params.id)
  res.json(deleteUser)
})

app.delete('/habit/:id', async (req, res) => {
  let deleteHabit = await Habit.findByIdAndDelete(req.params.id)
  res.json(deleteHabit)
})

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/*', (req, res) => {
//   res.sendFile(`${__direname}/client/build/index.html`)
// })

app.listen(PORT, () => console.log(`Express server listening on port: ${PORT}`))
