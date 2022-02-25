const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cinemaSchema = new Schema({
  name: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
  city: {type: Schema.Types.ObjectId, ref: "City"},
  address: { type: String, required: true },
  movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
  halls: {type: String},
  // halls: [{ type: Schema.Types.ObjectId, ref: "Halls" }],
  seats: {type: String}
});

module.exports = mongoose.model("Cinemas", cinemaSchema);
