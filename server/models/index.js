const mongoose = require('mongoose')
const users = require('./users')
const habits = require('./habits')
const calendar = require('./calendar')

const User = mongoose.model('User', users)
const Habit = mongoose.model('Habit', habits)
const Calendar = mongoose.model('Calendar', calendar)

module.exports = {
  User,
  Habit,
  Calendar
}
