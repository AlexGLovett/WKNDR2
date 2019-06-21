const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  display_name: { type: String, required: true },
  email: { type: String, required: true },
  uid: { type: String, required: true },
  zipcode: { type: Number, required: true },
  distance: { type: Number, required: true },
  interests: { type: Object, required: false },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
