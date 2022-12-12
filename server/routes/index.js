const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/user', controllers.createUser)

router.get('/user', controllers.getAllUsers)

router.get('/user/:id', controllers.getUserById)

router.put('/user/:id', controllers.updateUser)

router.delete('/user/:id', controllers.deleteUser)

router.post('/habit', controllers.createHabit)

router.get('/habit', controllers.getAllHabits)

router.get('/habit/:id', controllers.getHabitById)

router.put('/habit/:id', controllers.updateHabit)

router.delete('/habit/:id', controllers.deleteHabit)

router.get('/calendar', controllers.getCalendar)

module.exports = router
