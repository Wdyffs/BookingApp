const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Genre = mongoose.model('Genre', genreSchema);

//create a document
// const instance = new Genre({ name: 'adventure' });
// instance.save((err) => {
//   if (err) return handleError(err);
// })

// Genre.create({ name: "shutter" }, (err, shutter) => {
//   if (err) return handleError(err);
// })

// console.log(instance);

module.exports = Genre