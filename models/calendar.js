const { Schema } = require('mongoose')

const calendar = new Schema(
  {
    dateId: { type: Date, required: true },
    habitId: { type: Schema.Types.ObjectId, ref: 'Habit' },
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
)

module.exports = calendar
