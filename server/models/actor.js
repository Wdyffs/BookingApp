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

const Actors = mongoose.model('Actors', actorSchema)

module.exports = Actors