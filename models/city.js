const mongoose = require('mongoose')

const cityScheme = new mongoose.Schema({
  name: {
    type: String,
    enum: ['Minsk', 'Gomel', 'Brest', 'Mogilev', 'Vitebsk', 'Grodno'],
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