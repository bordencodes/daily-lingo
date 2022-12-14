const { Schema } = require('mongoose')

const habit = new Schema(
  {
    name: { type: String, required: true },
    translation: { type: String, required: true },
    date: { type: Date, required: true }
  },
  { timestamps: true }
)

module.exports = habit
