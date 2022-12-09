const mongoose = require('mongoose')
const user = require('./user')
const habit = require('./habit')
const calendar = require('./calendar')

const User = mongoose.model('User', user)
const Habit = mongoose.model('Habit', habit)
const Calendar = mongoose.model('Calendar', calendar)

module.exports = {
  User,
  Habit,
  Calendar
}
