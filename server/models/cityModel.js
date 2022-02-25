const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: { type: String, required: true, unique: true},
    cinemas: [{type: Schema.Types.ObjectId, ref: "Cinemas"}],
})

module.exports = mongoose.model("City", citySchema);