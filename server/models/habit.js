const { Schema } = require('mongoose')

const habit = new Schema(
  {
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    habitName: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = habit
