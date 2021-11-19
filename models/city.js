const mongoose = require('mongoose')

const cityScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  countryId: String
})

const City = mongoose.model('City', cityScheme)

module.exports = City