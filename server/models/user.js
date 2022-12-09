const { Schema } = require('mongoose')

const user = new Schema(
  {
    firstName: { type: STRING, required: true },
    lastName: { type: STRING, required: true },
    email: { type: STRING, required: true },
    password: { type: STRING, required: true }
  },
  { timestamps: true }
)

module.exports = user
