const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  countryId: {
    type: Schema.Types.ObjectId,
    ref: 'Country',
    required: true
  }
})

const City = mongoose.model('City', cityScheme)

module.exports = City