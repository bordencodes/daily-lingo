const { Schema } = require('mongoose')

const habit = new Schema(
  {
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    habitName: { type: STRING, required: true },
    description: { type: STRING, required: true }
  },
  { timestamps: true }
)

module.exports = habit
