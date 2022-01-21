const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  value: { type: String, unique: true, default: "User" },
});

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
