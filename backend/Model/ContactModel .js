const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model("Account", accountSchema);
