const user = require('../models/user')
const habit = require('../models/habit')
const calendar = require('../models/calendar')
const { Habit, User, Calendar } = require('../models')

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({ user })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      return res.status(200).json({ user })
    }
    return res.status(404).send('This specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await User.findByIdAndDelete(id)
    if (deletedUser) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createHabit = async (req, res) => {
  try {
    const habit = await new Habit(req.body)
    await habit.save()
    return res.status(201).json({ habit })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find()
    return res.status(200).json({ habits })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getHabitById = async (req, res) => {
  try {
    const { id } = req.params
    const habit = await Habit.findById(id)
    if (habit) {
      return res.status(200).json({ habit })
    }
    return res.status(404).send('This specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(habit)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deleteHabit = async (req, res) => {
  try {
    const { id } = req.params
    const deletedHabit = await Habit.findByIdAndDelete(id)
    if (deletedHabit) {
      return res.status(200).send('Item deleted')
    }
    throw new Error('Word not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getCalendar = async (req, res) => {
  try {
    const calendar = await Calendar.find()
    return res.status(200).json({ calendar })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createHabit,
  getAllHabits,
  getHabitById,
  updateHabit,
  deleteHabit,
  getCalendar
}
