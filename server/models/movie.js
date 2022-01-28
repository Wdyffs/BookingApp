const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  cinemas: [{ type: Schema.Types.ObjectId, ref: "Cinemas" }],
  actors: [{ type: Schema.Types.ObjectId, ref: "Actors" }],
  genre: [{ type: Schema.Types.ObjectId, ref: "Genres" }],
});

module.exports = mongoose.model("Movie", movieSchema);
