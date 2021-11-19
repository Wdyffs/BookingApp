const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})

const Actor = mongoose.model('Actor', actorSchema)

module.exports = Actor