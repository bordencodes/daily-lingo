const { Schema } = require('mongoose')

const habit = new Schema(
  {
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    name: { type: String, required: true },
    translation: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = habit
